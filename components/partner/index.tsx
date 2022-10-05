import React, { useState } from 'react'
import Image from '../image'
import Link from 'next/link'
import topc from '../../assets/heroes/topc.png'
import botc from '../../assets/heroes/botc.png'
import all from '../../assets/partner/all.svg'
import h1 from '../../assets/heroes/h1.png'

const teams = ['t1', 't2', 't3', 't4', 't5', 't6', 't7']

export const Partner = () => {
  return (
    <section
      className="relative  h-[50vw] lgm:h-[197vw] w-full overflow-hidden bg-bgs6 bg-center lgm:bg-bgs6m bg-cover flex justify-center " 
    >
      <div className='w-[74vw] mt-[29vw] ml-[5.5vw]'>
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
    </section>
  )
}
