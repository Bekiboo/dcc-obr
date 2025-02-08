import DieText from './DieText'
import Stop from './Stop'

const D10 = ({
  result,
  color,
  randId,
}: {
  result: number
  color: number
  randId: string
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      viewBox="0, 0, 140.976, 122.9"
    >
      <defs>
        <linearGradient
          id={`${randId}_0`}
          gradientUnits="userSpaceOnUse"
          x1="23.4"
          y1="24.6"
          x2="24.5"
          y2="24.6"
          gradientTransform="matrix(-18, -15, 15, -18, 67, 859)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_1`}
          gradientUnits="userSpaceOnUse"
          x1="3.7"
          y1="-9.4"
          x2="4.9"
          y2="-9.4"
          gradientTransform="matrix(73, -33, 33, 73, 48, 898)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_2`}
          gradientUnits="userSpaceOnUse"
          x1="0.7"
          y1="32"
          x2="1.8"
          y2="32.1"
          gradientTransform="matrix(-25.5, 0.1, -0.1, -25.5, 148, 867)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_3`}
          gradientUnits="userSpaceOnUse"
          x1="43"
          y1="11"
          x2="44"
          y2="11"
          gradientTransform="matrix(-50, -17, 17, -5, 102, 926)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_4`}
          gradientUnits="userSpaceOnUse"
          x1="25"
          y1="-19"
          x2="26"
          y2="-19"
          gradientTransform="matrix(140, -20, 20, 14, 63, 916)"
        >
          {Stop({ color: color })}
        </linearGradient>
      </defs>
      <g id="dice" transform="translate(1.994, 2)">
        <g id="d10">
          <path
            d="M9,67 L2,59 L-0,52 L14,30 L71,0 L9,67 z"
            fill={`url(#${randId}_0)`}
          />
          <path
            d="M101,89 L52.5,89 C35.3,85.7 23,78.9 10,68.3 C29.4,45.8 50.5,23.3 74.5,0 L86,3 L101,89 z"
            fill={`url(#${randId}_1)`}
          />
          <path
            d="M122,87 C122,87 132,84 135,73 C136,61 132,49 132,49 L86,4 L102,88 L122,87 z"
            fill={`url(#${randId}_2)`}
          />
          <path
            d="M58,118 C58,118 62,117 68,115 C85,110 119,95 125,86 C122,87 132,82 121,85 C99,92 54,89 54,89 C53,100 55,110 58,118 z"
            fill={`url(#${randId}_3)`}
          />
          <path
            d="M57,117 C54,108 52,99 53,89 C52,93 19,76 16,74 C12,78 53,115 57,117 z"
            fill={`url(#${randId}_4)`}
          />
          <path
            id="d10Color"
            d="M3,60 C0,58 -0,54 0,50 L13,30 C31,19 49,9 68,1 C74,-0 79,-0 85,2 L131,49 C134,54 135,59 136,62 C137,66 137,70 136,73 C135,77 133,80 129,82 C109,100 85,111 58,118 C38,100 19,81 3,60 z"
            fill="#996600"
            fillOpacity="0.3"
          />
          <path
            d="M53.835,90.629 C54.383,102 55.792,110.49 58.487,117"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M3,61 C0,58 -0.5,55 0.3,51 L13,31 C31,19.7 49.6,10 69,1.7 C74.4,-0.4 79.9,-0.5 85,2.6 L131.8,49.4 C134,54.8 135.8,59.6 136.7,63 C137,67 137,70 136,73.4 C135,77.4 133.4,80 130,83 C109.4,100.6 85,112 58,118.9 C38.469,100.6 19,82 3,61 z"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M128,83 C104,92 78.5,90.7 52.9,89 C38.4,87 24.5,79 10.9,68 C20.7,52.8 49.4,24.4 73,0.9 C77.7,-0.9 82,0 86,2.8 L101.9,88.7"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M103,41 L110,66.4 L115,57 L111,49 L112.7,42 L117.611,49"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M18,48 L20,37 L23,41 L27,30 L29,37"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M68,108 L67,96 L77,101 L87,95 L87,101 L74,105"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />

          <DieText
            id="d10text"
            matrix="matrix(1, 0.2, -0.2, 1, 62, 58)"
            result={result}
          />
        </g>
      </g>
    </svg>
  )
}

export default D10
