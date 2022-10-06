import React from 'react'
import s1 from '../../assets/roadmap/telegram.png'
import s2 from '../../assets/roadmap/discord.png'
import s3 from '../../assets/roadmap/facebook.png'
import s4 from '../../assets/roadmap/twitter.png'
import s5 from '../../assets/roadmap/youtube.png'
import Image from '../image'
import LinkNewTab from '../LinkNewTab'
import { useGlobalContext } from '../../state'


export const Footer = () => {
  return (
    <section
      id="Roadmap"
      className="relative  h-[27.08vw] w-full overflow-hidden bg-bgs9 bg-cover mt-[-1vw]" 
    >
      <div className='h-auto mt-[12.08vw] mdm:h-[120vw] w-[100%] flex flex-col justify-between items-center pb-36 mdm:pb-[20vw] mdm:hidden'>
        <div className='flex mb-[2vw]'>
          <LinkNewTab href="https://t.me/Evermoon_Community">
            <Image src={s1} alt="q122" className=" w-[2.5vw] mx-[0.6vw]" priority />
          </LinkNewTab>
          <LinkNewTab href="https://discord.com/invite/VgtZZwWbuG">
            <Image src={s2} alt="q122" className=" w-[2.5vw] mx-[0.6vw]" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
            <Image src={s3} alt="q122" className=" w-[2.5vw] mx-[0.6vw]" priority />
          </LinkNewTab>
          <LinkNewTab href="https://twitter.com/EverMoon_nft">
            <Image src={s4} alt="q122" className=" w-[2.5vw] mx-[0.6vw]" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.youtube.com/c/Evermoon">
            <Image src={s5} alt="q122" className=" w-[2.5vw] mx-[0.6vw]" priority />
          </LinkNewTab>        
        </div>
        <HeaderDesktop/>
        
      </div>
    </section>
  )
}



function HeaderDesktop() {
  return (
    <div className="">
      <div className=" flex items-center mr-auto z-0 mdm:flex-col mdm:mt-[5vw] ">
        <Links title="HOME" section={(1)} current={true} />
        <Links title="EXPLORE" section={(2)} current={false} />
        <Links title="TOKENOMICS" section={(6)} current={false} />
        <Links title="TEAM" section={(7)} current={false} />
        <Links title="PARTNERS" section={(8)} current={false} />
        <Links title="ROADMAP" section={(9)} current={false} />
      </div>

      <div className="flex items-center">
        {/* <Image src={team} alt="team" className="w-24 translate-x-1" /> */}
        <div className="relative">
          {/* <Image src={marketplace} alt="marketplace" className="w-44" /> */}
        </div>
      </div>
    </div>
  )
}

import NextLink from 'next/link'
import { useState } from 'react'

interface LinkProp {
  title: string
  section: number
  current: boolean
}

function Links({ title, section, current }: LinkProp) {
  const [isHover, setIsHover] = useState(false)
  const {setsection} = useGlobalContext()!
  return (
    <div onClick={()=>setsection(section) }>
      <a onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} className="px-2 min-w-[6rem] flex  items-center justify-center xlm:px-0 xlm:min-w-0 cursor-pointer ">
        <div className="relative">
          <div
            className={`px-4 lgm:px-2 py-2 font-Glamode text-[1vw] text-center whitespace-nowrap transition-all duration-300
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