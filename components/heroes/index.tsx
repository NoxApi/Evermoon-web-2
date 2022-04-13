import React, { useRef, useState } from 'react'
import Orca from '../../assets/heroes/orca.svg'
import Yano from '../../assets/heroes/yano.svg'
import Mapius from '../../assets/heroes/mapius.svg'
import Mora from '../../assets/heroes/mora.svg'
import Tazia from '../../assets/heroes/tazia.svg'
import Dotler from '../../assets/heroes/dotler.svg'
import Left from '../../assets/heroes/Left.svg'

import Orcai from '../../assets/heroes/orcai.png'
import Yanoi from '../../assets/heroes/yanoi.png'
import Mapiusi from '../../assets/heroes/mapiusi.png'
import Morai from '../../assets/heroes/morai.png'
import Taziai from '../../assets/heroes/taziai.png'
import Dotleri from '../../assets/heroes/dotleri.png'
import Image from '../image'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const herosList = [Orca, Yano, Mapius, Mora, Tazia, Dotler]
const herosiList = [Orcai, Yanoi, Mapiusi, Morai, Taziai, Dotleri]

export const Heroes = () => {
  const [index, setIndex] = useState(0)
  return (
    <section id="heroes">
      <div className="pt-12 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl ">
        HEROES
      </div>
      <div className="max-w-[1024px] mx-auto">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={60}
          totalSlides={herosList.length}
          infinite={true}
          visibleSlides={1}
          currentSlide={index}
          touchEnabled={false}
          dragEnabled={false}
        >
          <Slider>
            {herosList.map((hero, index) => (
              <ImageCarousel key={`hero-${index}`} src={hero} index={index} />
            ))}
          </Slider>
        </CarouselProvider>
        <div className="flex ">
          <button
            onClick={() =>
              index > 0 ? setIndex(index - 1) : setIndex(herosList.length - 1)
            }
          >
            <Image src={Left} alt="Left" className="w-10" />
          </button>

          <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={10}
            totalSlides={herosiList.length * 2}
            infinite={true}
            visibleSlides={5}
            currentSlide={index}
            touchEnabled={false}
            dragEnabled={false}
            className="flex-grow"
          >
            <Slider>
              {herosiList.map((hero, index) => (
                <ImageCarousel key={`hero-${index}`} src={hero} index={index} />
              ))}
              {herosiList.map((hero, index) => (
                <ImageCarousel key={`hero-${index}`} src={hero} index={index} />
              ))}
            </Slider>
          </CarouselProvider>

          <button
            onClick={() =>
              index < herosList.length - 1 ? setIndex(index + 1) : setIndex(0)
            }
          >
            <Image src={Left} alt="Left" className="w-10 rotate-180" />
          </button>
        </div>
      </div>
    </section>
  )

  function ImageCarousel({
    src,
    index,
  }: {
    src: StaticImageData
    index: number
  }) {
    const path = src.src.split('/')
    return (
      <Slide index={index}>
        <Image src={src} alt={path[path.length - 1]} className="w-full" />
      </Slide>
    )
  }
}
