import React, { useState } from 'react'
import Image from '../image'
import effect from '../../assets/tokenomics/effect.png'
import option from '../../assets/tokenomics/option.svg'
import light from '../../assets/tokenomics/Light1.svg'
import option2 from '../../assets/tokenomics/option2.svg'
import light2 from '../../assets/tokenomics/Light2.svg'
import evm from '../../assets/tokenomics/evm.gif'
import evs from '../../assets/tokenomics/evs.gif'
import ed1 from '../../assets/tokenomics/ed1.svg'
import ed2 from '../../assets/tokenomics/ed2.svg'
import ed3 from '../../assets/tokenomics/ed3.svg'
import ed4 from '../../assets/tokenomics/ed4.svg'
import ed5 from '../../assets/tokenomics/ed5.svg'
import esd1 from '../../assets/tokenomics/esd1.svg'
import esd2 from '../../assets/tokenomics/esd2.svg'
import esd3 from '../../assets/tokenomics/esd3.svg'
import esd4 from '../../assets/tokenomics/esd4.svg'
import esd5 from '../../assets/tokenomics/esd5.svg'
import esd0 from '../../assets/tokenomics/esd0.svg'

export const Tokenomics = () => {
  const [isevm,setisevm] = useState(true)
  return (
    <>
    <section
      className="h-[50vw] lgm:h-[140vw] max-w-[1920px] overflow-hidden bg-bgs4 lgm:bg-bgs4m bg-cover font-Josefin -mb-[5px] lgm:hidden" 
    > 
      <div className='relative w-[auto]  flex justify-center items-center mx-auto flex-col mt-[10vw]  '>
      {isevm?
        (<Image src={evm} alt="q122" className=" w-[55vw]  absolute translate-y-[-5%] translate-x-[-1%] lgm:w-[110vw] " priority />):
        (<Image src={evs} alt="q122" className=" w-[65vw]  absolute lgm:left-[-30vw] lgm:translate-y-[10%]" priority />)}
        <div className=''>
        
        {/* selector */}
        <div className='w-[31.25vw] lgm:w-[80vw]  h-[5.21vw] lgm:h-[12vw]   relative flex'>
          {isevm &&<Image src={option} alt="q122" className=" w-[31.25vw] lgm:w-full absolute" priority />}
          {!isevm &&<Image src={option2} alt="q122" className=" w-[31.25vw] lgm:w-full absolute" priority />}
          <div onClick={()=>setisevm(true)} className='w-[50%] h-full cursor-pointer z-10'></div>
          <div onClick={()=>setisevm(false)} className='w-[50%] h-full cursor-pointer z-10'></div>
        </div>
        {isevm &&<Image src={light} alt="q122" className=" w-[15vw] absolute top-0 mix-blend-screen -translate-x-[0.4vw] lgm:hidden" priority />}
        {!isevm &&<Image src={light2} alt="q122" className=" w-[15vw] absolute top-0 mix-blend-screen translate-x-[16.5vw] lgm:hidden" priority />}
        </div>
        {/* usecase */}
        <div className='flex h-[26vw] '>
        <div className='flex justify-end items-center lgm:hidden'>
            <Image src={esd0} alt="q122" className={` w-[21vw]  `+ (isevm?` opacity-0 `:` opacity-1 `)} priority />
          </div>
          <div className='w-[19vw] lgm:w-[50vw]'>
          <Image src={effect} alt="q122" className=" w-[50vw] mix-blend-overlay lg:hidden" priority />
          </div>
          {isevm?(
            (<div className='flex flex-col items-start justify-center w-[20.9vw] lgm:w-[50vw]  '>
            <Image src={ed1} alt="q122" className=" w-full mt-2" priority />
            <Image src={ed2} alt="q122" className=" w-full mt-2" priority />
            <Image src={ed3} alt="q122" className=" w-full mt-2" priority />
            <Image src={ed4} alt="q122" className=" w-full mt-2" priority />
            <Image src={ed5} alt="q122" className=" w-full mt-2" priority />  
          </div>)
          ):
          (<div className='flex flex-col items-start justify-center w-[20.9vw] lgm:w-[50vw] '>
            <Image src={esd1} alt="q122" className=" w-full mt-2" priority />
            <Image src={esd2} alt="q122" className=" w-full mt-2" priority />
            <Image src={esd3} alt="q122" className=" w-full mt-2" priority />
            <Image src={esd4} alt="q122" className=" w-full mt-2" priority />
            <Image src={esd5} alt="q122" className=" w-full mt-2" priority />  
          </div>)
          }
        </div>
        {isevm?(
      <div className='flex flex-col items-center lgm:items-start lgm:-mt-[15vw]'>
        <div className='flex flex-col w-[40vw]  lgm:ml-[5vw]'>
          <div className="   font-Josefin text-[#F1E3B5]   text-[2.5vw] text-center inset-[0.1vw] h-[2.5vw]">
            EVERMOON
          </div>
          <div className="   font-Josefin text-[#F1E3B5]   text-[2.5vw] text-center inset-[0.1vw]">
            TOKEN
          </div>
          <div className="   font-Josefin text-white text-[1.3vw]  text-center ">
            {"total supply 1,000,000,000"}
          </div>
        </div>
      </div>
      ):(
      <div className='flex flex-col items-center lgm:items-start lgm:-mt-[15vw]'>
        <div className='flex flex-col w-[40vw] lgm:ml-[5vw]'>
          <div className="   font-Josefin text-[#F1E3B5]   text-[2vw] text-center ">
            EVERSTONE
          </div>
          <div className="  font-Josefin text-white text-[1vw]  text-center ">
            {"Unlimited Supply"}
          </div>
        </div>
      </div>
      )
      }
      </div>
    </section>
    </>
  )
}

