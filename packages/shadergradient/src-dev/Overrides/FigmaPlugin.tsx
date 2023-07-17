import { ComponentType, useEffect, useState } from 'react'
import React from 'react'
import { useAnimationControls } from 'framer-motion'
import * as qs from 'query-string'
import {
  updateGradientState,
  useUIStore,
  PRESETS,
  useURLQueryState,
  useQueryState,
  useFigma,
} from '../store'
import {
  figma,
  postFigmaMessage,
  postFigmaMessageForSnapShot,
  postFigmaMessageForExport,
} from './FigmaApi'
import { cx } from '@/utils'
import { clock } from '@/Gradient/comps/Mesh/useTimeAnimation'
import { useDBTable } from 'https://framer.com/m/SupabaseConnector-ARlr.js'
import { STRIPE_BILLING_URL, STRIPE_BUY_URL } from '@/consts'

// example from https://github.com/sonnylazuardi/framer-sites-figma-plugin/
export function createRectangle(Component): ComponentType {
  return (props) => {
    return (
      <Component
        {...props}
        onClick={async () => {
          postFigmaMessage(() => {
            const ellipse = figma.createRectangle()
            ellipse.resize(300, 300)
          })
        }}
      />
    )
  }
}

export function insertCanvasAsImage(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [figma] = useFigma() // need to attatch once to listen figma selection changes
    const enabled = figma.selection > 0

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer', opacity: enabled ? 1 : 0.5 }}
        onTap={() => {
          if (enabled) postFigmaMessageForSnapShot(() => void 0)
          else props?.onTap() // move to the alert variant
        }}
      />
    )
  }
}

export function checkEnabled(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [figma] = useFigma()
    const enabled = figma.selection > 0
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer', opacity: enabled ? 1 : 0.5 }}
        onTap={() => {
          if (enabled === false) {
            props?.onError()
          } else props?.onTap()
        }}
        onError={() => {
          console.log('error (checkEnabled)')
        }}
      />
    )
  }
}

let controller
export function extractGIF(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [progress, setProgress] = useState(-1)
    const loading = progress >= 0 && progress < 1

    const [figma] = useFigma()
    const enabled = figma.selection > 0

    const [animate, setAnimate] = useQueryState('animate')
    const [, setUTime] = useQueryState('uTime')
    const [range] = useQueryState('range')
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [frameRate] = useQueryState('frameRate')
    const [pixelDensity] = useQueryState('pixelDensity')
    const [destination] = useQueryState('destination')
    const [format] = useQueryState('format')

    const [duration, setDuration] = useState(0)
    const [size, setSize] = useState(0)

    const figma_user_id = figma.user?.id
    const [rows, dbLoading, insertRow, updateRow] = useDBTable(
      'users',
      'sg-figma'
    )
    const userDB = rows.find((r) => r.figma_user_id === figma_user_id)
    const credits = userDB ? userDB.credits : 5 // initial credits when there is no user in DB.
    const [subscription, subDBLoading] = useSubscription('sub1')
    const needSubscribe = credits <= 0 && !subDBLoading && !subscription
    const titleText = needSubscribe
      ? 'Upgrade to Pro'
      : destination === 'onCanvas'
      ? 'Add GIF to canvas'
      : 'Download'
    const creditText = !subscription && `(${credits} credit left)`

    useEffect(() => {
      setDuration(rangeEnd - rangeStart)
    }, [rangeStart, rangeEnd])

    useEffect(() => {
      setSize(0.72 * duration * frameRate * pixelDensity)
    }, [duration, pixelDensity, frameRate])

    const valid = animate === 'on' && range === 'enabled' && size < 300
    const option = {
      rangeStart,
      rangeEnd,
      setAnimate,
      setUTime,
      frameRate,
      destination,
      format,
    }

    let variant = 'dbLoading'
    if (loading) variant = 'loading'
    else if (size > 300) variant = 'error-1'
    else if (!enabled) variant = 'error-2'
    // when all datas are ready
    else if (userDB && !subDBLoading) variant = 'default'
    else if (needSubscribe) variant = 'upgrade'

    return (
      <>
        <Component
          {...props}
          key={progress} // need to flush Framer button
          style={{ ...style, cursor: 'pointer' }}
          onTapGIF={() => {
            controller = new AbortController() // need to make a new one on every exportings

            if (enabled && valid) {
              if (needSubscribe)
                props?.onTapGIFU() // move to the upgrade variant
              else {
                // start to extract GIF
                setProgress(0)
                console.log('startTime', Date.now())
                clock.start() // restart the clock
                postFigmaMessageForExport(option, setProgress, controller)
                if (userDB) updateRow({ id: userDB.id, credits: credits - 1 })
                else insertRow({ figma_user_id })
              }
            } else props?.onTapGIF() // move to the alert variant
          }}
          onTapGIFU={() => console.log('onTapGIFU')} // ignore the default event
          progress={progress * 100}
          title={titleText}
          credit={creditText}
          variant={variant}
        />
        {/* clickable layer on exporting */}
        {variant === 'loading' && (
          <div
            onClick={() => controller.abort()}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              cursor: 'wait',
            }}
          />
        )}
      </>
    )
  }
}

