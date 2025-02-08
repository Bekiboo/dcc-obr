import DieText from './DieText'
import Stop from './Stop'

const D7 = ({
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
      viewBox="0, 0, 137.421, 125.671"
    >
      <defs>
        <linearGradient
          id={`${randId}_0`}
          gradientUnits="userSpaceOnUse"
          x1="8"
          y1="3"
          x2="9"
          y2="3"
          gradientTransform="matrix(35, -51, -51, -35, -106, 662)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_1`}
          gradientUnits="userSpaceOnUse"
          x1="-21"
          y1="-6"
          x2="-20"
          y2="-6"
          gradientTransform="matrix(-13, 21, 21, 13, -41, 565)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_2`}
          gradientUnits="userSpaceOnUse"
          x1="5"
          y1="8"
          x2="6"
          y2="8"
          gradientTransform="matrix(53, -16, -16, -53, -133, 582)"
        >
          {Stop({ color: color })}
        </linearGradient>
      </defs>
      <g id="dice" transform="translate(3, 3)">
        <g id="d7r">
          <path
            d="M123,61 L62.64,23.277 L0.11,51 L25.29,113.87 L35.98,117.033 L91.61,119.982 L98.22,116.822 C109.67,102.958 116.45,81.323 123,61 z"
            fill={`url(#${randId}_0)`}
          />
          <path
            d="M63.58,23.291 L81,0.176 L126.34,29.402 L131.13,36.978 L130.8,44.688 L124.12,60.705 L63.58,23.291 z"
            fill={`url(#${randId}_1)`}
          />
          <path
            d="M1.66,49 L27.74,22.47 L79.6,0.585 L63.01,22.783 L1.66,49 z"
            fill={`url(#${randId}_2)`}
          />
          <path
            id="d7Color"
            d="M32.407,117.434 L24.135,113.426 L0.85,49.809 L29.678,20.899 L80.572,-0.727 L127.959,28.282 L132.703,42.103 L104.814,111.302 L94.964,120.308"
            fill="#996600"
            fillOpacity="0.3"
          />
          <path
            d="M92.69,119.671 L33.44,116.665 C27.78,115.951 24.27,113.483 23.27,108.946 L-0,50.07 L28.27,21.914 C45.87,13.486 63.3,6.227 80.59,-0 L126.66,29.046 C130.08,33.38 131.88,38.258 131.32,43.931 L103.78,111.144 C100.9,116.411 97.17,119.179 92.69,119.671 z"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M123.54,60.708 L62.75,22.205 L0.85,49.809"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="1.95"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M79.89,1.09 L62.4,22.727"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="1.95"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M42.71,19.676 L29.32,26.748 L36.13,29.514 L38.82,24.662 L42.7,25.56"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="1.95"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M114.13,29.443 L91.6,20.719 L98.61,28.553 L88.02,29.619 L106.47,40.985 L107.25,30.114"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="1.95"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <DieText
            id="d7text"
            matrix="matrix(1, 0.025, -0.025, 1, 61, 74)"
            result={result}
          />
          <g
            id="mod"
            transform="translate(3, -10)"
            style={{ opacity: 0, visibility: 'hidden' }}
          >
            <g id="modShape" opacity="0.87">
              <path d="M0.6,100 L123,100 L123,131 L0.6,131 z" fill="#FFFFCC" />
              <path
                d="M0.6,100 L123,100 L123,131 L0.6,131 z"
                fillOpacity="0"
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </g>
            <text transform="matrix(1, 0, 0, 1, 61.165, 115.26)">
              <tspan
                className="die"
                textAnchor="middle"
                alignmentBaseline="middle"
                id="modText"
                x="0"
                y="1"
                fontSize="20"
                fill="#000000"
              />
            </text>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default D7
