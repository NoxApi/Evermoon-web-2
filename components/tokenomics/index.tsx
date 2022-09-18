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
      id="Tokenomic"
      className="h-[1080px] lgm:h-[140vw] max-w-[1920px] overflow-hidden bg-bgs4 lgm:bg-bgs4m lg:bg-center lgm:bg-cover font-Josefin -mb-[5px]" 
    > 
      
      <div className="mt-20 lgm:mt-[5vw] max-w-[1024px] mx-auto font-Josefin text-[#F1E3B5] text-4xl lgm:text-[8vw] text-center ">
        TOKENOMICS
      </div>
      <div className='relative w-[auto]  flex justify-center items-center mx-auto flex-col mt-6 lgm:mt-[2vw] '>
      <Image src={effect} alt="q122" className=" w-[400px] mix-blend-overlay absolute  lgm:-translate-x-[50%] lgm:hidden" priority />
      {isevm?
        (<Image src={evm} alt="q122" className=" w-[900px]  absolute lgm:left-[-30vw]  lgm:translate-y-[8%] lgm:w-[110vw] " priority />):
        (<Image src={evs} alt="q122" className=" w-[1100px]  absolute lgm:left-[-30vw] lgm:translate-y-[10%] -m-[60px] -mt-[100px] lgm:w-[130vw] lgm:-m-[10vw] lgm:-mt-[20vw]" priority />)}
        <div className=''>
        
        {/* selector */}
        <div className='w-[600px] lgm:w-[80vw] max-w-[600px] h-[100px] lgm:h-[12vw]   relative flex'>
          {isevm &&<Image src={option} alt="q122" className=" w-[600px] lgm:w-full absolute" priority />}
          {!isevm &&<Image src={option2} alt="q122" className=" w-[600px] lgm:w-full absolute" priority />}
          <div onClick={()=>setisevm(true)} className='w-[50%] h-full cursor-pointer z-10'></div>
          <div onClick={()=>setisevm(false)} className='w-[50%] h-full cursor-pointer z-10'></div>
        </div>
        {isevm &&<Image src={light} alt="q122" className=" w-[290px] absolute top-0 mix-blend-screen -translate-x-[10px] lgm:hidden" priority />}
        {!isevm &&<Image src={light2} alt="q122" className=" w-[290px] absolute top-0 mix-blend-screen translate-x-[325px] lgm:hidden" priority />}
        </div>
        {/* usecase */}
        <div className='flex h-[550px] lgm:h-[80vw]'>
        <div className='flex justify-end items-center lgm:hidden'>
            <Image src={esd0} alt="q122" className={` w-[400px]  `+ (isevm?` opacity-0 `:` opacity-1 `)} priority />
          </div>
          <div className='w-[380px] lgm:w-[50vw]'>
          <Image src={effect} alt="q122" className=" w-[50vw] mix-blend-overlay lg:hidden" priority />
          </div>
          {isevm?(
            (<div className='flex flex-col items-start justify-center w-[400px] lgm:w-[50vw]  '>
            <Image src={ed1} alt="q122" className=" w-full mt-2" priority />
            <Image src={ed2} alt="q122" className=" w-full mt-2" priority />
            <Image src={ed3} alt="q122" className=" w-full mt-2" priority />
            <Image src={ed4} alt="q122" className=" w-full mt-2" priority />
            <Image src={ed5} alt="q122" className=" w-full mt-2" priority />  
          </div>)
          ):
          (<div className='flex flex-col items-start justify-center w-[400px] lgm:w-[50vw] '>
            <Image src={esd1} alt="q122" className=" w-full mt-2" priority />
            <Image src={esd2} alt="q122" className=" w-full mt-2" priority />
            <Image src={esd3} alt="q122" className=" w-full mt-2" priority />
            <Image src={esd4} alt="q122" className=" w-full mt-2" priority />
            <Image src={esd5} alt="q122" className=" w-full mt-2" priority />  
          </div>)
          }
        </div>
      </div>
      {isevm?(
      <div className='flex flex-col items-center lgm:items-start lgm:-mt-[15vw]'>
        <div className='flex flex-col w-[40vw] lgm:ml-[5vw]'>
          <div className=" max-w-[1024px]  font-Josefin text-[#F1E3B5]  lg:text-6xl text-[5vw] text-center">
            EVERMOON
          </div>
          <div className=" max-w-[1024px]  font-Josefin text-[#F1E3B5]  lg:text-6xl text-[5vw] text-center ">
            TOKEN
          </div>
          <div className=" max-w-[1024px]  font-Josefin text-white text-[3vw] lg:text-xl text-center ">
            {"total supply 1,000,000,000"}
          </div>
        </div>
      </div>
      ):(
      <div className='flex flex-col items-center lgm:items-start lgm:-mt-[15vw]'>
        <div className='flex flex-col w-[40vw] lgm:ml-[5vw]'>
          <div className="  max-w-[1024px]  font-Josefin text-[#F1E3B5]  lg:text-6xl text-[5vw] text-center ">
            EVERSTONE
          </div>
          <div className=" max-w-[1024px]  font-Josefin text-white text-[3vw] lg:text-xl text-center ">
            {"Unlimited Supply"}
          </div>
        </div>
      </div>
      )
      }
    </section>
    </>
  )
}