export function isUpgraded(Component): ComponentType {
  return (props) => {
    const [subscription] = useSubscription(props['data-framer-name'])
    if (subscription) return <Component {...props} />
  }
}
export function upgradingText(Component): ComponentType {
  return (props) => {
    const [subscription] = useSubscription(props['data-framer-name'])
    // if (subscription)
    return (
      <Component {...props} text={subscription ? 'Upgraded!' : 'Waiting..'} />
    )
  }
}
export function userEmail(Component): ComponentType {
  return (props) => {
    const [userDB] = useUserDB()
    return <Component {...props} text={userDB?.email || ''} />
  }
}

export function userInfo(Component): ComponentType {
  return (props) => {
    const [subscription, subDBLoading] = useSubscription('userInfo-channel')
    const [userDB] = useUserDB()

    let variant = 'Loading'
    if (subDBLoading) variant = 'Loading'
    else if (subscription) variant = 'Pro'
    else variant = 'Free'

    return (
      <Component
        {...props}
        supportLink={`${STRIPE_BILLING_URL}?prefilled_email=${encodeURIComponent(
          userDB?.email
        )}`}
        status={subscription ? 'PRO USER' : 'FREE USER'}
        email={userDB ? `(${userDB?.email})` : ''}
        variant={variant}
      />
    )
  }
}

export function extractGIFDEV(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => alert('This feature is under development.')}
      />
    )
  }
}

export function subscribeLink(Component): ComponentType {
  return (props) => {
    const [figma] = useFigma()

    return (
      <Component
        {...props}
        href={`${STRIPE_BUY_URL}?client_reference_id=${figma.user?.id}`}
      />
    )
  }
}

export function ArrowLeft(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const setActivePreset = useUIStore((state) => state.setActivePreset)

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          let presetNumber
          if (activePreset !== 0) {
            presetNumber = activePreset - 1
          } else {
            presetNumber = PRESETS.length - 1
          }

          setActivePreset(presetNumber)
          updateGradientState(PRESETS[presetNumber].url)
        }}
      />
    )
  }
}
export function ArrowRight(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const activePreset = useUIStore((state) => state.activePreset)
    const setActivePreset = useUIStore((state) => state.setActivePreset)

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          let presetNumber
          if (activePreset !== PRESETS.length - 1) {
            presetNumber = activePreset + 1
          } else {
            presetNumber = 0
          }

          setActivePreset(presetNumber)
          updateGradientState(PRESETS[presetNumber].url)
        }}
      />
    )
  }
}

export function ActiveTitle(Component): ComponentType {
  return (props) => {
    const activePreset = useUIStore((state) => state.activePreset)

    return <Component {...props} text={PRESETS[activePreset].title} />
  }
}

// ToolsBox
export function Tool3dAxis(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [toggleAxis, setToggleAxis] = useQueryState('toggleAxis')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => setToggleAxis(!toggleAxis)}
      />
    )
  }
}
export function ToolZoomOut(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [zoomOut, setZoomOut] = useQueryState('zoomOut')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => setZoomOut(!zoomOut)}
      />
    )
  }
}
export function ToolCopy(Component): ComponentType {
  return ({ style, ...props }: any) => {
    const [copyUrlText, setCopyUrl] = React.useState('copy url')

    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={async () => {
          window.navigator.clipboard.writeText(window.location.href)
          setCopyUrl('copied!')
          await setTimeout(() => {
            setCopyUrl('copy url')
          }, 1000)
        }}
      />
    )
  }
}
export function ToolUndo(Component): ComponentType {
  return ({ style, ...props }: any) => {
    return (
      <Component
        {...props}
        style={{ ...style, cursor: 'pointer' }}
        onClick={() => {
          const prevUrls = window.history.state.prevUrls || []

          if (prevUrls.length > 1) {
            prevUrls.pop() // remove current url

            const lastURL = new URL(prevUrls[prevUrls.length - 1]).search
            updateGradientState(lastURL)

            prevUrls.pop() // remove the updated url(lastURL)
            window.history.pushState({ prevUrls }, document.title, '') // sync the prevUrls
          } else alert('no history')
        }}
      />
    )
  }
}

