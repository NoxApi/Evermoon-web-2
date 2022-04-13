import React from 'react'
import Title from '../../assets/trailer/title.svg'
import Frame from '../../assets/trailer/frame.svg'
import BG from '../../assets/trailer/bg.png'
import Image from '../image'

export const Trailer = () => {
  return (
    <div className="relative flex flex-col">
      <Image src={BG} alt="BG" fill />
      <div className="w-[1024px] mx-auto mt-12">
        <Image src={Title} alt="Title" className="w-96 ml-auto translate-y-6" />
      </div>
      <Image src={Frame} alt="Frame" className="w-[1024px] mx-auto " />
    </div>
  )
}
