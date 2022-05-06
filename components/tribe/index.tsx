import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

import Image from '../image'
import BG from '../../assets/tribe/bg.png'
import BG2 from '../../assets/tribe/bg2.png'
import BG3 from '../../assets/tribe/bg3.svg'
import BG4 from '../../assets/tribe/bg4.png'
import Map from '../../assets/tribe/map.png'
import { useInViewport } from 'react-in-viewport'
import { Transition } from '@headlessui/react'
import { Logo } from './logo'

export const Tribe = () => {
  const triggerRef = useRef<HTMLElement>(null)
  const { inViewport } = useInViewport(
    triggerRef as MutableRefObject<HTMLElement>,
    { threshold: 0.5 }
  )
  const [showFadeUp, setShowFadeUp] = useState(false)

  useEffect(() => {
    if (inViewport) {
      setShowFadeUp(true)
    }

    return () => {}
  }, [inViewport])

  return (
    <section id="tribe" className="relative overflow-hidden bg-gray-900">
      <Image src={BG} alt="BG" className="absolute w-full " fill />

      <div className="z-0 mb-32 relative max-w-[840px] mx-8 md:mx-auto rounded-b-2xl ">
        <Image
          src={BG2}
          alt="BG2"
          className="absolute w-full -z-20 scale-[116%] -translate-y-[40%]"
        />
        <div
          className="-z-10 absolute inset-0 rounded-b-2xl border-[2px] border-gold-light"
          style={{
            background: 'linear-gradient(180deg, #191820 0%, #091A33 100%)',
          }}
        />
        <div className="mx-8 md:mx-16 pt-20 font-Josefin text-gold-light text-6xl smm:text-4xl">
          TRIBES
        </div>
        <div className="mx-8 md:mx-16 font-Josefin text-lg md:text-xl my-8 smm:text-base">
          The power has been passed on to the selected individual through the
          {` tribe's`} sacred ritual that happens once every 100 years.
          <br />
          The fractions of power found by Nakamatos are kept in the {`tribe's `}
          pantheon.
        </div>
        <Logo/>
      
      </div>

      <div className="h-0 w-full relative z-10">
        <div
          className="h-48 w-full -translate-y-1/2"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, rgba(18, 32, 50, 0.8) 31.78%, rgba(18, 32, 50, 1) 51.78%, rgba(7, 22, 45, 0) 100%)',
          }}
        />
      </div>

      <div
        className="relative overflow-hidden "
        ref={triggerRef as React.RefObject<HTMLDivElement>}
      >
        <Image
          src={BG4}
          alt="BG4"
          className="absolute w-full mix-blend-screen"
        />
        <div className="pt-24 relative text-center font-Josefin text-gold-light text-4xl md:text-6xl  z-10">
          EVERFIELD
        </div>
        <div className=" relative z-10">
          <Image src={BG3} alt="BG3" className="w-full" />
          <Transition
            className={`absolute inset-0 flex items-center justify-center`}
            show={showFadeUp}
            as="div"
            enter="transition delay-200 duration-1000"
            enterFrom="opacity-0 scale-[3]"
            enterTo="opacity-100 scale-100"
          >
            <Image src={Map} alt="Map" className=" w-[70%]  " />
          </Transition>
        </div>

        <div className="h-0 w-full relative ">
          <div
            className="h-72 w-full -translate-y-1/2"
            style={{
              background:
                'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, #161637 51.78%, rgba(7, 22, 45, 0) 100%)',
            }}
          />
        </div>
      </div>

      <div className="h-0 w-full">
        <div
          className="h-72 w-full -translate-y-1/2"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, #161637 51.78%, rgba(7, 22, 45, 0) 100%)',
          }}
        />
      </div>

      <div className="pt-3 pb-16 bg-[#0D1325]  ">
        <div className="mt-4 mx-4 md:mx-auto max-w-[660px] font-Josefin  md:text-xl text-center relative">
          All incidents of the war started when Beyonder separated its power
          into fractions and spread them all over to prevent the collapse of the
          world. That power is called De-Zentrum and is one of the original
          source that Nakamatos tribe obtained its power since the De-Zentrum
          discovered.
        </div>
      </div>
    </section>
  )
}
