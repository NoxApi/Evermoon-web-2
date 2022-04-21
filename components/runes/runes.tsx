import React from 'react'
import Image from '../image'
import ImageNext from 'next/image'
import Content from '../../assets/runes/content.svg'
import Diamond from '../../assets/runes/diamond.svg'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import Frame from '../../assets/runes/frame.svg'
import A1 from '../../assets/runes/a1.png'
import A2 from '../../assets/runes/a2.png'
import A3 from '../../assets/runes/a3.png'
import D1 from '../../assets/runes/d1.png'
import D2 from '../../assets/runes/d2.png'
import D3 from '../../assets/runes/d3.png'
import M1 from '../../assets/runes/m1.png'
import M2 from '../../assets/runes/m2.png'
import M3 from '../../assets/runes/m3.png'
import { GoldGradientFrame } from '../frame'

export const Runes = () => {
  return (
    <section id="Runes" className="relative ">
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl text-center relative">
        RUNES
      </div>
      <div className="max-w-[1024px] mx-8 md:mx-auto relative">
        <GoldGradientFrame />

        <div className="hidden md:block relative mt-10">
          <Tab.Group>
            <Tab.List className="pt-12 flex justify-evenly ">
              {['Attack', 'Defend', 'Mobility'].map((title) => (
                <Tab key={title} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={` rounded-2xl p-[1px] relative mx-4`}
                      style={{
                        background:
                          'linear-gradient(90deg, #F3A51B 0.76%, #FFE2AE 72.07%, #DC8C00 100%)',
                      }}
                    >
                      <div className="m-[1px] absolute inset-0 bg-gray-700 rounded-2xl" />
                      <div
                        className={`w-56 py-2 font-Josefin text-xl rounded-2xl relative ${
                          selected ? 'text-black' : 'text-white'
                        }`}
                        style={{
                          background: selected
                            ? 'linear-gradient(180deg, #FFCD75 0%, #E69405 100%)'
                            : 'linear-gradient(180deg, rgba(34, 35, 62, 0.8) 9.52%, #152A5D 53.82%, #040D1D 100%)',
                        }}
                      >
                        {title}
                      </div>
                      <Image
                        src={Diamond}
                        alt="Diamond"
                        className="absolute left-0 top-1/2 -translate-x-[calc(50%-2px)] -translate-y-1/2 w-7"
                      />
                      <Image
                        src={Diamond}
                        alt="Diamond"
                        className="absolute right-0 top-1/2 translate-x-[calc(50%-2px)] -translate-y-1/2 w-7"
                      />
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className={'mt-12'}>
              <Tab.Panel className="flex justify-evenly">
                <Rune image={A1} />
                <Rune image={A2} />
                <Rune image={A3} />
              </Tab.Panel>
              <Tab.Panel className="flex justify-evenly">
                <Rune image={D1} />
                <Rune image={D2} />
                <Rune image={D3} />
              </Tab.Panel>
              <Tab.Panel className="flex justify-evenly">
                <Rune image={M1} />
                <Rune image={M2} />
                <Rune image={M3} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="md:hidden relative mt-10">
          <div className="font-Glamode text-xl py-6 text-center">Attack</div>
          <div className="flex justify-evenly flex-wrap">
            <Rune image={A1} />
            <Rune image={A2} />
            <Rune image={A3} />
          </div>
          <div className="font-Glamode text-xl py-6 text-center">Defend</div>
          <div className="flex justify-evenly flex-wrap">
            <Rune image={D1} />
            <Rune image={D2} />
            <Rune image={D3} />
          </div>
          <div className="font-Glamode text-xl py-6 text-center">Mobility</div>
          <div className="flex justify-evenly flex-wrap">
            <Rune image={M1} />
            <Rune image={M2} />
            <Rune image={M3} />
          </div>
        </div>

        <div className="relative max-w-[500px] md:text-center mx-4 md:mx-auto mt-12 pb-16">
          An ancient stone that harbored a strong energy since ancient times. It
          can be obtained by opening it from loot boxes and market places.
        </div>
      </div>
    </section>
  )
}

function Rune({ image }: { image: StaticImageData }) {
  return (
    <div className="relative">
      <Image src={Frame} alt="Frame" className="w-24 md:w-64" />
      <Image
        src={image}
        alt={image.src.split('/').slice(-1).join('')}
        className="absolute inset-0 p-3"
      />
    </div>
  )
}
