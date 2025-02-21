import DieText from './DieText'
import Stop from './Stop'

const D16 = ({
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
        <linearGradient
          id={`${randId}_0`}
          x1="47.5"
          y1="27"
          x2="164.544"
          y2="54.2532"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_1`}
          x1="121"
          y1="77"
          x2="46.7838"
          y2="15.5349"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_2`}
          x1="74.0808"
          y1="80.7353"
          x2="4.09123"
          y2="60.6899"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_3`}
          x1="67.5"
          y1="65.5"
          x2="67.4303"
          y2="12.9941"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_4`}
          x1="148.5"
          y1="129.5"
          x2="47.858"
          y2="1.08552"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_5`}
          x1="88"
          y1="110.5"
          x2="46.7242"
          y2="38.3031"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_6`}
          x1="49.5"
          y1="123.5"
          x2="16.4429"
          y2="80.2471"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
        <linearGradient
          id={`${randId}_7`}
          x1="120.5"
          y1="121.5"
          x2="76.6268"
          y2="42.4495"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color, saturation: saturation })}
        </linearGradient>
      </defs>

      <path
        d="M65.4102 46.6569L63.433 18.2095L98.1757 14.4603L115.702 36.8457L98.1512 66.995L65.4102 46.6569Z"
        fill={`url(#${randId}_0)`}
      />
      <path
        d="M115.774 36.0457L98.7368 67.1772L65.5366 47.3559L63.5056 17.4095L96.3755 14.7281L115.774 36.0457Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M98.6283 66.9779L115.684 36.346L119.626 39.7067L121.016 91.6904L113.686 100.459L99.2205 83.4672L98.6283 66.9779Z"
        fill={`url(#${randId}_1)`}
      />
      <path
        d="M119.771 40.9054L119.711 92.4408L113.848 102.157L99.3111 83.1669L98.7369 67.1772L115.774 36.0457L119.771 40.9054Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M31.2366 68.8977L31.9005 87.3858L17.9573 108.9L7.291 91.2715L6.70204 48.2649L10.6914 39.6162L31.2366 68.8977Z"
        fill={`url(#${randId}_2)`}
      />
      <path
        d="M8.86673 92.4187L7.25175 47.4477L10.7639 38.8161L31.4757 70.0929L32.1038 87.5817L18.5428 109.082L8.86673 92.4187Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M95.3127 14.5631L63.4151 17.7099L32.2385 14.3266L37.8388 10.6232L88.9662 10.7884L95.3127 14.5631Z"
        fill={`url(#${randId}_3)`}
      />
      <path
        d="M38.9374 11.7876L64.6679 9.86296L90.5419 11.9357L96.3755 14.7282L63.5056 17.4096L30.9334 15.077L38.9374 11.7876Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M63.8922 17.6927L64.9509 47.1737L31.3494 69.394L10.1604 38.1343L30.3478 14.8948L63.8922 17.6927Z"
        fill={`url(#${randId}_4)`}
      />
      <path
        d="M31.4578 69.5933L10.764 38.8161L30.9334 15.077L63.5055 17.4095L65.5365 47.3559L31.4578 69.5933Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M100 121.5L112.887 101.5L100 83.5L64.5 107L68 125.5L100 121.5Z"
        fill={`url(#${randId}_5)`}
      />
      <path
        d="M113.84 101.915L99.8061 83.6495L64.3319 106.938L67.3995 125.84L98.7482 120.711L113.84 101.915Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M66.8318 126.157L64.2234 106.738L32.4905 87.8649L18.9295 109.365L33.7107 121.843L66.8318 126.157Z"
        fill={`url(#${randId}_6)`}
      />
      <path
        d="M32.0858 87.082L18.5428 109.082L33.5507 121.552L67.3994 125.84L64.3138 106.438L32.0858 87.082Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M98.7433 83.4844L98.1511 66.995L65.4639 48.156L31.3494 69.394L31.9774 86.8827L64.2233 106.738L98.7433 83.4844Z"
        fill={`url(#${randId}_7)`}
      />
      <path
        d="M31.4578 69.5933L32.0858 87.082L64.8089 106.92L99.3288 83.6666L98.7367 67.1772L65.5365 47.3559L31.4578 69.5933Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M6.84969 92.288L16.5796 110.45L31.3608 122.928L66.8318 126.157L98.6756 121.511L120.079 92.2243L119.626 39.7067L96.0598 12.9243L92.2703 9.66911L36.8844 10.6575L30.1486 13.5133L9.64738 37.152L6.18902 47.2827L6.84969 92.288Z"
        fill="#996600"
        fillOpacity="0.3"
      />
      <path
        d="M7.80401 92.2537L17.9752 109.4L33.2515 122.36L66.8497 126.657L99.6299 121.477L120.556 92.2072L120.122 40.1892L97.2034 13.9949L90.8747 10.7199L38.793 10.5889L30.3298 14.3951L9.70123 38.6511L6.18903 47.2827L7.80401 92.2537Z"
        stroke="black"
        strokeWidth="4"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.7903 46.9404L31.2149 43.7176L32.4601 29.2655L38.1793 41.6641L51.2627 41.9347"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.8226 117.209L96.8823 104.716L85.0585 102.36L85.4606 108.329L77.597 107.65"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.5386 116.652L47.7886 109.601L37.4343 101.857L51.4418 117.469L38.2654 102.784"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.3514 25.4198L97.7557 41.2922L89.1353 51.548L88.4535 33.2669L80.2283 40.3178L81.4743 33.6762"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M109.226 70.3086L111.199 78.9718L113.172 63.1692L106.125 68.6037"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.7007 14.5206L70.4769 14.7924L64.703 13.661"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6807 64.7095L24.443 81.501L14.4352 74.7L17.1619 86.1639"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <DieText
        id="d16text"
        matrix="matrix(1, -0.007, 0.007, 1, 63, 78)"
        result={result}
      />
    </svg>
  )
}

export default D16
