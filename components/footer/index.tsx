import React from 'react'
import q122 from '../../assets/roadmap/Q1-2022.svg'
import q222 from '../../assets/roadmap/Q2-2022.svg'
import q322 from '../../assets/roadmap/Q3-2022.svg'
import q422 from '../../assets/roadmap/Q4-2022.svg'
import q123 from '../../assets/roadmap/Q1-2023.svg'
import q223 from '../../assets/roadmap/Q2-2023.svg'
import q122m from '../../assets/roadmap/Q1-2022m.svg'
import q222m from '../../assets/roadmap/Q2-2022m.svg'
import q322m from '../../assets/roadmap/Q3-2022m.svg'
import q422m from '../../assets/roadmap/Q4-2022m.svg'
import q123m from '../../assets/roadmap/Q1-2023m.svg'
import q223m from '../../assets/roadmap/Q2-2023m.svg'
import logo from '../../assets/roadmap/logo.svg'
import s1 from '../../assets/roadmap/telegram.png'
import s2 from '../../assets/roadmap/discord.png'
import s3 from '../../assets/roadmap/facebook.png'
import s4 from '../../assets/roadmap/twitter.png'
import s5 from '../../assets/roadmap/youtube.png'
import tm from '../../assets/roadmap/trademark.svg'
import Image from '../image'
import { css, keyframes } from '@emotion/css'
import BG from '../../assets/roadmap/bg.png'
import { ComingSoonLink, Link } from '../header/Link'
import LinkNewTab from '../LinkNewTab'



export const Footer = () => {
  return (
    <section
      id="Roadmap"
      className="relative  h-[27.08vw] w-full overflow-hidden bg-bgs9 bg-cover mdm:hidden" 
    >
      <div className='h-auto mt-[12.08vw] mdm:h-[120vw] w-[100%] flex flex-col justify-between items-center pb-36 mdm:pb-[20vw] mdm:hidden'>
        <div className='flex mb-[2vw]'>
          <LinkNewTab href="https://t.me/Evermoon_Community">
            <Image src={s1} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>
          <LinkNewTab href="https://discord.com/invite/VgtZZwWbuG">
            <Image src={s2} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
            <Image src={s3} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>
          <LinkNewTab href="https://twitter.com/EverMoon_nft">
            <Image src={s4} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.youtube.com/c/Evermoon">
            <Image src={s5} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>        
        </div>
        <HeaderDesktop/>
        
      </div>
      
      <div className='flex md:hidden w-fill items-center justify-center mt-[38vw]'>
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
    <div className="">
      <div className="ml-8 flex items-center mr-auto z-0 mdm:flex-col mdm:mt-[5vw] mdm:ml-0">
        <Links title="HOME" href="#Home" current={true} />
        <Links title="ABOUT THE GAME" href="#Playandearn" current={false} />
        <Links title="FEATURES" href="#Feature" current={false} />
        <Links title="MAP" href="#Map" current={false} />
        <Links title="HEROES" href="#Heroes" current={false} /> 
        <Links title="TOKENOMIC" href="#Tokenomic" current={false} />
        <Links title="TEAM" href="#Team" current={false} />
        <Links title="PARTNER" href="#Partner" current={false} />
        <Links title="ROADMAP" href="#Roadmap" current={false} />
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
  href: string
  current: boolean
}

 function Links({ title, href, current }: LinkProp) {
  return (
    <NextLink href={href}>
      <a  className="px-2  flex flex-col items-center justify-center xlm:px-0 h-[4vw]">
        <div className="relative">
          <div
            className={`px-4 lgm:px-2 py-2 font-Glamode text-base mdm:text-[2vw]  mdm:px-0 mdm:py-0 xlm:text-xs text-center whitespace-nowrap transition-all duration-300
            }`}
          >
            {title}
          </div>
        </div>
      </a>
    </NextLink>
  )
}