import React, { useState } from 'react'
import Image from '../image'
import Link from 'next/link'
import topc from '../../assets/heroes/topc.png'
import botc from '../../assets/heroes/botc.png'
import all from '../../assets/partner/all.svg'
import h1 from '../../assets/heroes/h1.png'

const teams = ['t1', 't2', 't3', 't4', 't5', 't6', 't7']

export const PartnerM = () => {
  return (
    <section
      id="Partner"
      className="relative  h-[50vw] lgm:h-[197vw] w-full overflow-hidden bg-bgs6 bg-center lgm:bg-bgs6m bg-cover " 
    >
      <Image src={topc} alt="icon" className='z-30 w-[100%] absolute top-0 lgm:hidden'/>
      <Image src={botc} alt="icon" className='z-20 w-[100%] absolute bottom-0 lgm:hidden'/>
      <div className='mx-[5vw] flex justify-center items-start'> 
      </div>
    </section>
  )
}