import React from 'react'
import Content from '../../assets/runes/content.svg'
import Ring from '../../assets/tokenomics/ring.svg'
import SmallRing from '../../assets/tokenomics/smallring.svg'
import Evermoon from '../../assets/tokenomics/evermoon.png'
import Everstone from '../../assets/tokenomics/everstone.png'

import ImageNext from 'next/image'
import Image from '../image'

export const Tokenomics = () => {
  return (
    <section className="relative">
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl text-center relative">
        TOKENOMICS
      </div>

      <div className="max-w-[1024px] mx-auto relative">
        <div className="absolute inset-0">
          <ImageNext
            src={Content}
            alt="Content"
            className=" w-full h-full "
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="relative mt-10 flex justify-evenly pt-12 pb-8">
          <div className="flex flex-col items-center">
            <RingToken token={Evermoon} />
            <div className="font-Josefin text-3xl text-gold-light">
              EVERMOON TOKEN
            </div>
            <div className="font-Josefin text-xl">
              Total Supply 1,000,000,000
            </div>
          </div>

          <div className="flex flex-col items-center">
            <RingToken token={Everstone} />
            <div className="font-Josefin text-3xl text-gold-light">
              EVERSTONE
            </div>
            <div className="font-Josefin text-xl">Unlimited Supply</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RingToken({ token }: { token: StaticImageData }) {
  return (
    <div className="flex ">
      <div className="relative ">
        <Image src={Ring} alt="ring" className="w-80" />
        <div className="absolute inset-0 flex">
          <Image src={SmallRing} alt="SmallRing" className="w-full my-auto" />
        </div>
        <div className="absolute inset-0 flex">
          <Image
            src={SmallRing}
            alt="SmallRing"
            className="w-full my-auto rotate-45"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-7">
          <Image src={token} alt="token" className="w-full " />
        </div>
      </div>
    </div>
  )
}
