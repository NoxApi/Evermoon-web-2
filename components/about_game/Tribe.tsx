import Image from '../image'
import ImageNext from 'next/image'
import BG from '../../assets/bgtribe.png'
import HeaderBox from '../../assets/header-box.svg'
import LNakamatos from '../../assets/tribe/lnakamatos.png'
import LEthern from '../../assets/tribe/lethern.png'
import LByzan from '../../assets/tribe/lbyzan.png'
import LLunarian from '../../assets/tribe/llunarian.png'
import LSolis from '../../assets/tribe/lsolis.png'
import Nakamatos from '../../assets/tribe/nakamatos.png'
import Ethern from '../../assets/tribe/ethern.png'
import Byzan from '../../assets/tribe/byzan.png'
import Lunarian from '../../assets/tribe/lunarian.png'
import Solis from '../../assets/tribe/solis.png'
import { ArrowLeft, ArrowRight } from './Arrow'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { title } from 'process'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'

class TribeClass {
  title: string
  img: StaticImageData
  logo: StaticImageData
  element: JSX.Element

  constructor(
    title: string,
    img: StaticImageData,
    logo: StaticImageData,
    element: JSX.Element
  ) {
    this.title = title
    this.img = img
    this.logo = logo
    this.element = element
  }
}

const tribes = [
  new TribeClass('Solis', Solis, LSolis, TribeSolis()),
  new TribeClass('Lunarian', Lunarian, LLunarian, TribeLunarian()),
  new TribeClass('Nakamatos', Nakamatos, LNakamatos, TribeNakamatos()),
  new TribeClass('Ethern', Ethern, LEthern, TribeEthern()),
  new TribeClass('Byzan', Byzan, LByzan, TribeByzan()),
]

export default function Tribe() {
  const [tribeIndex, setTribeIndex] = useState(0)
  const [isTransition, setIsTransition] = useState(true)

  const tribesElement = [...tribes.slice(2), ...tribes.slice(0, 2)]
  const up = () => {
    if (tribeIndex >= 4) return setTribeIndex(0)
    setTribeIndex(tribeIndex + 1)
  }
  const down = () => {
    if (tribeIndex <= 0) return setTribeIndex(4)
    setTribeIndex(tribeIndex - 1)
  }

  function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const checkTribeIndex = async () => {
    if (tribeIndex < -5) {
      setIsTransition(false)
      setTribeIndex(0)
      await delay(10)
      setIsTransition(true)
      setTribeIndex(-1)
    }
    if (tribeIndex > 5) {
      setIsTransition(false)
      setTribeIndex(0)
      await delay(10)
      setIsTransition(true)
      setTribeIndex(1)
    }
  }

  useEffect(() => {
    checkTribeIndex()
    return () => {}
  }, [tribeIndex])

  return (
    <section id="Tribe" className="relative w-full  overflow-hidden">
      {/* <div className="h-full w-full ">
        <ImageNext
          // width="100%"
          // height="100%"
          layout="fill"
          objectFit="cover"
          src={BG}
          alt="BG"
          priority={true}
        />
      </div> */}
      <div className="h-full mx-auto max-w-6xl px-4">
        <div className="flex h-full">
          <div className="flex flex-col  lg:pr-8 relative w-full">
            <div className="flex flex-col lg:flex-row mt-28 lg:mb-10 items-center">
              <div className={'relative z-0 '}>
                <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
                  <Image className="" src={HeaderBox} alt="HeaderBox" />
                </div>
                <div className=" mx-14 md:mx-20">
                  <div className="text-gold-gradient font-tavi text-3xl md:text-5xl font-medium  ">
                    TRIBE
                  </div>
                </div>
              </div>
              <div className="m-16 lg:m-0 lg:ml-16 ml-12 max-w-lg">
                Evermoon is a planet similar to the Earth, waiting for human to
                arrive. It{"'"}s the best place to begin a new mankind.
              </div>
            </div>
            <Scroller
              up={up}
              down={down}
              isTransition={isTransition}
              tribeIndex={tribeIndex}
              horizontal={false}
              className="flex lg:hidden"
            />

            {
              tribesElement[
                (5 -
                  (tribeIndex < 0 ? (tribeIndex + 10) % 5 : tribeIndex % 5)) %
                  5
              ].element
            }
          </div>
          <Scroller
            up={up}
            down={down}
            isTransition={isTransition}
            tribeIndex={tribeIndex}
            horizontal={true}
            className="flex"
          />
        </div>
      </div>
    </section>
  )
}

