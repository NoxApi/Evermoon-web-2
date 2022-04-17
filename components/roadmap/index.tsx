import React from 'react'
import q122 from '../../assets/roadmap/22q1.svg'
import q222 from '../../assets/roadmap/22q2.svg'
import q322 from '../../assets/roadmap/22q3.svg'
import q422 from '../../assets/roadmap/22q4.svg'
import q123 from '../../assets/roadmap/23q1.svg'
import q223 from '../../assets/roadmap/23q2.svg'
import Image from '../image'
import styled, { keyframes } from 'styled-components'
import BG from '../../assets/roadmap/bg.png'

const dotProgress = (index: number) => keyframes`
	0% {
    background-color: var(--gold-disabled);
  }
  ${((100 * index) / 9).toFixed(0)}% {
    background-color: var(--gold-light);
  }
`

const Dot = styled.div`
  animation: 1.5s infinite
    ${(props) => dotProgress((props as any).index as number)};
  animation-timing-function: step-end;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
` as ({ index }: { index: number }) => JSX.Element

export const Roadmap = () => {
  return (
    <section className="relative z-0">
			<Image src={BG} alt="BG" className=" absolute inset-0 -z-10 mt-32"  />
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl text-center relative">
        ROADMAP
      </div>

      <div className="max-w-[780px] mx-auto mt-16 pb-32">
        <div className=" flex gap-x-4 justify-between">
          <Image src={q122} alt="q122" className="w-52 -mr-20" />
          <div className="flex gap-x-1 mt-14">
            {Array(9)
              .fill(0)
              .map((e, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gold-light"
                />
              ))}
          </div>
          <Image src={q222} alt="q222" className="w-52 -mr-20" />
          <div className="flex gap-x-1 mt-14">
            {Array(9)
              .fill(0)
              .map((e, index) => (
                <Dot key={index} index={index}></Dot>
              ))}
          </div>
          <div>
            <Image src={q322} alt="q322" className="w-52 -mr-20" />
            <div className="my-8 flex flex-col gap-y-1 items-end mr-[4rem]">
              {Array(9)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-[color:var(--gold-disabled)]"
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 justify-between">
          <Image src={q422} alt="q422" className="w-52 -mr-20" />
          <div className="flex gap-x-1 mt-14">
            {Array(9)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-[color:var(--gold-disabled)]"
                />
              ))}
          </div>
          <Image src={q123} alt="q123" className="w-52 -mr-20" />
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
          <Image src={q223} alt="q223" className="w-52 -mr-20" />
        </div>
      </div>
    </section>
  )
}
