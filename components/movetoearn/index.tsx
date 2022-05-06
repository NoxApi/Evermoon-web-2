
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Naka from '../../assets/tribe/naka.png'
import Byza from '../../assets/tribe/byza.png'
import Ethe from '../../assets/tribe/ethe.png'
import Luna from '../../assets/tribe/luna.png'
import Soli from '../../assets/tribe/soli.png'
import Image from '../image'
import BG from '../../assets/movetoearn/BG.png'
import BGM from '../../assets/movetoearn/bgm.jpg'
import run from '../../assets/movetoearn/runner.png'
import evp from '../../assets/movetoearn/Everpoint.png'
import BG4 from '../../assets/tribe/bg4.png'
import Map from '../../assets/tribe/map.png'
import { useInViewport } from 'react-in-viewport'
import { Transition } from '@headlessui/react'
import { MoveM } from './mobile'

export const Move = () => {
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
    <section id="tribe" className="relative overflow-hidden  w-auto">
      <Image src={BG} alt="BG" className="absolute w-full h-full mdm:hidden"/>
      <Image src={BGM} alt="BG" className="absolute w-full bottom-0  md:hidden"/>

      <div className="z-0 mb-32 relative max-w-[1280px] max-h-[1024px] mx-8 md:mx-auto rounded-b-2xl h-[40vw] py-3rem flex min-h-[300px] mt-[10vw] xlm:mt-0">
        <div className='w-full h-[auto] flex justify-center items-center smm:hidden'>
            <div ref={triggerRef as React.RefObject<HTMLDivElement>} className='w-[100%] h-[100%]  flex items-center justify-center  '>
            <Transition
            show={showFadeUp}
            enter="transition delay-200 duration-1000"
            enterFrom="opacity-0 -translate-y-[200px]"
            enterTo="opacity-100 translate-y-0"
            >
            <Image src={run} alt="logo" className="h-[300px] w-[300px] lgm:w-[25vw] lgm:h-[25vw] "  />
            </Transition>
            <div className=' flex flex-col items-start w-auto'>
                < div className='ml-[2rem] w-[auto]   flex h-[100px]  items-start lgm:h-[10vw] '>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-[300ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[200px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[10vw] lgm:h-[10vw]"  />
                </Transition>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-[350ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[200px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[10vw] lgm:h-[10vw]"  />
                </Transition>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-[400ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[300px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[10vw] lgm:h-[10vw]"  />
                </Transition>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-[450ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[300px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[10vw] lgm:h-[10vw]"  />
                </Transition>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-700 duration-1000"
                  enterFrom="opacity-0 translate-x-[300px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[20px] lgm:w-[10vw] lgm:h-[10vw] lgm:hidden"  />
                </Transition>
                </div>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-200 duration-1000"
                  enterFrom="opacity-0 translate-y-[200px]"
                  enterTo="opacity-100 translate-y-0"
                  >
                <div className='w-[auto]  h-[auto] flex flex-col justify-end mt-[30px]  '>

                    <div className=" font-Josefin text-gold-light text-4xl font-bold lgm:text-2xl w-[300px]">
                        MOVE TO EARN
                    </div>
                    <div className=" font-Josefin text-lg mt-[10px] lgm:text-xs ">
                        Bridge your physic movements for in-game advantages ! .
                        <br />
                        move to gain extra stamina and earn more real rewards {"&"} exclusivity ! .
                    </div>
                    </div>
                  </Transition>
            </div>
            </div>
        </div>
        <MoveM></MoveM>
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

     
    </section>
  )
}
