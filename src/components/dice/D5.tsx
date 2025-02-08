import Stop from './Stop'

const pathAttributes: { [key: string]: string } = {
  stroke: 'black',
  strokeWidth: '2',
  strokeLinejoin: 'round',
}

const runePathAttributes: { [key: string]: string } = {
  stroke: 'black',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const gradients = [
  {
    x1: '2',
    y1: '2',
    x2: '3',
    y2: '2',
  },
  {
    x1: '27',
    y1: '11',
    x2: '28',
    y2: '11',
  },
  {
    // left
    x1: '-100',
    y1: '100',
    x2: '100',
    y2: '0',
  },
  {
    // bottom
    x1: '100',
    y1: '9',
    x2: '120',
    y2: '-9',
  },
  {
    // bottom right
    x1: '15',
    y1: '-10',
    x2: '160',
    y2: '-100',
  },
  {
    // top
    x1: '28',
    y1: '25',
    x2: '28',
    y2: '25',
  },
  {
    // top slent
    x1: '-1',
    y1: '2',
    x2: '1',
    y2: '-2',
  },
  {
    // right slent
    x1: '0',
    y1: '150',
    x2: '10',
    y2: '0',
  },
  {
    // right
    x1: '0',
    y1: '100',
    x2: '10',
    y2: '0',
  },
]

const D5 = ({
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
      viewBox="0, 0, 138.9, 117.812"
    >
      <defs>
        {gradients.map((gradient, index) => (
          <linearGradient
            key={index}
            id={`${randId}_${index}`}
            x1={gradient.x1}
            y1={gradient.y1}
            x2={gradient.x2}
            y2={gradient.y2}
            gradientUnits="userSpaceOnUse"
          >
            {Stop({ color: color })}
          </linearGradient>
        ))}
      </defs>
      <g id="dice" transform="translate(3, 3)">
        <g id="d5">
          <path
            d="M101.683,95.484 L63.803,22.333 L54.243,21.704 L15.983,80.797 L19.473,86.035 L97.213,100.684 L101.683,95.484 z"
            fill={`url(#${randId}_0)`}
          />
          <path
            d="M19.02,85.906 L15.59,80.919 L0.66,83.467 L11.46,96.522 L19.02,85.906 z"
            fill={`url(#${randId}_1)`}
          />
          <path
            d="M55.011,22.091 L54.371,7.872 L0.721,82.251 L16.041,80.3 L50.541,27.291 L55.011,22.091 z"
            fill={`url(#${randId}_2)`}
          />
          <path
            d="M94.65,111.832 L96.76,100.692 L19.82,85.864 L11.87,95.906 L94.65,111.832 z"
            fill={`url(#${randId}_3)`}
          />
          <path
            d="M113.75,112.252 L119.93,103.162 L102.19,96.667 L97.14,100.422 L95.35,112.282 L113.75,112.252 z"
            fill={`url(#${randId}_4)`}
          />
          <path
            d="M55.21,8.363 L71.78,10.603 L86.19,4.779 L70.03,0.425 L55.21,8.363 z"
            fill={`url(#${randId}_5)`}
          />
          <path
            d="M64.31,23.092 L54.59,21.979 L55.41,8.767 L71.66,11.023 L64.31,23.092 z"
            fill={`url(#${randId}_6)`}
          />
          <path
            d="M120.398,102.002 L71.718,11.093 L64.148,23.673 L102.098,96.206 L120.398,102.002 z"
            fill={`url(#${randId}_7)`}
          />
          <path
            d="M133.36,82.563 L129.74,92.305 L120,101.852 L71.11,9.778 L86.08,4.486 L133.36,82.563 z"
            fill={`url(#${randId}_8)`}
          />
          <path
            id="d5Color"
            d="M12.32,96.626 L0,82.493 L53.11,7.91 L69.79,0 L85.03,2.553 L132.9,82.77 L130.68,90.901 L112.76,111.622 L92.56,111.812 L12.32,96.626 z"
            fill="#996600"
            fillOpacity="0.3"
          />
          <path
            d="M12.32,96.626 L0,82.493 L53.11,7.91 L69.79,0 L85.03,2.553 L132.9,82.77 L130.68,90.901 L112.76,111.622 L92.56,111.812 L12.32,96.626 z"
            fillOpacity="0"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M119.39,100.332 L71.78,9.444 L84.77,5.165"
            fillOpacity="0"
            {...pathAttributes}
          />
          <path
            d="M71.78,9.992 L55.5,7.872 L54.51,21.76 L16.12,80.364 L0,82.971"
            fillOpacity="0"
            {...pathAttributes}
          />
          <path
            d="M15.99,80.702 L19.25,85.401 L11.88,95.946"
            fillOpacity="0"
            {...pathAttributes}
          />
          <path
            d="M19.25,85.929 L97,100.332 L95.23,111.812"
            fillOpacity="0"
            {...pathAttributes}
          />
          <path
            d="M71.07,10.875 L63.95,22.764 L54.77,21.518"
            fillOpacity="0"
            {...pathAttributes}
          />
          <path
            d="M64.23,22.764 L102.23,95.946 L119.26,102.012"
            fillOpacity="0"
            {...pathAttributes}
          />
          <path
            d="M101.84,95.684 L96.77,101.622"
            fillOpacity="0"
            {...pathAttributes}
          />

          <path
            d="M92.92,28.072 L84.79,13.642 L78.21,14.59 L84.86,19.101 L83.97,24.314"
            fillOpacity="0"
            {...runePathAttributes}
          />
          <path
            d="M121.27,80.702 L108.82,68.388 L115.13,66.926 L114.89,80.702"
            fillOpacity="0"
            {...runePathAttributes}
          />

          <text transform="matrix(0.999, 0.051, -0.051, 0.999, 57.829, 66.542)">
            <tspan
              className="die"
              textAnchor="middle"
              alignmentBaseline="middle"
              id="d5text"
              x="-1"
              y="0"
              fontSize="36"
              fill="#000000"
            >
              {result}
            </tspan>
          </text>
          <g
            id="mod"
            transform="translate(4, -20)"
            style={{ opacity: 0, visibility: 'hidden' }}
          >
            <g id="modShape" opacity="0.87">
              <path
                d="M0.608,100.007 L122.518,100.007 L122.518,130.656 L0.608,130.656 z"
                fill="#FFFFCC"
              />
              <path
                d="M0.608,100.007 L122.518,100.007 L122.518,130.656 L0.608,130.656 z"
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

export default D5
