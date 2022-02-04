import Image from '../image'
interface SubFeatureProps {
  src: StaticImageData
  title: any
  smallTitle?: string
  detail: string
  imgWidth?: string
}
export default function SubFeature({
  src,
  title,
  smallTitle,
  detail,
  imgWidth = 'w-24',
}: SubFeatureProps) {
  return (
    <div className=" grid grid-cols-[60px_1fr]  md:grid-cols-[90px_110px_1fr] gap-x-12 my-4 items-center">
      <Image src={src} className={imgWidth + ' mx-auto'} alt="NFTHero" />
      <div className="hidden md:block">
        <div className="uppercase font-source text-sm md:text-xl">{title}</div>
        <div className="h-[2px] md:h-[3px] w-8 mt-1 rounded-full bg-gold-light" />
      </div>
      <div className="hidden md:block uppercase font-source text-xs">
        {detail}
      </div>
      <div className="md:hidden">
        <div>
          <div className="uppercase font-source text-sm md:text-xl">
            {smallTitle ?? title}
          </div>
          <div className="h-[2px] md:h-[3px] w-8 mt-1 rounded-full bg-gold-light" />
        </div>
        <div className="uppercase font-source text-xs">{detail}</div>
      </div>
    </div>
  )
}
