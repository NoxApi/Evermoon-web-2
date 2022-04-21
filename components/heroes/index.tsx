import React, { Fragment, useEffect, useRef, useState } from 'react'
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

import BG2 from '../../assets/tribe/bg.png'
import frame from '../../assets/heroes/on_light.png'
import { Transition } from '@headlessui/react'

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
    <section id="Heroes" className="relative">
      <Image src={BG2} alt="BG2" className="-z-10 absolute w-full " fill />
      <div className="relative">
        <Image src={BG} alt="BG" className="absolute inset-0 -z-10 " fill />
        <div className="pt-40 max-w-[1024px] mx-8 md:mx-auto font-Josefin text-gold-light text-5xl md:text-6xl ">
          HEROES
        </div>
        <div className="relative max-w-[1024px] mx-auto ">
          <CarouselProvider
            naturalSlideWidth={1500}
            naturalSlideHeight={1000}
            totalSlides={herosString.length}
            infinite={true}
            visibleSlides={1}
            currentSlide={index}
            touchEnabled={false}
            dragEnabled={false}
            className="hidden md:block -mt-8 md:-mt-20"
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

          <CarouselProvider
            naturalSlideWidth={372}
            naturalSlideHeight={660}
            totalSlides={herosString.length}
            infinite={true}
            visibleSlides={1}
            currentSlide={index}
            touchEnabled={false}
            dragEnabled={false}
            className="md:hidden mt-8 mx-4"
          >
            <Slider>
              {herosString.map((hero, hind) => (
                <ImageCarousel
                  key={`banner-${hind}`}
                  path={`Mobile/${zeroPad(hind + 1, 2)}_${hero}_m`}
                  index={hind}
                />
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      </div>

      <div className="relative w-full h-0 -z-10 ">
        <div
          className="w-full h-40 -translate-y-[52%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(12, 31, 55, 0) 0%, #082146 51.78%, rgba(4, 23, 48, 0) 100%)',
          }}
        />
      </div>

      <div className="max-w-[1024px] m-8 md:mx-auto mt-4 relative z-10">
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
            className="hidden md:block flex-grow"
          >
            <Slider>
              {[
                ...herosString.slice(-2),
                ...herosString,
                ...herosString.slice(0, 2),
              ].map((hero, hind) => (
                <ImageCarousel
                  key={`hero-${hind}`}
                  path={hero}
                  index={hind}
                  showFrame
                  curIndex={index + 2}
                />
              ))}
            </Slider>
          </CarouselProvider>
          <CarouselProvider
            naturalSlideWidth={20}
            naturalSlideHeight={20}
            totalSlides={herosString.length + 4}
            infinite={true}
            visibleSlides={3}
            currentSlide={index}
            touchEnabled={false}
            dragEnabled={false}
            className=" md:hidden flex-grow"
          >
            <Slider>
              {[
                ...herosString.slice(-1),
                ...herosString,
                ...herosString.slice(0, 1),
              ].map((hero, hind) => (
                <ImageCarousel
                  key={`hero-${hind}`}
                  path={hero}
                  index={hind}
                  showFrame
                  curIndex={index + 1}
                />
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
        </div>
      </div>
    </section>
  )
}

const ImageCarousel = ({
  path,
  index,
  className,
  showFrame = false,
  curIndex = 0,
}: {
  path: string
  index: number
  className?: string
  showFrame?: boolean
  curIndex?: number
}) => {
  const [image, setImage] = useState<StaticImageData | null>(null)
  const [isShowing, setIsShowing] = useState(false)

  ;(function (imageName) {
    import(`../../assets/heroes/${imageName}.png`).then((image) =>
      setImage(image.default)
    )
  })(path)

  useEffect(() => {
    if (curIndex === index) {
      setIsShowing(true)
    } else {
      setIsShowing(false)
    }

    return () => {}
  }, [curIndex, index])

  return (
    <Slide index={index}>
      {image && (
        <div className="relative ">
          <Image alt={path} className={`w-full ${className}`} src={image} />
          {showFrame && (
            <Transition
              as={Fragment}
              show={isShowing}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src={frame}
                  alt="frame"
                  className="m-auto  md:p-0  w-full  "
                />
              </div>
            </Transition>
          )}
        </div>
      )}
    </Slide>
  )
}
