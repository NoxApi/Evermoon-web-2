import Image from "../image";
interface SubFeatureProps {
  src: StaticImageData;
  title: any;
  detail: string;
  imgWidth?: string;
}
export default function SubFeature({ src, title, detail, imgWidth="w-24" }: SubFeatureProps) {
  return (
    <div className=" grid grid-cols-[120px_1fr_1.5fr] gap-x-14 my-4 items-center">
      <Image src={src} className={imgWidth+ " mx-auto"} alt="NFTHero" />
      <div>
        <div className="uppercase font-source text-xl">{title}</div>
        <div className="h-[3px] w-8 mt-1 rounded-full bg-gold-light" />
      </div>
      <div className="uppercase font-source text-xs">{detail}</div>
    </div>
  );
}
