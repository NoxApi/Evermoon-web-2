import React, { useState } from 'react'
import Image from '../image'
import b1 from '../../assets/roadmap/investor.svg'
import b2 from '../../assets/roadmap/partner.svg'

const teams = ['t1', 't2', 't3', 't4', 't5', 't6', 't7']

export const Partner = () => {
  return (
    <section
      className="relative  h-[50vw] lgm:h-[197vw] w-full overflow-hidden bg-bgs6 bg-center lgm:bg-bgs6m bg-cover flex justify-center flex-col" 
    >
      <div className='w-[73.9vw] mt-[7vw] ml-[15.8vw]'>
      <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/investor.mp4#t=0.1" type="video/mp4" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>
      </div>
      <div className='w-[73.9vw] mt-[1.3vw] ml-[15.8vw]'>
      <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/partner.mp4#t=0.1" type="video/mp4" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>
      </div>
      <Image src={b1} alt="q122" className="absolute w-[11.1vw] top-[22.6vw] left-[10.2vw]" priority />
      <Image src={b2} alt="q122" className="absolute w-[11.1vw] top-[30.92vw] left-[10.2vw]" priority />
    </section>
  )
}
