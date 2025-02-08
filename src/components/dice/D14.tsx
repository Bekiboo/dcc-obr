import DieText from './DieText'
import Stop from './Stop'

const D14 = ({
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
        <linearGradient
          id={`${randId}_0`}
          x1="76.5"
          y1="-8"
          x2="181.7"
          y2="91.7"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_1`}
          x1="-52"
          y1="-13.5"
          x2="35.6"
          y2="31.5"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_2`}
          x1="66"
          y1="115"
          x2="72.5"
          y2="178"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_3`}
          x1="90"
          y1="78"
          x2="180"
          y2="108.5"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_4`}
          x1="57.5"
          y1="135.5"
          x2="59"
          y2="-5"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_5`}
          x1="52"
          y1="163"
          x2="1"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color })}
        </linearGradient>
        <linearGradient
          id={`${randId}_6`}
          x1="-9"
          y1="-5"
          x2="94"
          y2="67"
          gradientUnits="userSpaceOnUse"
        >
          {Stop({ color: color })}
        </linearGradient>
      </defs>
      <path
        d="M90.7262 13.0065L90.4596 42.687L98.963 56.2402L124 70L124.5 61.5L98.9476 16.7022L90.7262 13.0065Z"
        fill={`url(#${randId}_0)`}
      />
      <path
        d="M124.5 61.5L99 16.5L90.4605 12.583L90.4596 42.6869L98.6973 55.8167L124 71L124.5 61.5Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M3.20319 70.4792L29.4211 56.5643L37.2814 42.6283L35.8727 12.5572L28.3244 15.7624L2.53269 61.4903L3.20319 70.4792Z"
        fill={`url(#${randId}_1)`}
      />
      <path
        d="M28.3245 15.7624L2.22196 62.0412L3 71.5L30 55.5L37.0358 43.0638L37.0358 12.3512L28.3245 15.7624Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M97 118.5L72 102.5L56 102.5L30.5 118.5L37 123.5L89.5 123.5L97 118.5Z"
        fill={`url(#${randId}_2)`}
      />
      <path
        d="M37 123.5L90.1326 123.5L97.5 118.5L72 102.5L56.5 102.5L30 118.5L37 123.5Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M71.5 103L97.4449 117.846L123.093 70.7889L97.4718 56.8771L71.5 103Z"
        fill={`url(#${randId}_3)`}
      />
      <path
        d="M124 71L98.1295 56L71.5 102.5L97.5 118.5L124 71Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M89.7968 42.8198L90.2192 12.9305L36.627 13.2834L36.8656 42.4371L89.7968 42.8198Z"
        fill={`url(#${randId}_4)`}
      />
      <path
        d="M37 12.275L37 43.5L90.5 43.5L90.5 12.275L37 12.275Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M30.5 118.5L56 103L28.5 57L3.50001 72L30.5 118.5Z"
        fill={`url(#${randId}_5)`}
      />
      <path
        d="M29 56L3 71.5L30 118.5L56.5 102.5L29 56Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M30 56L37.5 43.5H65.5H90L97.5 56.5L72 102H56L30 56Z"
        fill={`url(#${randId}_6)`}
      />
      <path
        d="M29.5 56L37.5 43.1759H90L98 56L71.5 102.5H56.5L29.5 56Z"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinejoin="round"
      />
      <path
        d="M28.5 14.1053L36.5 12H91.5L99.5 16.5L125.5 61.5V71.5L99.5 118.723L91.5 124.5H36.5L30.5 120.5L2.61998 71.5L1.5 61.5L28.5 14.1053Z"
        fill="#996600"
        fillOpacity="0.3"
      />
      <path
        d="M28 14.5L37 11.5H91L99.5 15.5L126 61.5L125 71L98.5 119L90.5 124.5H37L30 119.5L1.99999 71.5L1.5 62L28 14.5Z"
        stroke="black"
        strokeWidth="4"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58.2835 107.395L60.2033 108.848L61.1887 115.561L64.0103 109.706L71.0728 109.396"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53 23.2391L74.8333 23.2657L66.023 32.2671L62.9425 27.1385L56.5737 32.3984"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M89.3442 100.825L108.008 84.3027L98.6014 74.363L98.5748 92.6568L89.702 85.9056L91.2556 92.4982"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M102.261 43.7284L104 35L106.659 50.7216L99.0791 45.5436"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 80.2563L39.2256 91.2365L30.7082 90.528"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3917 50.8582L31.2936 39.6739L18.8789 40.8921L26.6617 32.0152"
        stroke="black"
        strokeWidth="2"
        strokeMiterlimit="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <DieText
        id="d14text"
        matrix="matrix(1, 0, 0, 1, 63, 67)"
        result={result}
      />
    </svg>
  )
}

export default D14
