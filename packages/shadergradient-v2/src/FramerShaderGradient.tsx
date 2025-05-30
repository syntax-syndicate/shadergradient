import { ShaderGradient } from './ShaderGradient'
import { ControlType } from 'framer'
import { GradientT } from './types'

type FramerShaderGradientProps = GradientT & {
  position?: {
    positionX: number
    positionY: number
    positionZ: number
  }
  rotation?: {
    rotationX: number
    rotationY: number
    rotationZ: number
  }
  cameraAngle?: {
    cAzimuthAngle: number
    cPolarAngle: number
  }
  noise?: {
    uDensity: number
    uStrength: number
  }
}

function FramerShaderGradient({
  position,
  rotation,
  cameraAngle,
  noise,
  ...rest
}: FramerShaderGradientProps): JSX.Element {
  const { positionX, positionY, positionZ } = position
  const { rotationX, rotationY, rotationZ } = rotation
  const { cAzimuthAngle, cPolarAngle } = cameraAngle
  const { uDensity, uStrength } = noise

  return (
    <ShaderGradient
      positionX={positionX}
      positionY={positionY}
      positionZ={positionZ}
      rotationX={rotationX}
      rotationY={rotationY}
      rotationZ={rotationZ}
      cAzimuthAngle={cAzimuthAngle}
      cPolarAngle={cPolarAngle}
      uDensity={uDensity}
      uStrength={uStrength}
      {...rest}
    />
  )
}

