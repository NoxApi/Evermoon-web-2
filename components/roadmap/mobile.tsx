import React from 'react'
import s1 from '../../assets/roadmap/telegram.png'
import s2 from '../../assets/roadmap/discord.png'
import s3 from '../../assets/roadmap/facebook.png'
import s4 from '../../assets/roadmap/twitter.png'
import s5 from '../../assets/roadmap/youtube.png'
import Image from '../image'
import LinkNewTab from '../LinkNewTab'
import { useGlobalContext } from '../../state'

export const RoadmapM = () => {
    
    return (
      <section
        id="Roadmapm"
        className="relative  w-full overflow-hidden bg-cover bg-bgs7m h-[440vw] flex flex-col justify-end items-center pb-[19vw]" 
      >
        <div className='flex  w-fill items-center justify-center '>
          <LinkNewTab href="https://t.me/Evermoon_Community">
            <Image src={s1} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
          </LinkNewTab>
          <LinkNewTab href="https://discord.com/invite/VgtZZwWbuG">
            <Image src={s2} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
            <Image src={s3} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
          </LinkNewTab>
          <LinkNewTab href="https://twitter.com/EverMoon_nft">
            <Image src={s4} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.youtube.com/c/Evermoon">
            <Image src={s5} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
          </LinkNewTab>           
        </div>
        <HeaderDesktop/> 
      </section>
    )
  }

  function HeaderDesktop() {
    return (
      <div className="mt-[5vw]">
        <div className="flex flex-col items-center mr-auto z-0   justify-center">
          <Links title="HOME" section={"#Home"} current={true} />
          <Links title="EXOLORE" section={"#Playandearn"} current={false} />
          <Links title="TOKENOMIC" section={"#Tokenomics"} current={false} />
          <Links title="TEAM" section={"#Teamm"} current={false} />
          <Links title="PARTNER" section={"#Partner"} current={false} />
          <Links title="ROADMAP" section={"#Roadmapm"} current={false} />
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
  section: string
  current: boolean
}

  function Links({ title, section, current }: LinkProp) {
    const [isHover, setIsHover] = useState(false)
    const {setsection} = useGlobalContext()!
    return (
      <NextLink href={section}>
        <a onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)} className="px-2 min-w-[6rem] flex  items-center justify-center xlm:px-0 xlm:min-w-0 cursor-pointer ">
          <div className="relative">
            <div
              className={`px-4 lgm:px-2 py-2 font-Glamode text-[3vw] text-center whitespace-nowrap transition-all duration-300
               ${isHover ? 'text-gold' : 'text-white'} ${
                isHover && '-translate-y-0'
              }`}
            >
              {title}
            </div>
          </div>
        </a>
      </NextLink>
    )
  }