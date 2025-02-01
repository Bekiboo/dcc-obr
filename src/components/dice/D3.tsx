import { useEffect, useState } from 'react'

const D3 = ({ result, color }: { result: number; color: string }) => {
  const [resultToRomanNumeral, setResultToRomanNumeral] = useState<string>('I')

  useEffect(() => {
    const romanNumerals = ['I', 'II', 'III']
    setResultToRomanNumeral(romanNumerals[result - 1])
  }, [result])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0"
      y="0"
      width="155.894"
      height="143.462"
      viewBox="0, 0, 155.894, 143.462"
    >
      <defs>
        <linearGradient
          id="D3_gradient_1"
          gradientUnits="userSpaceOnUse"
          x1="-1.291"
          y1="1"
          x2="-0.256"
          y2="1"
          gradientTransform="matrix(-73.756, 59.733, 59.733, 73.756, -72.342, 49.985)"
        >
          <stop offset="0" stop-color={`hsl(${color}, 100%, 50%)`} />
          <stop offset="1" stop-color={`hsl(${color}, 100%, 30%)`} />
        </linearGradient>
        <linearGradient
          id="D3_gradient_2"
          gradientUnits="userSpaceOnUse"
          x1="-1"
          y1="0.774"
          x2="0"
          y2="0.774"
          gradientTransform="matrix(-95.344, 78, 78, 95, 7.802, 18.809)"
        >
          <stop offset="0" stop-color={`hsl(${color}, 100%, 50%)`} />
          <stop offset="1" stop-color={`hsl(${color}, 100%, 30%)`} />
        </linearGradient>
        <linearGradient
          id="D3_gradient_3"
          gradientUnits="userSpaceOnUse"
          x1="-1.592"
          y1="0.316"
          x2="-0.592"
          y2="0.316"
          gradientTransform="matrix(-92.497, 22, 22, 92.498, 0.884, 11)"
        >
          <stop offset="0" stop-color={`hsl(${color}, 100%, 50%)`} />
          <stop offset="1" stop-color={`hsl(${color}, 100%, 30%)`} />
        </linearGradient>
      </defs>
      <g id="dice" transform="translate(5, 4.329)">
        <g id="d3r">
          <path
            d="M8,18 L0,28 L0,107 C0,114 4,118 12,119 L88,133 L87,33 L7,18 z"
            fill="url(#D3_gradient_1)"
          />
          <path
            d="M88,33 L87,71 L88,133 L111,123 L139,109 L143,98 L146,33 L144,18 L88,33 z"
            fill="url(#D3_gradient_2)"
          />
          <path
            d="M63,-0 L24,10.862 L8.433,18.397 L16.365,20.806 L87.582,33.935 L144.246,18.397 L131.262,10 L63,-0 z"
            fill="url(#D3_gradient_3)"
          />
          <path
            id="d3Color"
            d="M87,133 C87,133 27,125 11,118 C0,116 0,108 0,108 L0,30 C0,30 -0,23 8,16 C12,14 21,10 21,10 C35,6 50,2 60,0 C60,-1 93,4 129,10 C129,10 139,14 141,16 C144,19 145,26 145,26 L142,95 C142,95 140,106 139,109 C137,111 132,114 132,114 L87,133 z"
            fill="#996600"
            fill-opacity="0.3"
          />
          <path
            d="M87,134 C87,134 27.435,125.864 11.78,119.522 C0.708,116.727 0.793,109.429 0.793,109.429 L0,30.698 C0,30.698 -0.588,24.565 8.871,17 C12.95,15.222 21.746,11.557 21.746,11.557 C35.419,7.662 50,3 60.772,0.903 C60.694,-0.538 93.364,4.965 129.267,11 C129.267,11 139,14.783 141.819,17.506 C144.309,19.954 145.894,27.491 145.894,27.491 L142.578,96.418 C142.578,96.418 140.919,106.895 139.276,110 C137.939,112.564 132.711,115 132.711,115 L87,134 z"
            fill-opacity="0"
            stroke="#151515"
            stroke-width="4"
          />
          <path
            d="M7,20 L87.341,35 L143,19"
            fill-opacity="0"
            stroke="#151515"
            stroke-width="1.906"
          />
          <path
            d="M87,134 L87.341,34.838"
            fill-opacity="0"
            stroke="#151515"
            stroke-width="1.906"
          />
          <path
            d="M78,33.213 L87,41.706 L95.308,32.438 L87,32.814 L78,33.213 z"
            fill="#151515"
          />
          <path
            d="M126.305,87.522 L111.342,54.919 L121.788,53.309 L116.293,85.67"
            fill-opacity="0"
            stroke="#151515"
            stroke-width="1.95"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1"
          />
          <path
            d="M83,19.663 L71,10 L63.677,12 L72.324,21.867 L80.627,14.321"
            fill-opacity="0"
            stroke="#151515"
            stroke-width="1.9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1"
          />
          <text transform="matrix(1, 0.045, -0.045, 1, 44.8, 78.7)">
            <tspan
              className="die"
              text-anchor="middle"
              alignment-baseline="middle"
              id="d3text"
              x="0"
              y="0"
              font-size="40"
              fill="#151515"
            >
              {resultToRomanNumeral}
            </tspan>
          </text>

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
                fill-opacity="0"
                stroke="#151515"
                stroke-width="1"
                stroke-linejoin="round"
              />
            </g>
            <text transform="matrix(1, 0, 0, 1, 71.432, 116)">
              <tspan
                className="die"
                text-anchor="middle"
                alignment-baseline="middle"
                id="modText"
                x="0"
                y="1"
                font-size="20"
                fill="#151515"
              />
            </text>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default D3
