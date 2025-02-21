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
    x1: '44',
    y1: '151',
    x2: '-10',
    y2: '12',
  },
  {
    x1: '102',
    y1: '116',
    x2: '41',
    y2: '23',
  },
  {
    x1: '88',
    y1: '28',
    x2: '112',
    y2: '7',
  },
  {
    x1: '37',
    y1: '-0',
    x2: '63',
    y2: '61',
  },
  {
    x1: '107',
    y1: '86',
    x2: '149',
    y2: '77',
  },
  {
    x1: '109',
    y1: '45',
    x2: '151',
    y2: '49',
  },
  {
    x1: '-12',
    y1: '89',
    x2: '23',
    y2: '80',
  },
  {
    x1: '-18',
    y1: '49',
    x2: '25',
    y2: '40',
  },
  {
    x1: '97',
    y1: '207',
    x2: '-4',
    y2: '52',
  },
  {
    x1: '119',
    y1: '111',
    x2: '18',
    y2: '68',
  },
  {
    x1: '124',
    y1: '55',
    x2: '28',
    y2: '-5',
  },
  {
    x1: '38',
    y1: '-66',
    x2: '20',
    y2: '53',
  },
  {
    x1: '207',
    y1: '95',
    x2: '39',
    y2: '89',
  },
]

const D30 = ({
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
            {...gradient}
            gradientUnits="userSpaceOnUse"
          >
            {Stop({ color: color, saturation: saturation })}
          </linearGradient>
        ))}
      </defs>

      <path
        d="M59 124 L47 116 L26 106 L11 103 L34 120 L59 124Z"
        fill={`url(#${randId}_0)`}
      />
      <path d="M7 102  L35 120 L63 125 L24 105.3 L7 102" {...pathAttributes} />
      <path d="M119 99 L100 105 L71 122 L94 119" fill={`url(#${randId}_1)`} />
      <path
        d="M63 125 L92 119 L119.4 98 L100 105.3 L63 125Z"
        {...pathAttributes}
      />
      <path
        d="M68.7 10.9 L80.76 18.6 L101.6 28.6 L116.9 31 L94.3 17 L68.7 10"
        fill={`url(#${randId}_2)`}
      />
      <path
        d="M119.4 33 L90.6 14.8 L62.4 9 L102.5 29.7 L119.4 33Z"
        {...pathAttributes}
      />
      <path
        d="M8.5 35.6 L26 28.6 L56.7 11.6 L33.4 15.5 L8.5 35.6Z"
        fill={`url(#${randId}_3)`}
      />
      <path
        d="M62.6 8.6 L33.7 14.8 L7 37.5 L25 28.6 L62.6 8.6"
        {...pathAttributes}
      />
      <path
        d="M123 68.3 L107 68.3 L101.5 105.3 L119 98 L123 68.3Z"
        fill={`url(#${randId}_4)`}
      />
      <path
        d="M120.5 98 L124 67.5 L105 67.5 L101.7 104.57 L120.5 98"
        {...pathAttributes}
      />
      <path
        d="M119 33 L101.5 31 L105.5 68 L123 67 L119 33Z"
        fill={`url(#${randId}_5)`}
      />
      <path
        d="M124.5 68 L119.7 33.4 L102.8 30.3 L106 68 L124.5 68"
        {...pathAttributes}
      />
      <path
        d="M7.7 102.7 L25.4 105 L21.4 68 L3.7 68.7 L7.7 102.7Z"
        fill={`url(#${randId}_6)`}
      />
      <path
        d="M2.9 68 L7.744 102.7 L24.6 105.8 L21.3 68 L3 68Z"
        {...pathAttributes}
      />
      <path
        d="M3.65 67.7 L19.8 67.7 L25.4 30.7 L7.7 37.9 L3.65 67.7"
        fill={`url(#${randId}_7)`}
      />
      <path
        d="M6.9 37.9 L2.9 67 L21.6 67 L26 29.4 L6.9 37.9Z"
        {...pathAttributes}
      />
      <path
        d="M63 124.6 L62 91.5 L21.3 69 L24.5 104.6 L63 124.6Z"
        fill={`url(#${randId}_8)`}
      />
      <path
        d="M21 69 L24.7 105.341 L63 124.6 L62.3 93.4 L21 69"
        {...pathAttributes}
      />
      <path
        d="M104 68.4 L63.5 91.5 L63.5 123 L100.8 105.42 L104 68.4Z"
        fill={`url(#${randId}_9)`}
      />
      <path
        d="M63.6 125 L101.7 104.6 L105.6 67 L62.4 92.4 L63.6 125"
        {...pathAttributes}
      />
      <path
        d="M63.9 10 L63.9 43 L104.8 64.9 L101.6 30 L63.9 10"
        fill={`url(#${randId}_10)`}
      />
      <path
        d="M105.6 66.4 L101.6 29.4 L63 9.3 L63 43 L105.6 66.4Z"
        {...pathAttributes}
      />
      <path
        d="M22 66.4 L62.7 43 L62.7 11.6 L25.4 29.4 L22 66.4Z"
        fill={`url(#${randId}_11)`}
      />
      <path
        d="M62.3 9.3 L26 28.6 L20.6 68 L62.3 43 L62.3 9.3Z"
        {...pathAttributes}
      />
      <path
        d="M20.6 68.4 L62 44.5 L105.6 66.7 L61 92 L20.6 68.4Z"
        fill={`url(#${randId}_12)`}
      />
      <path
        d="M20.6 68.6 L61.6 43 L105.6 66.8 L61.6 92.6 L20.6 68.6Z"
        {...pathAttributes}
      />
      <path
        d="M6.9 36.8 L33.5 14 L62.7 7 L92.7 14 L120 31.5 L127.4 67.5 L122.7 94.7 L94.7 118.8 L62.8 127.4 L33.5 120 L6.9 102.7 L2.9 67.5 L6.9 36.8"
        fill="#996600"
        fillOpacity="0.3"
      />
      <path
        d="M6 36.4476 L33.6 13 L62.6 8 L92 14 L120 31.8 L125 67.5 L122.4 94.9 L93 119.9 L63.4 126 L35.5 121 L6 103 L2 67.4 L6 36.4"
        stroke="black"
        strokeWidth="4"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 55.9 L12.3626 54 L19 53 L13.3476 50 L13 43"
        {...runePathAttributes}
      />
      <path
        d="M111.373 50.8 L110 43.7 L114 43 L117.4 54"
        {...runePathAttributes}
      />
      <path d="M13 79.6 L15 89.8" {...runePathAttributes} />
      <path
        d="M32 39 L48.6 26 L49.7 40.7 L43 36 L42.7 45.4"
        {...runePathAttributes}
      />
      <path
        d="M73.8 109.5 L95.8 95.7 L84.4 87 L84.7 102.7 L74 96.8 L76 102.4"
        {...runePathAttributes}
      />
      <path
        d="M112.4 80.7 L116 73.8 L114 87.9 L109.4 81.4"
        {...runePathAttributes}
      />
      <path d="M34.813 91.9 L54 102.8 L45.5 102" {...runePathAttributes} />
      <path d="M91.9 41 L82.6 32.8 L84.5 40 L77.4 36" {...runePathAttributes} />

      <DieText
        id="d24text"
        matrix="matrix(1, -0.007, 0.007, 1, 62, 70)"
        result={result}
      />
    </svg>
  )
}

export default D30
