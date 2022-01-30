import Image from '../image'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'
import leftg from '../../assets/leftg.svg'
import rightg from '../../assets/rightg.svg'

interface Props {
  gray?: boolean
}
export function ArrowLeft({ gray = false }: Props) {
  return gray ? (
    <Image
      className="w-[24px] lg:w-[33px] lg:h-[67px]"
      src={leftg}
      alt="leftGray"
    />
  ) : (
    <Image className="w-[24px] lg:w-[33px] lg:h-[67px]" src={left} alt="left" />
  )
}

export function ArrowRight({ gray = false }: Props) {
  return gray ? (
    <Image
      className="w-[24px] h-[48px] lg:w-[33px] lg:h-[67px]"
      src={rightg}
      alt="rightGray"
    />
  ) : (
    <Image
      className="w-[24px] h-[48px] lg:w-[33px] lg:h-[67px]"
      src={right}
      alt="right"
    />
  )
}
