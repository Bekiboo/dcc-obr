import DieText from './DieText'
import Stop from './Stop'

const D3 = ({ result, color }: { result: number; color: number }) => {
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
          d="M20 104.5L37.5 117L51 121.5L70.5 123L89.5 118.5L102.5 111.5L93 105L85.5 84.5L81.5 66L80.5 47.5L82 33.5L84.5 26.5L88 20.5L95 16L79.5 9L64.6668 6.99999L63 18L56 34L33.5 64.5L18 77L5.5 79.5L12.5 94.5L20 104.5Z"
          fill="url(#paint0_linear_1_27)"
        />
        <path
          d="M58.1216 7.94222C57.6012 8.00936 57.1249 7.64196 57.0578 7.1216C56.9907 6.60124 57.3581 6.12498 57.8784 6.05784L58.1216 7.94222ZM57.8784 6.05784C65.8018 5.03546 74.0686 6.31547 81.2186 8.53005C88.3621 10.7426 94.4739 13.9142 98.0869 16.753L96.9131 18.247C93.5261 15.5858 87.6379 12.5074 80.6564 10.345C73.6814 8.18457 65.6981 6.96459 58.1216 7.94222L57.8784 6.05784Z"
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
          fill="url(#paint1_linear_1_27)"
        />
        <path
          d="M94.4996 16.5004C116.5 18 123.5 110.5 101.499 110.501C84.5 110.501 68 23 94.4996 16.5004Z"
          stroke="black"
          strokeWidth="1.9"
          strokeMiterlimit="1"
          strokeLinejoin="round"
        />
        <path
          d="M62.5 19L64.5 10L63 7L55.5 7.5L40.5 17L23 36L8.5 58.5L4 73.5L6.49993 79.5L17 77.5L31.5 66.5L51.5 41L62.5 19Z"
          fill="url(#paint2_linear_1_27)"
        />
        <path
          d="M5.99928 78.9996C-6 67 44 0.999987 62.9993 6.99958C73.5 10.3155 30.5 84.5 5.99928 78.9996Z"
          stroke="black"
          strokeWidth="1.9"
          strokeMiterlimit="1"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 68L7.5 86L17.5 102L32.5 115.5L48.5 122.5L63.5 124.5L88 120.5L107.5 109.5L115.5 92L115.5 66.5L112 41L97 15L69 5.49999L50.5 7.99999L21.5 34.5L4.5 68Z"
          fill="#996600"
          fillOpacity="0.3"
        />
        <path
          d="M5 71C2 96 46.5 149 105.5 110.5C124 99.5 116 33.5 96.5 15.5C92.311 11.6332 70.2269 3.65463 56 6.49999C41 9.49998 8.23672 44.0274 5 71Z"
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
            id="paint0_linear_1_27"
            x1="84.5"
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
            id="paint1_linear_1_27"
            x1="156.5"
            y1="63"
            x2="-11.9217"
            y2="73.4996"
            gradientUnits="userSpaceOnUse"
          >
            <Stop color={color} />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_27"
            x1="-20"
            y1="29.5"
            x2="77.6607"
            y2="143.091"
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
