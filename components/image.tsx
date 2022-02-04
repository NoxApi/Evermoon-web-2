import ImageNext from 'next/image'

interface ImageProps {
  className?: string
  src: StaticImageData
  alt: string
  priority?: boolean
}
function Image({ className, src, alt, priority }: ImageProps) {
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
        />
      </div>
    </div>
  )
}

export default Image
