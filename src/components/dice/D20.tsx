import DieText from './DieText'
import Stop from './Stop'

const D20 = ({
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
      width="100%"
      height="100%"
      viewBox="0, 0, 127.05, 133.602"
    >
      <defs>
        <linearGradient
          id={`${randId}_0`}
          gradientUnits="userSpaceOnUse"
          x1="7.068"
          y1="1.479"
          x2="8.068"
          y2="1.479"
          gradientTransform="matrix(-34.003, -48.614, 36.271, -45.576, 297.188, 523.912)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_1`}
          gradientUnits="userSpaceOnUse"
          x1="6.701"
          y1="1.454"
          x2="7.701"
          y2="1.454"
          gradientTransform="matrix(-36.256, -50.963, 38.673, -47.777, 237.358, 524.962)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_2`}
          gradientUnits="userSpaceOnUse"
          x1="13.607"
          y1="10.213"
          x2="14.607"
          y2="10.213"
          gradientTransform="matrix(-68.801, -17.729, 73.389, -16.62, 282.748, 440.229)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_3`}
          gradientUnits="userSpaceOnUse"
          x1="3.167"
          y1="3.773"
          x2="4.167"
          y2="3.773"
          gradientTransform="matrix(-88.277, -24.61, 24.61, -88.277, 311.628, 488.972)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_4`}
          gradientUnits="userSpaceOnUse"
          x1="-15.02"
          y1="8.413"
          x2="-14.02"
          y2="8.413"
          gradientTransform="matrix(-2.205, 26.126, -26.126, -2.205, 256.518, 503.622)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_5`}
          gradientUnits="userSpaceOnUse"
          x1="3.376"
          y1="-10.41"
          x2="4.376"
          y2="-10.41"
          gradientTransform="matrix(30.46, -27.81, 27.81, 30.46, 278.188, 471.034)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_6`}
          gradientUnits="userSpaceOnUse"
          x1="-12.661"
          y1="-8.169"
          x2="-11.661"
          y2="-8.169"
          gradientTransform="matrix(25.198, 16.201, -16.201, 25.198, 189.708, 450.51)"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
      </defs>
      <g id="dice" transform="translate(2.362, 3)">
        <g id="d20">
          <path
            d="M122.518,34.952 L119.448,43.495 L108.278,89.092 L64.098,126.512 L122.408,91.802 L122.518,34.952 z"
            fill={`url(#${randId}_0)`}
          />
          <path
            d="M1.308,32.235 L15.438,90.392 L63.488,128.222 L1.198,93.332 L1.308,32.235 z"
            fill={`url(#${randId}_1)`}
          />
          <path
            d="M3.588,31.256 L64.898,0.819 L120.388,33.701 L62.798,21.139 L2.178,34.21 L3.588,31.256 z"
            fill={`url(#${randId}_2)`}
          />
          <g>
            <path
              d="M15.598,90.132 L62.698,19.816 L107.198,88.742 L15.598,90.132 z"
              fill={`url(#${randId}_3)`}
            />
            <path
              d="M15.598,90.132 L62.698,19.816 L107.198,88.742 L15.598,90.132 z"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeMiterlimit="1"
            />
          </g>
          <g>
            <path
              d="M62.818,125.942 L108.648,89.862 L15.148,90.092 L62.818,125.942 z"
              fill={`url(#${randId}_4)`}
            />
            <path
              d="M62.818,125.942 L108.648,89.862 L15.148,90.092 L62.818,125.942 z"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeMiterlimit="1"
            />
          </g>
          <g>
            <path
              d="M121.338,34.434 L108.648,89.862 L62.578,20.961 L121.338,34.434 z"
              fill={`url(#${randId}_5)`}
            />
            <path
              d="M121.338,34.434 L108.648,89.862 L62.578,20.961 L121.338,34.434 z"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeMiterlimit="1"
            />
          </g>
          <g>
            <path
              d="M15.578,89.952 L62.578,20.961 L2.138,34.494 L15.578,89.952 z"
              fill={`url(#${randId}_6)`}
            />
            <path
              d="M15.578,89.952 L62.578,20.961 L2.138,34.494 L15.578,89.952 z"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeMiterlimit="1"
            />
          </g>
          <path
            id="d20Color"
            d="M1.188,33.205 L65.488,0.31 L122.088,33.205 L121.958,90.552 L63.748,127.912 L1.038,92.112 L1.188,33.205 z"
            fill="#996600"
            fillOpacity="0.3"
          />
          <path
            d="M121.328,90.912 L108.148,89.672"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M0.788,32.895 L65.088,0 L121.688,32.895 L121.558,90.242 L63.348,127.602 L0.638,91.802 L0.788,32.895 z"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M0.608,92.102 L16.098,89.962"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M64.618,1.087 L62.308,21.616"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M66.988,97.712 L65.388,116.952 L53.858,108.322 L61.798,106.792 L55.078,100.612"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M89.391,39.89 L104.561,59.339 L112.901,48.601 L96.891,49.509 L102.461,39.515 L96.751,41.542"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M17.528,61.837 L15.838,41.155 L25.218,51.27 L36.968,36.522 L28.268,57.655 L19.928,51.879"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M36.008,21.015 L55.278,11.095 L50.418,17.486"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M85.808,19.74 L76.658,11.938 L78.488,18.936 L71.538,15.048"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <DieText
            id="d20text"
            matrix="matrix(1, -0.007, 0.007, 1, 62.31, 70)"
            result={result}
          />
        </g>
      </g>
    </svg>
  )
}

export default D20
