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
import Image from '../image'
import { css, keyframes } from '@emotion/css'
import BG from '../../assets/roadmap/bg.png'

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
    <section id="Roadmap" className="relative z-0 overflow-hidden">
      <Image src={BG} alt="BG" className=" absolute inset-0 -z-10 mt-32" />
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl text-center relative">
        ROADMAP
      </div>

      <RoadmapDesktop />
      <RoadmapMobile />
    </section>
  )
}

function RoadmapDesktop() {
  return (
    <div className="hidden md:block max-w-[780px] mx-auto mt-16 pb-32">
      <div className=" flex gap-x-4 justify-between">
        <Image src={q122} alt="q122" className="w-40 -mr-20" priority />
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
        <Image src={q223} alt="q223" className="w-52 -mr-20" priority />
        <DotDivider disabled />
        <Image src={q123} alt="q123" className="w-[16rem] -mr-20" priority />
        <DotDivider disabled />
        <Image src={q422} alt="q422" className="w-52 -mr-20" priority />
      </div>
    </div>
  )
}

function RoadmapMobile() {
  return (
    <div className="md:hidden max-w-[380px] mx-auto mt-16 pb-32">
      <div className=" flex flex-col items-center">
        <Image src={q122m} alt="q122m" className="w-[90%] mx-8 -mr-4" priority />
        <DotDivider horizontal />
        <Image src={q222m} alt="q222m" className="w-[100%] mx-8 -mr-16" priority />
        <div className="my-8 flex flex-col gap-y-1">
          {Array(9)
            .fill(0)
            .map((e, index) => (
              <div
                key={index}
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
        <Image src={q322m} alt="q322m" className="w-[105%] mx-8 ml-[9rem]" priority />
        <DotDivider disabled horizontal />
        <Image src={q422m} alt="q422m" className="w-full mx-8 ml-[8rem]" priority />
        <DotDivider disabled horizontal />
        <Image src={q123m} alt="q123m" className="w-[110%] mx-8 ml-[10rem]" priority />
        <DotDivider disabled horizontal />
        <Image src={q223m} alt="q223m" className=" w-[120%] ml-[10rem]" priority />
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