FramerShaderGradient.propertyControls = {
  control: {
    type: ControlType.Enum,
    options: ['props', 'query'],
    optionTitles: ['Props', 'Query'],
    displaySegmentedControl: true,
  },
  activeTab: {
    title: 'Settings Group',
    type: ControlType.Enum,
    options: ['Shape', 'Colors', 'Effects', 'View'],
    hidden: (props) => props.control === 'query',
  },
  // Shape
  type: {
    type: ControlType.Enum,
    options: ['plane', 'sphere', 'waterPlane'],
    optionTitles: ['Plane', 'Sphere', 'Water'],
    displaySegmentedControl: true,
    hidden: (props) => props.control === 'query' || props.activeTab !== 'Shape',
  },
  shader: {
    type: ControlType.Enum,
    options: ['defaults', 'positionMix'],
    optionTitles: ['Type A', 'Type B'],
    displaySegmentedControl: true,
    hidden: (props) => props.control === 'query' || props.activeTab !== 'Shape',
  },
  animate: {
    type: ControlType.Enum,
    options: ['on', 'off'],
    optionTitles: ['On', 'Off'],
    displaySegmentedControl: true,
    hidden: (props) =>
      props.control === 'query' ||
      (props.activeTab !== 'Shape' && props.activeTab !== 'URL'),
  },
  uTime: {
    title: 'Movements',
    type: ControlType.Number,
    step: 0.1,
    displayStepper: true,
    hidden: (props) =>
      props.animate === 'on' ||
      props.control === 'query' ||
      props.activeTab !== 'Shape',
  },
  uSpeed: {
    title: 'Speed',
    type: ControlType.Number,
    step: 0.1,
    min: 0.1,
    displayStepper: true,
    defaultValue: 0.4,
    hidden: (props) =>
      props.animate === 'off' ||
      props.control === 'query' ||
      props.activeTab !== 'Shape',
  },
  noise: {
    type: ControlType.Object,
    controls: {
      uStrength: {
        type: ControlType.Number,
        title: 'Strength',
        step: 0.1,
        min: 0.1,
        displayStepper: true,
        defaultValue: 4,
      },
      uDensity: {
        type: ControlType.Number,
        title: 'Density',
        step: 0.1,
        min: 0.1,
        displayStepper: true,
        defaultValue: 1.3,
      },
      // uFrequency: {
      //     type: ControlType.Number,
      //     step: 0.1,
      //     min: 0.1,
      //     displayStepper: true,
      //     hidden: (props) =>
      //         props.type !== "sphere" ||
      //         props.control === "query" ||
      //         props.activeTab !== "Shape",
      // },
    },
    hidden: (props) => props.control === 'query' || props.activeTab !== 'Shape',
  },
  uAmplitude: {
    type: ControlType.Number,
    title: 'Spiral',
    step: 0.1,
    min: 0.1,
    displayStepper: true,
    defaultValue: 1,
    hidden: (props) =>
      props.type !== 'sphere' ||
      props.control === 'query' ||
      props.activeTab !== 'Shape',
  },
  pixelDensity: {
    type: ControlType.Number,
    step: 0.1,
    min: 0,
    max: 3,
    displayStepper: true,
    defaultValue: 1,
    hidden: (props) => props.control === 'query' || props.activeTab !== 'Shape',
  },
  // Effects
  grain: {
    type: ControlType.Enum,
    options: ['on', 'off'],
    optionTitles: ['On', 'Off'],
    displaySegmentedControl: true,
    hidden: (props) =>
      props.control === 'query' || props.activeTab !== 'Effects',
  },
  lightType: {
    type: ControlType.Enum,
    options: ['env', '3d'],
    optionTitles: ['Env', 'Light'],
    displaySegmentedControl: true,
    defaultValue: '3d',
    hidden: (props) =>
      props.control === 'query' || props.activeTab !== 'Effects',
  },
  envPreset: {
    type: ControlType.Enum,
    options: ['city', 'dawn', 'lobby'],
    optionTitles: ['City', 'Dawn', 'Lobby'],
    displaySegmentedControl: true,
    hidden: (props) =>
      props.lightType === '3d' ||
      props.control === 'query' ||
      props.activeTab !== 'Effects',
  },
  brightness: {
    type: ControlType.Number,
    step: 0.1,
    min: 0.1,
    max: 3,
    defaultValue: 1.2,
    hidden: (props) =>
      props.lightType === 'env' ||
      props.control === 'query' ||
      props.activeTab !== 'Effects' ||
      props.url,
  },
  reflection: {
    type: ControlType.Number,
    step: 0.1,
    min: 0,
    max: 1,
    defaultValue: 0.1,
    hidden: (props) =>
      props.lightType === '3d' ||
      props.control === 'query' ||
      props.activeTab !== 'Effects' ||
      props.url,
  },
  // Colors
  color1: {
    type: ControlType.Color,
    defaultValue: '#ff5005',
    hidden: (props) =>
      props.control === 'query' || props.activeTab !== 'Colors',
  },
  color2: {
    type: ControlType.Color,
    defaultValue: '#dbba95',
    hidden: (props) =>
      props.control === 'query' || props.activeTab !== 'Colors',
  },
  color3: {
    type: ControlType.Color,
    defaultValue: '#d0bce1',
    hidden: (props) =>
      props.control === 'query' || props.activeTab !== 'Colors',
  },
  // View
  cDistance: {
    title: 'Distance',
    type: ControlType.Number,
    displayStepper: true,
    min: 0,
    max: 20,
    defaultValue: 3.6,
    hidden: (props) =>
      props.type === 'sphere' ||
      props.control === 'query' ||
      props.activeTab !== 'View',
  },
  cameraZoom: {
    type: ControlType.Number,
    displayStepper: true,
    step: 0.1,
    min: 0.1,
    max: 30,
    defaultValue: 1,
    hidden: (props) =>
      props.type !== 'sphere' ||
      props.control === 'query' ||
      props.activeTab !== 'View',
  },
  cameraAngle: {
    type: ControlType.Object,
    controls: {
      cAzimuthAngle: {
        title: 'Azimuth',
        type: ControlType.Number,
        displayStepper: true,
        step: 10,
        min: 0,
        max: 360,
        defaultValue: 180,
      },
      cPolarAngle: {
        title: 'Polar',
        type: ControlType.Number,
        displayStepper: true,
        step: 10,
        min: 0,
        max: 180,
        defaultValue: 90,
      },
    },
    hidden: (props) => props.control === 'query' || props.activeTab !== 'View',
  },
  position: {
    type: ControlType.Object,
    controls: {
      positionX: {
        type: ControlType.Number,
        step: 0.1,
        displayStepper: true,
        defaultValue: -1.4,
      },
      positionY: {
        type: ControlType.Number,
        step: 0.1,
        displayStepper: true,
        defaultValue: 0,
      },
      positionZ: {
        type: ControlType.Number,
        step: 0.1,
        displayStepper: true,
        defaultValue: 0,
      },
    },
    hidden: (props) => props.control === 'query' || props.activeTab !== 'View',
  },
  rotation: {
    type: ControlType.Object,
    controls: {
      rotationX: {
        type: ControlType.Number,
        step: 10,
        min: -360,
        max: 360,
        displayStepper: true,
        defaultValue: 0,
      },
      rotationY: {
        type: ControlType.Number,
        step: 10,
        min: -360,
        max: 360,
        displayStepper: true,
        defaultValue: 10,
      },
      rotationZ: {
        type: ControlType.Number,
        step: 10,
        min: -360,
        max: 360,
        displayStepper: true,
        defaultValue: 50,
      },
    },
    hidden: (props) => props.control === 'query' || props.activeTab !== 'View',
  },
  // urlString
  urlString: {
    type: ControlType.String,
    placeholder: 'URL from shadergradient.co',
    defaultValue:
      'https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false',
    hidden: (props) => props.control === 'props',
  },
  // Tools (🧰)
  zoomOut: {
    type: ControlType.Boolean,
    title: 'View',
    enabledTitle: 'Wide',
    disabledTitle: '-',
    hidden: (props) => props.control === 'query',
  },
  toggleAxis: {
    type: ControlType.Boolean,
    title: 'Axis',
    enabledTitle: 'Guide',
    disabledTitle: '-',
    hidden: (props) => props.control === 'query',
  },
  pointerEvents: {
    type: ControlType.Enum,
    title: 'Touch Control',
    options: ['none', 'auto'],
    optionTitles: ['Disable', 'Enable'],
    displaySegmentedControl: true,
    hidden: (props) => props.control === 'query',
  },
  performantOnCanvas: {
    type: ControlType.Boolean,
    defaultValue: false,
  },
  lazyLoad: {
    type: ControlType.Boolean,
    defaultValue: true,
  },
}

export * from './ShaderGradientCanvas'
export { FramerShaderGradient }
