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

const dotProgress = (index: number) => keyframes`
	0% {
    background-color: var(--gold-disabled);
  }
  ${((100 * index) / 9).toFixed(0)}% {
    background-color: var(--gold-light);
  }
`

export const Roadmap = () => {
  return (
    <section
      id="Roadmap"
      className="relative  h-[1500px] w-full overflow-hidden bg-bgs7 bg-center mdm:bg-bgs7m mdm:h-[440vw] mdm:bg-cover" 
    >
      <div className='h-[980px] mdm:h-[330vw]'>
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl text-center relative mdm:hidden">
        ROADMAP
      </div>

      <RoadmapDesktop />
      </div>
      <div className='h-[520px] mdm:h-[120vw] w-[100%] flex flex-col justify-between items-center pb-36 mdm:pb-[20vw] mdm:hidden'>
        <Image src={logo} alt="q122" className=" w-72 mdm:w-[40vw]" priority />
        <div className='flex'>
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
        <Image src={tm} alt="q122" className=" w-56" priority />
        
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

function RoadmapDesktop() {
  return (
    <div className="hidden md:block max-w-[780px] mx-auto mt-16 pb-32">
      <div className=" flex gap-x-4 justify-between">
        <Image src={q122} alt="q122" className="w-40 -mr-6" priority />
        <DotDivider />
        <Image src={q222} alt="q222" className="w-52 -mr-20" priority />
        <div className="flex gap-x-1 mt-14">
          {Array(9)
            .fill(0)
            .map((e, index) => (
              // <Dot key={index} index={index}></Dot>
              <div
                key={index}
                // className="w-2 h-2 rounded-full"
                className={css`
                  width: 8px;
                  height: 8px;
                  border-radius: 9999px;
                  animation: 1.5s infinite ${dotProgress(index)};
                  animation-timing-function: step-end;
                `}
              />
            ))}
        </div>

        <div>
          <Image src={q322} alt="q322" className="w-[14rem] -mr-20" priority />
          <DotDivider disabled horizontal className="items-end mr-[4rem]" />
        </div>
      </div>

      <div className="flex gap-x-4 justify-between">
        <Image src={q223} alt="q223" className="w-52 -mr-20 " priority />
        <DotDivider disabled />
        <Image src={q123} alt="q123" className="w-[16rem] -mr-36 -ml-8" priority />
        <DotDivider disabled />
        <Image src={q422} alt="q422" className="w-52 -mr-[65px] " priority />
      </div>
    </div>
  )
}

function DotDivider({
  disabled = false,
  horizontal = false,
  className,
}: {
  disabled?: boolean
  horizontal?: boolean
  className?: string
}) {
  if (horizontal) {
    return !disabled ? (
      <div className={`my-8 flex flex-col gap-y-1  ${className}`}>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gold-light" />
          ))}
      </div>
    ) : (
      <div className={`my-8 flex flex-col gap-y-1 ${className}`}>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-[color:var(--gold-disabled)]"
            />
          ))}
      </div>
    )
  }

  return !disabled ? (
    <div className="flex gap-x-1 mt-14">
      {Array(9)
        .fill(0)
        .map((e, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-gold-light" />
        ))}
    </div>
  ) : (
    <div className="flex gap-x-1 mt-14">
      {Array(9)
        .fill(0)
        .map((e, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-[color:var(--gold-disabled)]"
          />
        ))}
    </div>
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