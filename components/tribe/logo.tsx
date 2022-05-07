import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useInViewport } from 'react-in-viewport'
import { Transition } from '@headlessui/react'
import  Image  from "next/image"
import Naka from '../../assets/tribe/naka.png'
import Byza from '../../assets/tribe/byza.png'
import Ethe from '../../assets/tribe/ethe.png'
import Luna from '../../assets/tribe/luna.png'
import Soli from '../../assets/tribe/soli.png'
export const Logo = () =>{
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
        <div ref={triggerRef as React.RefObject<HTMLDivElement>}>
        <Transition
                  show={showFadeUp}
                  enter="transition delay-200 duration-1000"
                  enterFrom="opacity-0 translate-y-[100px]"
                  enterTo="opacity-100 translate-y-0"
                  >
        <div  className="mx-16 pb-12 flex justify-between mt-10  mdm:grid mdm:grid-cols-6 mdm:mx-16 smm:mx-8 ">

        <div className=" col-span-2 mdm:flex justify-center items-center w-[120px] mdm:w-[100%] mdm:p-[3vw] ">
            <Image src={Naka}  alt="Naka" className="w-28"/>
        </div>
        <div className=" col-span-2 mdm:flex justify-center items-center w-[120px] mdm:w-[100%] mdm:p-[3vw] ">
        <Image src={Byza} alt="Byza"  className="w-28" />
        </div>
        <div className=" col-span-2 mdm:flex justify-center items-center w-[120px] mdm:w-[100%] mdm:p-[3vw] ">
        <Image src={Ethe} alt="Ethe" className="w-28"  />
        </div>
        <div className="col-start-2 col-span-2 mdm:flex justify-center items-center w-[120px] mdm:w-[100%] mdm:p-[3vw] ">
        <Image src={Luna} alt="Luna" className="w-28"  />
        </div>
        <div className=" col-span-2 mdm:flex justify-center items-center w-[120px] mdm:w-[100%] mdm:p-[3vw] ">
        <Image src={Soli} alt="Soli" className="w-28" />
        </div>
      </div>
      </Transition>
      </div>
    )
}