interface TribesLogoProps {
  small?: boolean
  tribeIndex?: number
}

function TribesLogo({ small, tribeIndex = 0 }: TribesLogoProps) {
  var renderTribes = tribes
  if (small) {
    switch (tribeIndex) {
      case 0:
        renderTribes = tribes.slice(1, 4)
        break
      case 1:
        renderTribes = tribes.slice(0, 3)
        break
      case 2:
        renderTribes = [tribes[4], ...tribes.slice(0, 2)]
        break
      case 3:
        renderTribes = [...tribes.slice(3, 5), tribes[0]]
        break
      case 4:
        renderTribes = tribes.slice(2, 5)
        break
      default:
        break
    }
  }

  return (
    <>
      {renderTribes.map((tribe) => (
        <div key={tribe.title}>
          <Image
            className="w-16 md:w-[5.7rem] lg:w-28 m-3 md:m-4"
            src={tribe.logo}
            alt={tribe.title}
            priority={true}
          />
        </div>
      ))}
    </>
  )
}

function TribeNakamatos() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center ">
      <div className="lg:w-[20rem]" />
      <TribeHeader title="Nakamatos" />
      <div className="h-[28rem] lg:h-0" />
      <TribeInfo
        title="Nakamatos"
        detail="The first tribe to arrive on the Moon. They are the longest existing
            tribes on the moon which make them acquire many ancient powers.They
            are also known as a sacred tribe."
      />

      <div className="absolute lg:top-4 lg:bottom-0 lg:-left-20 inset-0 mx-auto pt-16 lg:pt-0 lg:mx-0 max-w-[21rem] lg:max-w-none lg:w-[29rem] floating">
        <Image
          src={Nakamatos}
          alt="Nakamatos"
          key="NakamatosImage"
          priority={true}
        />
      </div>
    </div>
  )
}

function TribeEthern() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center ">
      <div className="lg:w-[20rem]" />
      <TribeHeader title="Ethern" />
      <div className="h-[30rem] lg:h-0" />
      <TribeInfo
        title="Ethern"
        detail="The tribe that evolved from Nakamatos. 
        With their intelligence and smartness, 
        they start a new tribe making them a tribe with high technology."
      />

      <div className="absolute inset-0 lg:top-0 lg:bottom-0 lg:-left-28 mx-auto lg:mx-0 pt-16 lg:pt-0 max-w-[24rem] lg:max-w-none lg:w-[31rem] floating2">
        <Image src={Ethern} alt="Ethern" key="EthernImage" priority={true} />
      </div>
    </div>
  )
}

function TribeByzan() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center ">
      <div className="lg:w-[20rem]" />
      <TribeHeader title="Byzan" />
      <div className="h-[30rem] lg:h-0" />
      <TribeInfo
        title="Byzan"
        detail="They have escaped from Ethern since Ethern lacks resources, 
        they have a crowded population, and a very high cost of living. 
        They are good at farming, inventing new tactics, and developing new weapons. They love peace, but when it’s time to fight, they have no hesitation."
      />

      <div className="absolute inset-0 lg:-top-10 lg:bottom-0 lg:-left-44 lg:w-[35rem] mx-auto lg:mx-0 pt-14 lg:pt-0 max-w-[24rem] lg:max-w-none floating3">
        <Image src={Byzan} alt="Byzan" key="ByzanImage" priority={true} />
      </div>
    </div>
  )
}

function TribeSolis() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center ">
      <TribeHeader title="Solis" />
      <div className="h-[clamp(210px,50vw+30px,400px)] sm:h-[22rem] lg:h-0" />
      <TribeInfo
        title="Solis"
        detail="They have a very strong bonding with nature. 
          They are connected to water, land, and forest. 
          Their skill is an ability to communicate with nature and animals."
      />
      <div className="lg:w-[30rem]" />

      <div className="absolute inset-0 lg:left-auto lg:top-28 lg:bottom-0 lg:-right-44 w-full lg:w-[43rem] mx-auto lg:mx-0 pt-16 lg:pt-0 max-w-[36rem] lg:max-w-none floating">
        <Image src={Solis} alt="Solis" key="SolisImage" priority={true} />
      </div>
    </div>
  )
}

