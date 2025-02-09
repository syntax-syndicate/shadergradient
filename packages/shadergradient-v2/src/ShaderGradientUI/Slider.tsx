import ReactSlider from 'react-slider'
import { useState, useEffect } from 'react'
import './slider.css'

type SliderPropsT = {
  title: string
  defaultValue: number
  setValue: any
  step: number
  min: number
  max: number
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function Slider({
  title,
  defaultValue,
  setValue,
  step,
  min,
  max,
}: SliderPropsT): JSX.Element {
  const [sharedValue, setSharedValue] = useState<any>(defaultValue)
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)

  useEffect(() => {
    setSharedValue(defaultValue) // init once with the passed value (from search params)
  }, [])

  useEffect(() => {
    setValue(sharedValue)
  }, [sharedValue])

  useEffect(() => {
    setSharedValue(defaultValue)
  }, [defaultValue])

  return (
    <div
      className='flex items-center w-full h-[26px] flex-row gap-2'
      style={{ fontFamily: 'Inter Medium' }}
    >
      <div className='w-[100px] flex items-center flex-shrink-0'>
        <p className='font-medium whitespace-nowrap'>{title}</p>
      </div>
      <div
        className='flex items-center w-full h-fit flex-row gap-2'
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <ReactSlider
          value={Number(sharedValue)}
          step={step}
          min={min}
          max={max}
          onChange={(value, index) => setSharedValue(value)}
          //styles
          className={
            'w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 ' +
            (isMouseOver === true ? 'h-[26px]' : 'h-[5px]')
          }
          trackClassName={
            'h-full duration-300 ' +
            (isMouseOver === true ? 'bg-[#ff340a]' : 'bg-[#ABABAB]')
          }
          renderTrack={(props, state) => (
            <div
              {...props}
              className={
                'h-full flex relative ' +
                (isMouseOver === true ? 'bg-[#ff340a]' : 'bg-[#ABABAB]')
              }
              style={{
                ...props.style,
                opacity: state.index === 1 ? 0 : 1,
              }}
            />
          )}
          renderThumb={(props, state) => (
            <div
              {...props}
              className='w-[8px] h-full justify-center items-center flex'
            >
              <div
                className={
                  'absolute w-[2px] bg-[#ffffff] rounded-full pointer-events-none duration-200 h-[30%] ' +
                  (isMouseOver === true ? 'opacity-100' : 'opacity-0')
                }
              />
            </div>
          )}
        />
        <input
          type='number'
          value={sharedValue}
          onChange={(e) => setSharedValue(e.target.value)}
          className={
            'font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none ' +
            (isMouseOver === true ? 'text-[#ff340a]' : 'text-[#000000]')
          }
          min={min}
          max={max}
          step={step}
        />
      </div>
    </div>
  )
}
