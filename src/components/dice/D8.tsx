import DieText from './DieText'
import Stop from './Stop'

const D8 = ({
  result,
  color,
  randId,
  saturation,
}: {
  result: number
  color: number
  randId: string
  saturation: number
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      viewBox="0, 0, 127.71, 129.323"
    >
      <defs>
        <linearGradient
          id={`${randId}_0`}
          gradientUnits="userSpaceOnUse"
          x1="7.5"
          y1="6.5"
          x2="8.5"
          y2="6.5"
          gradientTransform="matrix(-34.7, -50, 37, -46.831, 130, 793)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_1`}
          gradientUnits="userSpaceOnUse"
          x1="-13.9"
          y1="8.2"
          x2="-12.9"
          y2="8.2"
          gradientTransform="matrix(-20.6, 37.2, -37.2, -20.6, 102, 684.8)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_2`}
          gradientUnits="userSpaceOnUse"
          x1="12"
          y1="-15"
          x2="13"
          y2="-15"
          gradientTransform="matrix(27, -22, 22, 27, 23, 783)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_3`}
          gradientUnits="userSpaceOnUse"
          x1="4.1"
          y1="6.3"
          x2="5.1"
          y2="6.3"
          gradientTransform="matrix(-77, -48, 48, -77, 143, 785)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
      </defs>
      <g id="dice" transform="translate(2.177, 3)">
        <g id="d8">
          <path
            d="M63.543,122 L120.723,28 L123,94 L63.543,122 z"
            fill={`url(#${randId}_0)`}
          />
          <path
            d="M0,28.427 L64.513,0.646 L120.883,27.83 L0,28.427 z"
            fill={`url(#${randId}_1)`}
          />
          <path
            d="M1.263,98.203 L62.383,123.383 L0.853,29.485 L1.263,98.203 z"
            fill={`url(#${randId}_2)`}
          />
          <path
            d="M119.4,28.244 L62.423,122.363 L1.593,29 L119.393,28.244 z"
            fill={`url(#${randId}_3)`}
          />
          <path
            id="d8Color"
            d="M0.7,27.454 L64.718,0 L121.408,27 L122.418,94.193 L62.638,123.323 L1.188,98 L0.7,27.454 z"
            fill="#996600"
            fillOpacity="0.3"
          />
          <path
            d="M120,28.37 L62.957,122.5 L2.127,29.2 L120,28.37 z"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M0.823,27.454 L64.833,0 L121.523,27 L122.533,94.193 L62.753,123.323 L1.303,98 L0.823,27.454 z"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M8,89 L14.253,75.976 L12.583,67 L24,75.749 L17.113,82.689 L22.233,91"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M105.293,67.777 L117.153,82 L102.373,91.813 L107.403,79.47 L100.333,82.284 L105.393,74.264"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M63.581,24.123 L51.625,15 L70.265,8.651 L60.722,15.812 L69.664,15.137"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <DieText
            id="d8text"
            matrix="matrix(1, -0.045, 0.045, 1, 62, 63)"
            result={result}
          />
        </g>
      </g>
    </svg>
  )
}

export default D8