export function UrlInput(Component): ComponentType {
  return (props: any) => {
    const setQueryValue = useURLQueryState()

    const [value, setValue] = useState('')
    const [valid, setValid] = useState(true)

    let variant = 'default'
    if (value) {
      if (valid) variant = 'valid'
      else variant = 'invalid'
    }

    return (
      <Component
        {...props}
        onChange={(e) => {
          const value = e.target.value
          setValue(value)

          if (isValidUrl(value)) setValid(true)
          else setValid(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && valid) {
            setQueryValue(value)
            props?.onKeyDown() // hide the Input (back to the default variant)
          }
        }}
        onSubmit={() => {
          if (valid) {
            setQueryValue(value)
            props?.onSubmit() // hide the Input (back to the default variant)
          }
        }}
        variant={variant}
      />
    )
  }
}

export function LoadViewAfterStyleSheet(Component): ComponentType {
  return (props: any) => {
    useFigmaMessage()
    const [foundStylesheet, setFoundStylesheet] = useState(false)

    useEffect(() => {
      const interval = setInterval(() => {
        const stylesheet = document.getElementById('shadergradient-app-styles')
        if (stylesheet) setFoundStylesheet(true)
      }, 200)

      return () => clearInterval(interval)
    }, [])

    return (
      <Component
        {...props}
        style={{
          ...props.style,
          opacity: foundStylesheet ? 1 : 0,
          zIndex: 2147483640,
        }}
      />
    )
  }
}

const isValidUrl = (urlString) => {
  const state = qs.parse(urlString, {
    parseNumbers: true,
    parseBooleans: true,
    arrayFormat: 'index',
  })

  // TODO: more accurate validation check
  return state.color1 && state.color2 && state.color3
}

// styles
export function HideScrollBar(Component): ComponentType {
  return ({ className, ...props }: any) => (
    <Component {...props} className={cx('hide-scrollbar', className)} />
  )
}

// Share Figma states to UI
function useFigmaMessage() {
  const [, setFigma] = useFigma()

  useEffect(() => {
    parent.postMessage({ pluginMessage: { type: 'UI_READY' } }, '*') // init selection
    onmessage = (event) => {
      const msg = event.data.pluginMessage

      switch (msg?.type) {
        case 'SELECTION':
          setFigma({ selection: msg.selection.length })
          break

        case 'USER_INFO':
          setFigma({ user: msg.user })
          break

        default:
          break
      }
    }
  }, [])
}

export function GIFStatusOverride(Component): ComponentType {
  return ({ ...props }: any) => {
    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')
    const [pixelDensity] = useQueryState('pixelDensity')
    const [frameRate] = useQueryState('frameRate')
    const [destination] = useQueryState('destination')
    const [width, setWidth] = useState(333)
    const [height, setHeight] = useState(333)

    const sizeLimit = 300

    const [duration, setDuration] = useState(0)
    const [size, setSize] = useState(0)
    useEffect(() => {
      setDuration(rangeEnd - rangeStart)
    }, [rangeStart, rangeEnd])

    useEffect(() => {
      setSize(0.72 * duration * frameRate * pixelDensity)
    }, [duration, pixelDensity, frameRate])

    return (
      <Component
        {...props}
        size={`${Math.ceil(size * 10) / 10}MB`}
        duration={`(${Math.ceil(duration * 10) / 10}s)`}
        resolution={`${width} x ${height} px`}
        variant={
          size > sizeLimit && destination === 'onCanvas'
            ? 'Error'
            : destination === 'localFile'
            ? 'Export'
            : 'Default'
        }
      />
    )
  }
}

export function Timeline(Component): ComponentType {
  return ({ ...props }: any) => {
    const controls = useAnimationControls()

    const [rangeStart] = useQueryState('rangeStart')
    const [rangeEnd] = useQueryState('rangeEnd')

    const [duration, setDuration] = useState(rangeEnd - rangeStart)

    const sequence = async () => {
      controls.set({ width: '0%', transition: { duration: 0 } })
      return await controls.start({
        width: '100%',
        transition: {
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      })
    }

    useEffect(() => {
      setDuration(rangeEnd - rangeStart)
      clock.start()
      sequence()
    }, [rangeEnd, rangeStart])

    return <Component {...props} animate={controls} />
  }
}

function useUserDB() {
  const [figma] = useFigma()
  const figma_user_id = figma.user?.id

  const [rows, dbLoading] = useDBTable('users', 'sg-figma-hook')
  return [rows.find((r) => r.figma_user_id === figma_user_id), dbLoading]
}
function useSubscription(subId) {
  const [userDB, userDBLoading] = useUserDB()
  const userId = userDB?.id

  const [subscriptionRows, dbLoading] = useDBTable('subscriptions', subId)
  const subscription = subscriptionRows.find(
    (r) => r.user_id === userId && r.status === 'active'
  )

  return [subscription, userDBLoading || dbLoading]
}
