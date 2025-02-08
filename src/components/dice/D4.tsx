import DieText from './DieText'
import Stop from './Stop'

const pathAttributes: { [key: string]: string } = {
  stroke: 'black',
  strokeWidth: '2',
  strokeLinejoin: 'round',
}

const D4 = ({
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
      viewBox="0, 0, 134.152, 123.006"
    >
      <g id="dice" transform="translate(2, 2)">
        <g id="d4">
          <path
            d="M50, 4 L1, 85 L2, 95 L28, 116 L51, 4 L50, 4 z"
            fill={`url(#${randId})`}
          />
          <path
            d="M28, 117 L52, 1 C56, -1 61, -0 65, 4 L130, 89 C130, 98 128, 103 125, 103 L42, 119 C37, 119 32, 118 28, 117 z"
            fill={`url(#${randId})`}
          />
          <path
            id="d4Color"
            d="M42, 118 L122, 104 C128, 102 130, 98 129, 90 L64, 3 C58, -0 52, -2 48, 5 L1, 83 C-0, 89 -0, 94 2, 97 L25, 115 C30, 118 35, 119 42, 118 z"
            fill="#996600"
            fillOpacity="0.3"
          />
          <path
            d="M42.2, 119 L123, 104 C128.4, 103 131, 98 130, 90 L64.5, 4 C58, -0.8 52.6, -2 48, 5 L2, 83 C-0.8, 89.5 -0.5, 94 2, 98 L25, 115 C30, 118 36, 119 42, 119 z"
            fillOpacity="0"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28, 116 L51, 8 C52, 5 52.5, 3 54.5, 0.6"
            fillOpacity="0"
            {...pathAttributes}
          />
          <path
            d="M25.4, 55 L33, 48.4 L34, 40.5 L39, 45 L35, 51.5 L30.5, 58"
            fillOpacity="0"
            {...pathAttributes}
            strokeLinecap="round"
          />
          <path
            d="M12, 96 L18, 83 L16, 74 L28, 82.5 L21, 89.5 L26, 98 "
            fillOpacity="0"
            {...pathAttributes}
            strokeLinecap="round"
          />
          <DieText
            id="d4text"
            matrix="matrix(0.987,  -0.162,  0.162,  0.987,  69.515,  69.768)"
            result={result}
          />
          <g
            id="mod"
            transform="translate(4, -13)"
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
                stroke="black"
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
                fill="black"
              />
            </text>
          </g>
        </g>
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={randId}
          x1={-10}
          y1={10}
          x2={50}
          y2={-5}
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={randId}
          x1={100}
          y1={100}
          x2={75}
          y2={25}
        >
          {Stop({ color: color })}
        </linearGradient>
      </defs>
    </svg>
  )
}

export default D4
