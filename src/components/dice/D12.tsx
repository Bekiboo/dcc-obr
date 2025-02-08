import DieText from './DieText'
import Stop from './Stop'

const D12 = ({
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
      viewBox="0, 0, 129.56, 131.494"
    >
      <defs>
        <linearGradient
          id={`${randId}_0`}
          gradientUnits="userSpaceOnUse"
          x1="4"
          y1="-4"
          x2="5"
          y2="-4"
          gradientTransform="matrix(36, -26, -39, -25, -236, 55)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_1`}
          gradientUnits="userSpaceOnUse"
          x1="3"
          y1="-4"
          x2="5"
          y2="-4"
          gradientTransform="matrix(36, -28, -39, -26, -295, 57)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_2`}
          gradientUnits="userSpaceOnUse"
          x1="7.143"
          y1="-4.187"
          x2="8"
          y2="-3.5"
          gradientTransform="matrix(31, -20, -20, -31, -305, 101)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_3`}
          gradientUnits="userSpaceOnUse"
          x1="4.686"
          y1="-3"
          x2="5.686"
          y2="-3"
          gradientTransform="matrix(44, -15, -47, -14, -267, 133)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_4`}
          gradientUnits="userSpaceOnUse"
          x1="9.659"
          y1="-9.957"
          x2="10.659"
          y2="-9.957"
          gradientTransform="matrix(15, -35, -16, -33, -208, 114)"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_5`}
          gradientUnits="userSpaceOnUse"
          x1="-3"
          y1="3"
          x2="-2"
          y2="3"
          gradientTransform="matrix(-48, 61, 61, 48, -200, 28)"
        >
          {Stop({ color: color })}
        </linearGradient>
      </defs>
      <g id="dice" transform="translate(1.89, 1.633)">
        <g id="d12r">
          <path
            d="M123.94,45.458 L109.67,51.729 L66.67,26.197 L60.97,1.369 L93.29,10.839 L123.94,45.458 z"
            fill={`url(#${randId}_0)`}
          />
          <path
            d="M2.15,48.416 L28.67,53.768 L65.33,26.357 L61.03,0 L20.07,18.166 L2.15,48.416 z"
            fill={`url(#${randId}_1)`}
          />
          <path
            d="M27.82,116.051 L1.06,84.991 L-0,48.254 L28.79,54.174 L46.8,99.511 L27.82,116.051 z"
            fill={`url(#${randId}_2)`}
          />
          <path
            d="M103.89,113.371 L96.18,97.971 L47.04,100.161 L27.82,117.591 L64.31,126.111 L103.89,113.371 z"
            fill={`url(#${randId}_3)`}
          />
          <path
            d="M123.71,46.571 L110.64,52.78 L97.39,96.601 L104.49,112.241 L122.58,82.511 L123.71,46.571 z"
            fill={`url(#${randId}_4)`}
          />
          <g>
            <path
              d="M96.96,98.221 L47.47,100.791 L29.29,53.766 L66.69,25.495 L110.96,51.767 L96.96,98.221 z"
              fill={`url(#${randId}_5)`}
            />
            <path
              d="M96.96,98.221 L47.47,100.791 L29.29,53.766 L66.69,25.495 L110.96,51.767 L96.96,98.221 z"
              fillOpacity="0"
              stroke="#000000"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeMiterlimit="1"
            />
          </g>
          <path
            id="d12Color"
            d="M123.56,43.521 L93.35,9.819 L60.8,0 L17.44,15.777 L0,45.21 L0.67,83.964 L25.87,116.204 L63.85,125.494 L102.69,112.384 L121.28,81.014 L123.56,43.521 z"
            fill="#996600"
            fillOpacity="0.3"
          />
          <path
            d="M0.87,48.417 L28.38,53.815"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M124.67,44.888 L94.46,11.186 L61.91,1.367 L18.55,17.144 L1.11,46.577 L1.78,85.331 L26.98,117.571 L64.96,126.861 L103.8,113.751 L122.39,82.381 L124.67,44.888 z"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M104.47,112.121 L96.8,97.701"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M27.59,117.621 L47.22,100.551"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M125.04,45.001 L110.37,52.003"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M62.07,1.343 L66.44,26"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M47.98,28.359 L37.76,16.347 L30.29,24.626 L37.81,23.998 L34.77,32.119"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M32.66,94.681 L11.62,73.959 L23.11,67.161 L20.04,92.491"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M72.89,116.981 L54.89,107.231 L76.86,105.491 L70.99,109.711"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M110.643,85.238 L117.79,72.26 L114.89,65.074 L107.134,74.896 L115.191,82.149"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <path
            d="M101.18,27.453 L94.59,36.372 L87.22,29.159 L93.74,29.702 L89.32,22.488 L96.76,26.599"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1"
          />
          <DieText
            id="d12text"
            matrix="matrix(1, -0.06, 0.06, 1, 70, 68)"
            result={result}
          />
        </g>
      </g>
    </svg>
  )
}

export default D12
