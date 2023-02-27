import React from 'react'
// import roadmap from require("https://storage.googleapis.com/noxtestbucket/roadmapcdn.png")
import left from "../../assets/roadmap/left.png"
import right from "../../assets/roadmap/right.png"
import Image from '../image'
import { useState } from 'react'
import Image2 from 'next/image'
export const Roadmap = () => {
  const [state,setstate] = useState(1)
  // const roadmap = require("https://storage.googleapis.com/noxtestbucket/roadmapcdn.png")
  return (
    <section
      className="relative  h-[50vw] w-full overflow-hidden bg-bgs7 bg-cover flex flex-col items-center justify-start py-[2.7vw]" 
    >
      <div className='w-[21.6vw] h-[3vw]'>
        <a className='text-[4.5vw] text-[#F1E3B5]'>ROADMAP</a>
      </div>
      <div className='w-[87vw] relative h-[23vw] mt-[8vw] overflow-hidden'>
        <div className={`w-[101.7vw] mt-[0.5vw] absolute transition-all `+(state== 1 ? 'left-0' : 'left-[-14.5vw]')}>
          <Image2 src="https://storage.googleapis.com/noxtestbucket/roadmapcdn.png"  alt=""  width={2008} height={476} />
        </div>
      </div>
      <div className=' h-[5vw] w-full flex justify-center items-center'>
        <div className={state== 2 ?' cursor-pointer':""} onClick={()=>setstate(1)}>
          <Image src={left} alt="" className={`w-[2vw]  transition-all `+(state== 2 ? 'grayscale-0' : 'grayscale')}/>
        </div>
        <div className={'ml-[4vw] w-[1vw] h-[1vw] bg-[#FDEDC9] rounded-[0.3vw] rotate-45 transition-all '+(state== 2 ? 'w-[0.8vw] h-[0.8vw] bg-[#C9DBFD] rounded-[0.15vw] ' : '')}/>
        <div className='ml-[1.5vw] w-[1vw] h-[1vw] bg-[#FDEDC9] rounded-[0.3vw] rotate-45'/>
        <div className='ml-[1.5vw] w-[1vw] h-[1vw] bg-[#FDEDC9] rounded-[0.3vw] rotate-45'/>
        <div className='ml-[1.5vw] w-[1vw] h-[1vw] bg-[#FDEDC9] rounded-[0.3vw] rotate-45'/>
        <div className='ml-[1.5vw] w-[1vw] h-[1vw] bg-[#FDEDC9] rounded-[0.3vw] rotate-45'/>
        <div className={'ml-[1.5vw] mr-[4vw] w-[1vw] h-[1vw] bg-[#FDEDC9] rounded-[0.3vw] rotate-45 transition-all '+(state== 1 ? 'w-[0.8vw] h-[0.8vw] bg-[#C9DBFD] rounded-[0.15vw] ' : '')}/>
        <div className={state== 1 ?' cursor-pointer':""} onClick={()=>setstate(2)}>
          <Image src={right} alt="" className={`w-[2vw]  transition-all `+(state== 1 ? 'grayscale-0' : 'grayscale')}/>
        </div>
      </div>
    </section>
  )
}



