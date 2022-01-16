interface Props {
  gray?: boolean;
}
export function ArrowLeft({ gray = false }: Props) {
  return gray ? (
    <svg
      width="33"
      height="67"
      viewBox="0 0 33 67"
      fill="contain"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain"
    >
      <path
        d="M5.75416e-06 33.2102L32.5012 66.1111L32.5012 61.0446L32.5012 55.5011L10.4782 33.2102L32.5011 10.9103L32.5011 5.36682L32.5011 0.300287L5.75416e-06 33.2102Z"
        fill="#767676"
      />
      <path
        d="M27.8014 33.038L32.5028 28.2775L32.5028 17.6675L17.332 33.038L32.5028 48.3996L32.5028 37.7896L27.8014 33.038Z"
        fill="#767676"
      />
    </svg>
  ) : (
    <svg
      width="33"
      height="67"
      viewBox="0 0 33 67"
      fill="contain"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain"
    >
      <path
        d="M5.75416e-06 33.2102L32.5012 66.1111L32.5012 61.0446L32.5012 55.5011L10.4782 33.2102L32.5011 10.9103L32.5011 5.36682L32.5011 0.300287L5.75416e-06 33.2102Z"
        fill="url(#paint0_linear_183_230)"
      />
      <path
        d="M27.8014 33.038L32.5028 28.2775L32.5028 17.6675L17.332 33.038L32.5028 48.3996L32.5028 37.7896L27.8014 33.038Z"
        fill="url(#paint1_linear_183_230)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_183_230"
          x1="16.2506"
          y1="0.30029"
          x2="16.2506"
          y2="66.1111"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9D390" />
          <stop offset="1" stopColor="#E2B15B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_183_230"
          x1="24.9174"
          y1="17.6675"
          x2="24.9174"
          y2="48.3996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9D390" />
          <stop offset="1" stopColor="#E2B15B" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ArrowRight({ gray = false }: Props) {
  return gray ? (
    <svg
      width="34"
      height="66"
      viewBox="0 0 34 66"
      fill="contain"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain"
    >
      <path
        d="M33.3457 32.9011L0.844557 0.000178317L0.844557 5.06671L0.844558 10.6102L22.8675 32.9011L0.844562 55.201L0.844562 60.7445L0.844563 65.811L33.3457 32.9011Z"
        fill="#767676"
      />
      <path
        d="M5.54434 33.0738L0.842916 37.8343L0.842916 48.4443L16.0137 33.0738L0.842914 17.7122L0.842915 28.3222L5.54434 33.0738Z"
        fill="#767676"
      />
    </svg>
  ) : (
    <svg
      width="34"
      height="66"
      viewBox="0 0 34 66"
      fill="contain"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain"
    >
      <path
        d="M33.3457 32.9011L0.844557 0.000178317L0.844557 5.06671L0.844558 10.6102L22.8675 32.9011L0.844562 55.201L0.844562 60.7445L0.844563 65.811L33.3457 32.9011Z"
        fill="url(#paint0_linear_347_110)"
      />
      <path
        d="M5.54434 33.0738L0.842916 37.8343L0.842916 48.4443L16.0137 33.0738L0.842914 17.7122L0.842915 28.3222L5.54434 33.0738Z"
        fill="url(#paint1_linear_347_110)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_347_110"
          x1="17.0951"
          y1="65.811"
          x2="17.0951"
          y2="0.000176897"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9D390" />
          <stop offset="1" stopColor="#E2B15B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_347_110"
          x1="8.42829"
          y1="48.4443"
          x2="8.42829"
          y2="17.7122"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9D390" />
          <stop offset="1" stopColor="#E2B15B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
