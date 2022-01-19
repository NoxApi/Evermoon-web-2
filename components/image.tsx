import ImageNext from "next/image";

interface ImageProps {
  className?: string;
  src: StaticImageData;
  alt: string;
  priority?: boolean;
}
function Image({className, src, alt,priority} : ImageProps) {
  return (
    <div className={className}>
      <div className={"relative"}>
        <ImageNext layout="responsive" objectFit="contain" src={src} alt={alt} priority={priority}/>
      </div>
    </div>
  );
}

export default Image;
