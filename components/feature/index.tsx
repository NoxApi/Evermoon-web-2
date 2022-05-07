
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import F1 from '../../assets/features/f1.svg'
import F2 from '../../assets/features/f2.svg'
import F3 from '../../assets/features/f3.svg'
import F4 from '../../assets/features/f4.svg'
import F5 from '../../assets/features/f5.svg'
import F6 from '../../assets/features/f6.svg'
import F7 from '../../assets/features/f7.svg'
import F8 from '../../assets/features/f8.svg'
import BG from '../../assets/tribe/bg.png'
import Image from '../image'
import { useInViewport } from 'react-in-viewport'
import { Transition } from '@headlessui/react'

export const Features = () => {
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
    <section id="Feature" className="relative bg-sky-900 overflow-hidden pb-24">
      <Image src={BG} alt="BG" className="absolute w-full " fill />
      <div className="pt-12 relative text-center font-Josefin text-gold-light text-5xl md:text-6xl ">
        FEATURES
      </div>
      <div ref={triggerRef as React.RefObject<HTMLDivElement>} className="mx-4 md:mx-auto flex max-w-[960px] gap-6 flex-wrap justify-evenly md:justify-between">
      <Transition
                  show={showFadeUp}
                  enter="transition delay-[200ms] duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
        <Image src={F1} alt="F1" className="w-40 md:w-48" />
        </Transition>
        <Transition
                  show={showFadeUp}
                  enter="transition delay-[250ms] duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
        <Image src={F2} alt="F2" className="w-40 md:w-48" /></Transition>
        <Transition
                  show={showFadeUp}
                  enter="transition delay-[300ms] duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
        <Image src={F3} alt="F3" className="w-40 md:w-48" /></Transition>
        <Transition
                  show={showFadeUp}
                  enter="transition delay-[350ms] duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
        <Image src={F4} alt="F4" className="w-40 md:w-48" /></Transition>
        <Transition
                  show={showFadeUp}
                  enter="transition delay-[400ms] duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
        <Image src={F5} alt="F5" className="w-40 md:w-48" /></Transition>
        <Transition
                  show={showFadeUp}
                  enter="transition delay-[450ms] duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
        <Image src={F6} alt="F6" className="w-40 md:w-48" /></Transition>
        <Transition
                  show={showFadeUp}
                  enter="transition delay-[500ms] duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
        <Image src={F7} alt="F7" className="w-40 md:w-48" /></Transition>
        <Transition
                  show={showFadeUp}
                  enter="transition delay-[350ms] duration-500"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
        <Image src={F8} alt="F8" className="w-40 md:w-48" /></Transition>
      </div>
    </section>
  )
}
