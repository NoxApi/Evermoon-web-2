
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
       <div ref={triggerRef as React.RefObject<HTMLDivElement>} className=' w-[100%] h-[80vw] flex sm:hidden justify-center items-center flex-col mb-[15vw] '>
       <Transition
                  show={showFadeUp}
                  enter="transition delay-200 duration-1000"
                  enterFrom="opacity-0 -translate-y-[100px]"
                  enterTo="opacity-100 translate-y-0"
                  >
                <div className='w-[70vw]  h-[auto] flex flex-col justify-start mb-[20px] '>

                    <div className=" font-Josefin text-gold-light text-3xl font-bold text-left">
                        MOVE TO EARN
                    </div>
                    <div className=" font-Josefin text-sm mt-[0.3vw]">
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
            <Image src={run} alt="logo" className="h-[30vw] w-[30vw] max-w-[130px] "  />
        </Transition>
                < div className=' w-[auto]   flex h-[100px]  items-start lgm:h-[15vw] ml-[1vw]  '>
              <Transition
                  show={showFadeUp}
                  enter="transition delay-[600ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[15vw] lgm:h-[15vw] max-w-[70px]  "  />
                </Transition>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-[700ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[15vw] lgm:h-[15vw] max-w-[70px]"  />
                </Transition>
                <Transition
                  show={showFadeUp}
                  enter="transition delay-[800ms] duration-1000"
                  enterFrom="opacity-0 translate-x-[100px]"
                  enterTo="opacity-100 translate-x-0"
                >
                <Image src={evp} alt="logo" className="h-[100px] w-[100px] mr-[1vw] lgm:w-[15vw] lgm:h-[15vw] max-w-[70px]"  />
                </Transition>
                </div>
                </div>
      </div>   </div>
    </div>
  )
}

