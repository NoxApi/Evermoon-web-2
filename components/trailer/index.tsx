import React from 'react'
import Title from '../../assets/trailer/title.svg'
import Frame from '../../assets/trailer/frame.svg'
import BG from '../../assets/trailer/bg.png'
import BG2 from '../../assets/trailer/bg2.png'
import Star from '../../assets/trailer/star.svg'
import Image from '../image'
import ImageNext from 'next/image'
import YouTube from 'react-youtube'

export const Trailer = () => {
  return (
    <section id="trailer" className="relative flex flex-col">
      <Image src={BG} alt="BG" fill />
      <div className="max-w-[1024px] w-full mx-auto mt-12">
        <Image src={Title} alt="Title" className="w-96 ml-auto translate-y-6" />
      </div>
      <div className="relative max-w-[1024px] w-full mx-auto mb-12 z-10">
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

      <div className="relative -mt-[15%] z-0">
        <div className="relative w-full h-0 z-10">
          <div
            className="w-full h-52 -translate-y-1/2"
            style={{
              background:
                'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, rgba(18, 18, 40, 1) 51.78%, rgba(7, 22, 45, 0) 100%)',
            }}
          />
        </div>
        <Image src={BG2} alt="BG2" className="w-full " />

        <div className="absolute inset-0 flex flex-col justify-center pt-64">
          <div
            className="w-full h-80 "
            style={{
              background:
                'linear-gradient(180deg, rgba(52, 52, 52, 0) 0%, rgba(46, 46, 46, 0.38) 20.31%, rgba(46, 46, 46, 0.56) 37.5%, rgba(46, 46, 46, 0.54) 70.31%, rgba(46, 46, 46, 0.37) 81.77%, rgba(19, 19, 19, 0) 100%)',
            }}
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center pt-64">
          <div className="flex items-center font-Glamode text-5xl">
            <div>Play & Earn</div>
            <div className="mx-8 w-3 h-3 bg-white rounded-full" />
            <div>Free to Earn</div>
          </div>
          <div className="mt-8 font-Josefin max-w-2xl text-lg text-center">
            Play and have fun along with earning with a 5v5 MOBA three lanes
            experience, customize the strategy and gameplay of you and your
            teammates.
          </div>
        </div>
      </div>
    </section>
  )
}
