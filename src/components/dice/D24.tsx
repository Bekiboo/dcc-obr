import DieText from './DieText'
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
    id: 'D24_gradient_0',
    x1: '49',
    y1: '122',
    x2: '80',
    y2: '-18',
  },
  {
    id: 'D24_gradient_1',
    x1: '96',
    y1: '116',
    x2: '71',
    y2: '24',
  },
  {
    id: 'D24_gradient_2',
    x1: '69',
    y1: '58',
    x2: '186',
    y2: '85',
  },
  {
    id: 'D24_gradient_3',
    x1: '154',
    y1: '60',
    x2: '74',
    y2: '17',
  },
  {
    id: 'D24_gradient_4',
    x1: '-15',
    y1: '86',
    x2: '68',
    y2: '52',
  },
  {
    id: 'D24_gradient_5',
    x1: '6',
    y1: '32',
    x2: '89',
    y2: '17',
  },
  {
    id: 'D24_gradient_6',
    x1: '148',
    y1: '129',
    x2: '48',
    y2: '1',
  },
  {
    id: 'D24_gradient_7',
    x1: '107',
    y1: '102',
    x2: '-25',
    y2: '14',
  },
  {
    id: 'D24_gradient_8',
    x1: '58',
    y1: '111',
    x2: '-22',
    y2: '3',
  },
  {
    id: 'D24_gradient_9',
    x1: '120',
    y1: '121',
    x2: '77',
    y2: '42',
  },
]

const D24 = ({
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
      width="100%"
      height="100%"
      viewBox="0 0 128 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

      <path
        d="M20.5 101.5 L64 119.5 L63 124 L32.5 117 L20.5 101.5Z"
        fill={`url(#${randId}_0)`}
      />
      <path
        d="M63 124.5 L32.5 117 L18.5 99.5 L64.5 119.5 L63 124.5Z"
        {...pathAttributes}
      />
      <path
        d="M65 119.5 L107 104.5 L89 119.5 L64 124.5 L65 119.5Z"
        fill={`url(#${randId}_1)`}
      />
      <path
        d="M88.5 119.5 L63 124.5 L64.5 120 L109.5 102.5 L88.5 119.5Z"
        {...pathAttributes}
      />
      <path
        d="M105 64 L117.5 48.5 L124 71 L110 101 L105 64Z"
        fill={`url(#${randId}_2)`}
      />
      <path
        d="M124 71 L109.5 102.5 L105 63.5 L117.6 47.4747 L124 71Z"
        {...pathAttributes}
      />
      <path
        d="M72 21.5 L99 17 L117.5 48 L105.5 63 L72 21.5Z"
        fill={`url(#${randId}_3)`}
      />
      <path
        d="M99 16.5 L117.5 47.5 L105 63.5 L70.5 20.5 L99 16.5Z"
        {...pathAttributes}
      />
      <path
        d="M16 44 L33.5 63 L18.5 98 L5 67.5 L16 44Z"
        fill={`url(#${randId}_4)`}
      />
      <path d="M5 67 L16 43.5 L34.5 63 L18.5 99 L5 67Z" {...pathAttributes} />
      <path
        d="M96 16.5 L70.5 20.5 L42 13 L69 10 L96 16.5Z"
        fill={`url(#${randId}_5)`}
      />
      <path d="M69 10 L99 16.5 L71 20.5 L38.5 13 L69 10Z" {...pathAttributes} />
      <path
        d="M70.5 21 L34.5 62.5 L16.5 44 L39 13.5 L70.5 21Z"
        fill={`url(#${randId}_6)`}
      />
      <path d="M34 63 L16 43.5 L38.5 13 L71 20.5 L34 63Z" {...pathAttributes} />
      <path
        d="M109 102.5 L105 64.5 L68 83 L64.5 119.5 L109 102.5Z"
        fill={`url(#${randId}_7)`}
      />
      <path
        d="M109.5 102.5 L105 63.5 L67 83.5 L64.5 120 L109.5 102.5Z"
        {...pathAttributes}
      />
      <path
        d="M64.5 118.5 L67 84 L33.5 63.5 L19 99 L64.5 118.5Z"
        fill={`url(#${randId}_8)`}
      />
      <path
        d="M33.6 63.5 L18.5 99.5 L64.5 119.5 L67 83.5 L33.6 63.5Z"
        {...pathAttributes}
      />
      <path
        d="M104.5 63 L71 22 L34.5 63 L68 83.5 L104.5 63Z"
        fill={`url(#${randId}_9)`}
      />
      <path
        d="M33.5 63.5 L67.5 83.5 L105 63.5 L71 21 L33.5 63.5Z"
        {...pathAttributes}
      />
      <path
        d="M4.5 68 L17.5 102 L30 118 L64 126 L89.5 121 L110.5 105 L117 89.5 L126 70.5 L119 46 L97 15 L69.5 8 L39.5 12 L15.5 41.5 L4.5 68Z"
        fill="#996600"
        fillOpacity="0.3"
      />
      <path
        d="M18 100.5 L32.5 118 L62.5 125.5 L89 120.5 L110 104 L125 71.5 L119 48 L99 15.5 L69 9 L39 12.5 L15.5 42 L4 67.5 L18 100.5Z"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 100 L42 95.5 L33 84.4 L49 93 L56.6 89"
        {...runePathAttributes}
      />
      <path d="M72.5 15.5 L72.5 18 L60 14 L69.5 13" {...runePathAttributes} />
      <path
        d="M11.7885 59.4617 L19.6 79 L24.8 68 L18.97 67 L21.6 59.7"
        {...runePathAttributes}
      />
      <path
        d="M31 39.6574 L49.5 23 L38.7 26.9 L41 47.7193 L46.5 31.5"
        {...runePathAttributes}
      />
      <path
        d="M89 23 L107.732 39 L99 49.5163 L98.4 31 L90 38 L91.5 31.6"
        {...runePathAttributes}
      />
      <path d="M112 72.7 L114 81 L116 65.5 L109 71" {...runePathAttributes} />
      <path
        d="M83.5 115 L77 119.497 L92 114 L87.5 117.5"
        {...runePathAttributes}
      />
      <path d="M33.576 112 L48 118 L43 115" {...runePathAttributes} />
      <path
        d="M85.8147 80 L93.577 96.7915 L83.6 90 L86 101.5"
        {...runePathAttributes}
      />
      <DieText
        id="d24text"
        matrix="matrix(1, -0.007, 0.007, 1, 69, 61)"
        result={result}
      />
    </svg>
  )
}

export default D24
