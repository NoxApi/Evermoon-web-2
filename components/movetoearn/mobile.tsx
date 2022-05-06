
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import BG from '../../assets/movetoearn/bg.jpg'
import run from '../../assets/movetoearn/runner.png'
import evp from '../../assets/movetoearn/Everpoint.png'
import Image from '../image'
import { Transition } from '@headlessui/react'
import { useInViewport } from 'react-in-viewport'


export const MoveM = () => {
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
     <div className=' w-[100%] h-[130%] flex justify-start items-center  sm:hidden mt-[30px] '>
       <div ref={triggerRef as React.RefObject<HTMLDivElement>} className=' w-[100%] h-[60vw] flex sm:hidden justify-start items-center flex-col'>
       <Transition
                  show={showFadeUp}
                  enter="transition delay-200 duration-1000"
                  enterFrom="opacity-0 -translate-y-[100px]"
                  enterTo="opacity-100 translate-y-0"
                  >
                <div className='w-[52vw]  h-[auto] flex flex-col justify-start mb-[20px] '>

                    <div className=" font-Josefin text-gold-light text-lg font-bold text-left">
                        MOVE TO EARN
                    </div>
                    <div className=" font-Josefin text-xs mt-[0.3vwpx]">
                        Bridge your physic movements for in-game advantages ! .
                        <br></br>
                        ?ove to gain extra stamina and earn more real rewards {"&"} exclusivity ! .
                    </div>
                    </div>
                  </Transition>
        <div>
       
            <div className=' flex items-start w-auto'>
            <Transition
            show={showFadeUp}
            enter="transition delay-[500ms] duration-1000"
            enterFrom="opacity-0 translate-y-[100px]"
            enterTo="opacity-100 translate-y-0"
            >
            <Image src={run} alt="logo" className="h-[100px] w-[100px] "  />
        </Transition>
                < div className='ml-[2rem] w-[auto]   flex h-[100px]  items-start lgm:h-[10vw] '>
              <Transition
                  show={showFadeUp}
                  enter="transition delay-[600ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[10vw] lgm:h-[10vw]"  />
                </Transition>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-[700ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[10vw] lgm:h-[10vw]"  />
                </Transition>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-[800ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[10vw] lgm:h-[10vw]"  />
                </Transition>
                </div>
                </div>
      </div>   </div>
    </div>
  )
}