function TribeLunarian() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center ">
      <div className="lg:w-[22rem]" />
      <TribeHeader title="Lunarian" />
      <div className="h-[30rem] lg:h-0" />
      <TribeInfo
        title="Lunarian"
        detail="They migrated from another planet. 
        They have very high-tech weapons and a space-warship. 
        They appearance is very unique comparing to other tribe, 
        since they came from another planet"
      />

      <div className="absolute inset-0 lg:-top-5 lg:bottom-0 lg:-left-36 lg:w-[34rem] mx-auto lg:mx-0 pt-16 lg:pt-0 max-w-[24rem] lg:max-w-none floating2">
        <Image
          src={Lunarian}
          alt="Lunarian"
          key="LunarianImage"
          priority={true}
        />
      </div>
    </div>
  )
}

interface TribeInfoProps {
  title: string
  detail: string
}
function TribeInfo({ title, detail }: TribeInfoProps) {
  return (
    <div className="relative mx-4 lg:mt-32 md:max-w-2xl  lg:max-w-none flex-grow w-full  z-0">
      <div className="mx-12 mt-12 mb-12 lg:mx-24 lg:mt-16 lg:mb-32">
        <div className="hidden lg:block font-tavi text-6xl text-gold-gradient">
          {title}
        </div>
        <div className="mt-8 font-source text-lg ">{detail}</div>
      </div>
      <div className="absolute inset-0 bg-bluegreen-gradient -z-10 -skew-x-6" />
    </div>
  )
}

function TribeHeader({ title }: { title: string }) {
  return (
    <div className="lg:hidden font-tavi text-4xl text-gold-gradient mx-auto mt-8">
      {title}
    </div>
  )
}

enum alignment {
  vertical,
  horizontal,
}
interface ScrollerProps {
  up: () => void
  down: () => void
  isTransition: boolean
  tribeIndex: number
  horizontal: boolean
  className?: string
}

function Scroller({
  up,
  down,
  isTransition,
  tribeIndex,
  horizontal,
  className,
}: ScrollerProps) {
  return (
    <div
      key={horizontal ? 'horizontal-container' : 'vertical-horizontal'}
      className={horizontal ? 'scroller-horizontal' : 'scroller-vertical'}
    >
      <div
        className={`h-full relative z-0 flex ${
          horizontal && 'flex-col pt-32 pb-12'
        } justify-center items-center`}
      >
        <div
          className={`w-6  cursor-pointer ${horizontal ? 'rotate-90' : 'mr-4'}`}
          onClick={up}
        >
          <ArrowLeft />
        </div>

        <div className="relative rounded-[50px]  bg-black/10 overflow-hidden">
          {/* small */}
          <div
            className={
              // (isTransition ? "transition-transform" : "") +
              ' flex' + ' md:hidden'
            }
          >
            <TribesLogo small tribeIndex={tribeIndex} />
          </div>
          <div className="absolute inset-0 md:static">
            {/* main */}
            <div
              className={
                '' +
                // (isTransition ? "transition-transform" : "") +
                ' hidden md:flex lg:block'
              }
              style={{
                transform: `${
                  horizontal
                    ? `translateY(${tribeIndex * 20}%)`
                    : `translateX(${tribeIndex * 20}%)`
                }`,
              }}
            >
              <TribesLogo />
            </div>
            {/* left */}
            <div
              className={
                'absolute inset-0 ' +
                // (isTransition ? "transition-transform" : "") +
                ' hidden md:flex lg:block'
              }
              style={{
                transform: `${
                  horizontal
                    ? `translateY(${tribeIndex * 20 + 100}%)`
                    : `translateX(${tribeIndex * 20 + 100}%)`
                }`,
              }}
            >
              <TribesLogo />
            </div>
            {/* right */}
            <div
              className={
                'absolute inset-0 ' +
                // (isTransition ? "transition-transform" : "") +
                ' hidden md:flex lg:block'
              }
              style={{
                transform: `${
                  horizontal
                    ? `translateY(${tribeIndex * 20 - 100}%)`
                    : `translateX(${tribeIndex * 20 - 100}%)`
                }`,
              }}
            >
              <TribesLogo />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="w-[4.5rem] h-[4.5rem] md:w-[6.5rem] md:h-[6.5rem] lg:w-32 lg:h-32 mx-auto   rounded-full border-2 border-gold-light hole"></div>
          </div>
        </div>
        <div
          className={`w-6  z-10 cursor-pointer ${
            horizontal ? 'rotate-90' : 'ml-2'
          }`}
          onClick={down}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  )
}
