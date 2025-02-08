import DieText from './DieText'
import Stop from './Stop'

const D3 = ({
  result,
  color,
  randId,
}: {
  result: number
  color: number
  randId: string
}) => {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 128 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 104.5L37.5 117L51 121.5L70.5 123L89.5 118.5L102.5 111.5L93 105L85.5 84.5L81.5 66L80.5 47.5L82 33.5L84.5 26.5L88 20.5L95 16L79.5 9L64.7 7L63 18L56 34L33.5 64.5L18 77L5.5 79.5L12.5 94.5L20 104.5Z"
          fill={`url(#${randId}_0)`}
        />
        <path
          d="M58 8C57.6 8 57 7.6 57 7C57 6.6 57.3581 6 57.8784 6L58 8ZM57.8784 6C65.8 5 74 6.3 81.2 8.5C88.4 10.7 94.5 13.9 98 16.753L97 18.247C93.5261 15.6 87.6 12.5 80.7 10.345C73.7 8.18457 65.7 6 58 8L58 6Z"
          fill="black"
        />
        <path
          d="M107.5 107.5C79 133 22 131 4.5 76.5"
          stroke="black"
          strokeWidth="1.9"
          strokeMiterlimit="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M92 102.5L99 110L104 110L110 104.5L114.5 87.5L114.5 59.5L108 31.5L101.5 21L95.5 16.5L89.5 19L84 26.5L80.5 45L83.5 79L92 102.5Z"
          fill={`url(#${randId}_1)`}
        />
        <path
          d="M94.5 16.5C116.5 18 123.5 110 101.5 110C84.5 110 68 23 94.5 16.5Z"
          stroke="black"
          strokeWidth="1.9"
          strokeMiterlimit="1"
          strokeLinejoin="round"
        />
        <path
          d="M62.5 19L64.5 10L63 7L55.5 7.5L40.5 17L23 36L8.5 58.5L4 73.5L6.5 79.5L17 77.5L31.5 66.5L51.5 41L62.5 19Z"
          fill={`url(#${randId}_2)`}
        />
        <path
          d="M6 79C-6 67 44 1 63 7C73.5 10.3 30.5 84.5 6 79Z"
          stroke="black"
          strokeWidth="1.9"
          strokeMiterlimit="1"
          strokeLinejoin="round"
        />
        <path
          d="M4 68L7 86L17 102L32 115L48 122L63 124L88 120L107 109L115 92L115 66L112 41L97 15L69 5L50 8L21 34L4 68Z"
          fill="#996600"
          fillOpacity="0.3"
        />
        <path
          d="M5 71C2 96 46 149 105 110C124 100 116 33 96 15C92 12 70 4 56 6C41 9 8 44 5 71Z"
          stroke="black"
          strokeWidth="4"
          strokeMiterlimit="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <DieText
          id="d3text"
          matrix="matrix(1, 0.35, -0.35, .9, 69, 32)"
          result={result}
        />
        <defs>
          <linearGradient
            id={`${randId}_0`}
            x1="84"
            y1="3"
            x2="41"
            y2="130"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.03" stopColor={`hsl(${color}, 100%, 30%)`} />
            <stop offset="0.18" stopColor={`hsl(${color}, 100%, 50%)`} />
            <stop offset="0.47" stopColor={`hsl(${color}, 100%, 30%)`} />
            <stop offset=".8" stopColor={`hsl(${color}, 100%, 40%)`} />
          </linearGradient>
          <linearGradient
            id={`${randId}_1`}
            x1="156"
            y1="63"
            x2="-11"
            y2="73"
            gradientUnits="userSpaceOnUse"
          >
            <Stop color={color} />
          </linearGradient>
          <linearGradient
            id={`${randId}_2`}
            x1="-20"
            y1="29"
            x2="77"
            y2="143"
            gradientUnits="userSpaceOnUse"
          >
            <Stop color={color} />
          </linearGradient>
        </defs>
      </svg>
    </>
  )
}

export default D3
