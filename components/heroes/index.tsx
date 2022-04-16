import React, { useRef, useState } from 'react'
import Left from '../../assets/heroes/Left.svg'

import Image from '../image'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import BG from '../../assets/heroes/bg.png'
import frame from '../../assets/heroes/on_light.png'

const herosString = [
  'orca',
  'yano',
  'mapius',
  'mora',
  'tazia',
  'dotler',
  'axolt',
  'kwondo',
  'bullock',
  'ayla',
]

const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0')

export const Heroes = () => {
  const [index, setIndex] = useState(0)
  return (
    <section id="heroes" className="relative">
      <div className="relative">
        <Image src={BG} alt="BG" className="absolute inset-0 -z-10 " fill />
        <div className="pt-40 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl ">
          HEROES
        </div>
        <div className="relative max-w-[1024px] mx-auto -mt-20">
          <CarouselProvider
            naturalSlideWidth={1500}
            naturalSlideHeight={1000}
            totalSlides={herosString.length}
            infinite={true}
            visibleSlides={1}
            currentSlide={index}
            touchEnabled={false}
            dragEnabled={false}
            className="-mb-16"
          >
            <Slider>
              {herosString.map((hero, hind) => (
                <ImageCarousel
                  key={`banner-${hind}`}
                  path={`${zeroPad(hind + 1, 2)}_${hero}`}
                  index={hind}
                />
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      </div>

      <div className="relative w-full h-0 z-10 mt-16">
        <div
          className="w-full h-40 -translate-y-[52%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(12, 31, 55, 0) 0%, #082146 51.78%, rgba(4, 23, 48, 0) 100%)',
          }}
        />
      </div>

      <div className="max-w-[1024px] mx-auto -mt-20 relative z-10">
        <div className="flex ">
          <button
            onClick={() =>
              index > 0 ? setIndex(index - 1) : setIndex(herosString.length - 1)
            }
          >
            <Image src={Left} alt="Left" className="w-10" />
          </button>

          <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={10}
            totalSlides={herosString.length + 4}
            infinite={true}
            visibleSlides={5}
            currentSlide={index}
            touchEnabled={false}
            dragEnabled={false}
            className="flex-grow"
          >
            <Slider>
              {[
                ...herosString.slice(-2),
                ...herosString,
                ...herosString.slice(0, 2),
              ].map((hero, hind) => (
                <ImageCarousel key={`hero-${hind}`} path={hero} index={hind} />
              ))}
            </Slider>
          </CarouselProvider>

          <button
            onClick={() =>
              index < herosString.length - 1 ? setIndex(index + 1) : setIndex(0)
            }
          >
            <Image src={Left} alt="Left" className="w-10 rotate-180" />
          </button>
          <div className="absolute inset-0 pointer-events-none">
            <Image src={frame} alt="frame" className="m-auto w-48 " />
          </div>
        </div>
      </div>
    </section>
  )
}

const ImageCarousel = ({
  path,
  index,
  className,
}: {
  path: string
  index: number
  className?: string
}) => {
  const [image, setImage] = useState<StaticImageData | null>(null)

  ;(function (imageName) {
    import(`../../assets/heroes/${imageName}.png`).then((image) =>
      setImage(image.default)
    )
  })(path)

  return (
    <Slide index={index}>
      {image && (
        <Image alt={path} className={`w-full ${className}`} src={image} />
      )}
    </Slide>
  )
}
