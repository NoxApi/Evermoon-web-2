import Image from "../image";
import left from "../../assets/left.svg"
import right from "../../assets/right.svg"

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
    
    <Image className="w-[24px] h-[48px] lg:w-[33px] lg:h-[67px]" src={left} alt="left"/>
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
    <Image className="w-[24px] h-[48px] lg:w-[33px] lg:h-[67px]" src={right} alt="right"/>
  );
}