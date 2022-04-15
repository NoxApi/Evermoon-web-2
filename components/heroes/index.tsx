import React, { useRef, useState } from 'react'
// import Orca from '../../assets/heroes/orca.svg'
// import Yano from '../../assets/heroes/yano.svg'
// import Mapius from '../../assets/heroes/mapius.svg'
// import Mora from '../../assets/heroes/mora.svg'
// import Tazia from '../../assets/heroes/tazia.svg'
// import Dotler from '../../assets/heroes/dotler.svg'
import Left from '../../assets/heroes/Left.svg'

// import Orcai from '../../assets/heroes/orcai.png'
// import Yanoi from '../../assets/heroes/yanoi.png'
// import Mapiusi from '../../assets/heroes/mapiusi.png'
// import Morai from '../../assets/heroes/morai.png'
// import Taziai from '../../assets/heroes/taziai.png'
// import Dotleri from '../../assets/heroes/dotleri.png'
import Image from '../image'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

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
    <section id="heroes">
      <div className="pt-12 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl ">
        HEROES
      </div>
      <div className="max-w-[1024px] mx-auto">
        <CarouselProvider
          naturalSlideWidth={1500}
          naturalSlideHeight={1000}
          totalSlides={herosString.length}
          infinite={true}
          visibleSlides={1}
          currentSlide={index}
          touchEnabled={false}
          dragEnabled={false}
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
                <ImageCarousel
                  key={`hero-${hind}`}
                  path={hero}
                  index={hind}
                  
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
