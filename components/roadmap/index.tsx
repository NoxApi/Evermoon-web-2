import React from 'react'
import q122 from '../../assets/roadmap/22q1.svg'
import q222 from '../../assets/roadmap/22q2.svg'
import q322 from '../../assets/roadmap/22q3.svg'
import q422 from '../../assets/roadmap/22q4.svg'
import q123 from '../../assets/roadmap/23q1.svg'
import q223 from '../../assets/roadmap/23q2.svg'
import q122m from '../../assets/roadmap/22q1m.svg'
import q222m from '../../assets/roadmap/22q2m.svg'
import q322m from '../../assets/roadmap/22q3m.svg'
import q422m from '../../assets/roadmap/22q4m.svg'
import q123m from '../../assets/roadmap/23q1m.svg'
import q223m from '../../assets/roadmap/23q2m.svg'
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
        <Image src={q122} alt="q122" className="w-52 -mr-20" />
        <DotDivider />
        <Image src={q222} alt="q222" className="w-52 -mr-20" />
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
          <Image src={q322} alt="q322" className="w-52 -mr-20" />
          <DotDivider disabled horizontal className="items-end mr-[4rem]" />
        </div>
      </div>

      <div className="flex gap-x-4 justify-between">
        <Image src={q422} alt="q422" className="w-52 -mr-20" />
        <DotDivider disabled />
        <Image src={q123} alt="q123" className="w-52 -mr-20" />
        <DotDivider disabled />
        <Image src={q223} alt="q223" className="w-52 -mr-20" />
      </div>
    </div>
  )
}

function RoadmapMobile() {
  return (
    <div className="md:hidden max-w-[380px] mx-auto mt-16 pb-32">
      <div className=" flex flex-col items-center">
        <Image src={q122m} alt="q122m" className="w-full mx-8 -mr-4" />
        <DotDivider horizontal />
        <Image src={q222m} alt="q222m" className="w-full mx-8 -mr-4" />
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
        <Image src={q322m} alt="q322m" className="w-full mx-8" />
        <DotDivider disabled horizontal />
        <Image src={q422m} alt="q422m" className="w-full mx-8" />
        <DotDivider disabled horizontal />
        <Image src={q123m} alt="q123m" className="w-full mx-8" />
        <DotDivider disabled horizontal />
        <Image src={q223m} alt="q223m" className="px-2 w-full mx-8 " />
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
