import ImageNext from 'next/image'

interface ImageProps {
  className?: string
  src: StaticImageData
  alt: string
  priority?: boolean
  blur?: boolean
  fill?: boolean
  quality?: string | number | undefined
}
function Image({
  className,
  src,
  alt,
  priority,
  blur = false,
  fill = false,
  quality
}: ImageProps) {
  if (fill) {
    return (
      <ImageNext
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={className}
        quality={quality}
      />
    )
  }
  if (src.src.includes('png')) {
    return (
      <div className={className}>
        <div className={'relative'}>
          <ImageNext
            layout="responsive"
            objectFit="contain"
            src={src}
            alt={alt}
            priority={priority}
            placeholder="blur"
            className={`${!blur && 'duration-[0s]'}`}
            quality={quality}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className={'relative'}>
        <ImageNext
          layout="responsive"
          objectFit="contain"
          src={src}
          alt={alt}
          priority={priority}
          quality={quality}
        />
      </div>
    </div>
  )
}

export default Image
