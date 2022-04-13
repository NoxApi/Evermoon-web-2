import React from 'react'
import Title from '../../assets/trailer/title.svg'
import Frame from '../../assets/trailer/frame.svg'
import BG from '../../assets/trailer/bg.png'
import Star from '../../assets/trailer/star.svg'
import Image from '../image'
import ImageNext from 'next/image'
import YouTube from 'react-youtube'

export const Trailer = () => {
  return (
    <div className="relative flex flex-col">
      <Image src={BG} alt="BG" fill />
      <div className="w-[1024px] mx-auto mt-12">
        <Image src={Title} alt="Title" className="w-96 ml-auto translate-y-6" />
      </div>
      <div className="relative w-[1024px] mx-auto mb-12">
        <YouTube
          videoId="piZkiA-mLx8"
          opts={{ height: '100%', width: '100%' }}
          className="w-full h-full aspect-video"
          containerClassName="w-full h-full aspect-video"
        />
        <div className="absolute inset-0 pointer-events-none">
          <ImageNext
            src={Frame}
            layout="responsive"
            alt="Frame"
            className=" pointer-events-none "
          />
        </div>
        <Image
          src={Star}
          alt="Star"
          className="w-16 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
        <Image
          src={Star}
          alt="Star"
          className="w-16 absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>
  )
}
