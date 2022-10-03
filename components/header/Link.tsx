import NextLink from 'next/link'
import { useState } from 'react'
import Line from '../../assets/header/line.png'
import { useGlobalContext } from '../../state'
import Image from '../image'


interface LinkProp {
  title: string
  section: number
  current: boolean
}

export function Link({ title, section, current }: LinkProp) {
  const [isHover, setIsHover] = useState(false)
  const {setsection} = useGlobalContext()!
  return (
    <div onClick={()=>setsection(section)}>
      <a onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} className="cursor-pointer px-2 min-w-[6rem] flex flex-col items-center justify-center xlm:px-0 xlm:min-w-0 ">
        <div className="relative">
          <div
            className={` font-Glamode text-[1.2vw] text-center whitespace-nowrap transition-all duration-300
             ${isHover ? 'text-gold' : 'text-white'} ${
              isHover && '-translate-y-[0.7vw]'
            }`}
          >
            {title}
          </div>
          <div
            className={`${
              !isHover ? 'opacity-0' :  'opacity-100'
            } absolute left-0 right-0 bottom-0 w-[5vw]  mx-auto translate-y-1 transition-all duration-500 `}
          >
            <Image src={Line} alt="Line" blur={false} />
          </div>
        </div>
      </a>
    </div>
  )
}

interface ComingSoonLinkProp {
  title: string
}

export function ComingSoonLink({ title }: ComingSoonLinkProp) {
  return (
    <div className="mx-1 px-4 relative min-w-[11.5rem] flex justify-center">
      <div>
        <div
          className={`px-8 py-2 font-source text-lg text-disable min-w-[12rem]`}
        >
          {title}
        </div>
        <div
          className={`absolute bottom-0 translate-y-1/2 px-8 text-sm font-source text-gold-gradient`}
        >
          COMING SOON
        </div>
      </div>
    </div>
  )
}
export function SubLink({ title, section, current }: LinkProp) {
  const [isHover, setIsHover] = useState(false)
  const {setsection} = useGlobalContext()!
  return (
    <div onClick={()=>setsection(section) }>
      <a onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} className="px-2 min-w-[6rem] flex flex-col items-center justify-center xlm:px-0 xlm:min-w-0 cursor-pointer ">
        <div className="relative">
          <div
            className={`px-4 lgm:px-2 py-2 font-Glamode text-[0.8vw] text-center whitespace-nowrap transition-all duration-300
             ${isHover ? 'text-gold' : 'text-white'} ${
              isHover && '-translate-y-0'
            }`}
          >
            {title}
          </div>
        </div>
      </a>
    </div>
  )
}