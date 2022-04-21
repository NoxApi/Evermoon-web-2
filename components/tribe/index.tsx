import React from 'react'
import Naka from '../../assets/tribe/naka.png'
import Byza from '../../assets/tribe/byza.png'
import Ethe from '../../assets/tribe/ethe.png'
import Luna from '../../assets/tribe/luna.png'
import Soli from '../../assets/tribe/soli.png'
import Image from '../image'
import BG from '../../assets/tribe/bg.png'
import BG2 from '../../assets/tribe/bg2.png'
import BG3 from '../../assets/tribe/bg3.svg'
import BG4 from '../../assets/tribe/bg4.png'
import Map from '../../assets/tribe/map.png'

export const Tribe = () => {
  return (
    <section id="tribe" className="relative overflow-hidden bg-gray-900">
      <Image src={BG} alt="BG" className="absolute w-full " fill />

      <div className="z-0 mb-32 relative max-w-[840px] mx-8 md:mx-auto rounded-b-2xl ">
        <Image
          src={BG2}
          alt="BG2"
          className="absolute w-full -z-20 scale-[116%] -translate-y-[40%]"
        />
        <div
          className="-z-10 absolute inset-0 rounded-b-2xl border-[2px] border-gold-light"
          style={{
            background: 'linear-gradient(180deg, #191820 0%, #091A33 100%)',
          }}
        />
        <div className="mx-8 md:mx-16 pt-20 font-Josefin text-gold-light text-6xl">
          TRIBES
        </div>
        <div className="mx-8 md:mx-16 font-Josefin text-xl my-8">
          The power has been passed on to the selected individual through the
          {` tribe's`} sacred ritual that happens once every 100 years.
          <br />
          The fractions of power found by Nakamatos are kept in the {`tribe's `}
          pantheon.
        </div>

        <div className="mx-8 md:mx-16 pb-12 flex flex-wrap md:flex-nowrap justify-evenly md:justify-between mt-10">
          <Image src={Naka} alt="Naka" className="w-20 md:w-28" />
          <Image src={Byza} alt="Byza" className="w-20 md:w-28" />
          <Image src={Ethe} alt="Ethe" className="w-20 md:w-28" />
          <Image src={Luna} alt="Luna" className="w-20 md:w-28" />
          <Image src={Soli} alt="Soli" className="w-20 md:w-28" />
        </div>
      </div>

      <div className="h-0 w-full relative z-10">
        <div
          className="h-48 w-full -translate-y-1/2"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, rgba(18, 32, 50, 0.8) 31.78%, rgba(18, 32, 50, 1) 51.78%, rgba(7, 22, 45, 0) 100%)',
          }}
        />
      </div>

      <div className="relative overflow-hidden ">
        <Image
          src={BG4}
          alt="BG4"
          className="absolute w-full mix-blend-screen"
        />
        <div className="pt-24 relative text-center font-Josefin text-gold-light text-5xl md:text-6xl  z-10">
          EVERFIELD
        </div>
        <div className=" relative z-10">
          <Image src={BG3} alt="BG3" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src={Map} alt="Map" className=" w-[70%]  " />
          </div>
        </div>

        <div className="h-0 w-full relative ">
          <div
            className="h-72 w-full -translate-y-1/2"
            style={{
              background:
                'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, #161637 51.78%, rgba(7, 22, 45, 0) 100%)',
            }}
          />
        </div>
      </div>

      <div className="h-0 w-full">
        <div
          className="h-72 w-full -translate-y-1/2"
          style={{
            background:
              'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, #161637 51.78%, rgba(7, 22, 45, 0) 100%)',
          }}
        />
      </div>

      <div className="pt-3 pb-16 bg-[#0D1325]  ">
        <div className="mt-4 mx-4 md:mx-auto max-w-[660px] font-Josefin  md:text-xl text-center relative">
          All incidents of the war started when Beyonder separated its power
          into fractions and spread them all over to prevent the collapse of the
          world. That power is called De-Zentrum and is one of the original
          source that Nakamatos tribe obtained its power since the De-Zentrum
          discovered.
        </div>
      </div>
    </section>
  )
}
