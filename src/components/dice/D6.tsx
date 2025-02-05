import DieText from './DieText'
import Stop from './Stop'

const D6 = ({ result, color }: { result: number; color: number }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="100%"
        height="100%"
        viewBox="0, 0, 155.894, 143.462"
      >
        <g id="dice" transform="translate(5, 4.329)">
          <g id="d6r">
            <path
              d="M8,20 L0,28 L0,100 C0,114 4,118 8,119 L88,133 L87,35 L7,20 z"
              fill="url(#D6_gradient_1)"
            />
            <path
              d="M88,33 L87,71 L88,133 L118,123 L139,109 L143,98 L146,33 L144,18 L92,33 z"
              fill="url(#D6_gradient_2)"
            />
            <path
              d="M63,0 L24,10 L4,20 L16,22 L90,35 L144,18 L131,10 L63,-0 z"
              fill="url(#D6_gradient_3)"
            />
            <path
              id="d6Color"
              d="M87,133 C87,133 27,125 11,118 C0,116 0,108 0,108 L0,30 C0,30 -0,23 8,16 C12,14 21,10 21,10 C35,6 50,2 60,0 C60,-1 93,4 129,10 C129,10 139,14 141,16 C144,19 145,26 145,26 L142,95 C142,95 140,106 139,109 C137,111 132,114 132,114 L87,133 z"
              fill="#996600"
              fillOpacity="0.3"
            />
            <path
              d="M87,134 C87,134 27.435,125.864 11.78,119.522 C0.708,116.727 0.793,109.429 0.793,109.429 L0,30.698 C0,30.698 -0.588,24.565 8.871,17 C12.95,15.222 21.746,11.557 21.746,11.557 C35.419,7.662 50,3 60.772,0.903 C60.694,-0.538 93.364,4.965 129.267,11 C129.267,11 139,14.783 141.819,17.506 C144.309,19.954 145.894,27.491 145.894,27.491 L142.578,96.418 C142.578,96.418 140.919,106.895 139.276,110 C137.939,112.564 132.711,115 132.711,115 L87,134 z"
              fillOpacity="0"
              stroke="#151515"
              strokeWidth="4"
            />
            <path
              d="M7,20 L87.341,35 L143,19"
              fillOpacity="0"
              stroke="#151515"
              strokeWidth="1.906"
            />
            <path
              d="M87,134 L87.341,34.838"
              fillOpacity="0"
              stroke="#151515"
              strokeWidth="1.906"
            />
            <path
              d="M78,33.213 L87,41.706 L95.308,32.438 L87,32.814 L78,33.213 z"
              fill="#151515"
            />
            <path
              d="M126.305,87.522 L111.342,54.919 L121.788,53.309 L116.293,85.67"
              fillOpacity="0"
              stroke="#151515"
              strokeWidth="1.95"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1"
            />
            <path
              d="M83,19.663 L71,10 L63.677,12 L72.324,21.867 L80.627,14.321"
              fillOpacity="0"
              stroke="#151515"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1"
            />
            <DieText
              id="d6text"
              matrix="matrix(1, 0.045, -0.045, 1, 44.8, 78.7)"
              result={result}
            />

            <g
              id="mod"
              transform="translate(0, -2)"
              style={{ opacity: 0, visibility: 'hidden' }}
            >
              <g id="modShape" opacity="0.87">
                <path
                  d="M0.608,100 L141.266,100 L141.266,130.656 L0.608,130.656 z"
                  fill="#FFFFCC"
                />
                <path
                  d="M0.608,100 L141.266,100 L141.266,130.656 L0.608,130.656 z"
                  fillOpacity="0"
                  stroke="#151515"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </g>
              <text transform="matrix(1, 0, 0, 1, 71.432, 116)">
                <tspan
                  className="die"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  id="modText"
                  x="0"
                  y="1"
                  fontSize="20"
                  fill="#151515"
                />
              </text>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="D6_gradient_1"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="200"
            x2="100"
            y2="80"
          >
            <Stop color={color} />
          </linearGradient>
          <linearGradient
            id="D6_gradient_2"
            gradientUnits="userSpaceOnUse"
            x1="145"
            y1="145"
            x2="48"
            y2="120"
          >
            <Stop color={color} />
          </linearGradient>
          <linearGradient
            id="D6_gradient_3"
            gradientUnits="userSpaceOnUse"
            x1="84"
            y1="2"
            x2="80"
            y2="65"
          >
            <Stop color={color} />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default D6
