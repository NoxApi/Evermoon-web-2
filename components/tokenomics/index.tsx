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
      id="Home"
      className="h-[1080px] max-w-[1920px] overflow-hidden bg-bgs4 bg-center font-Josefin" 
    > 
      
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-[#F1E3B5] text-5xl md:text-6xl text-center ">
        TOKENOMICS
      </div>
      <div className='relative w-[auto]  flex justify-center items-center mx-auto flex-col mt-6'>
        <div>
        <Image src={effect} alt="q122" className=" w-[400px] mix-blend-overlay absolute translate-x-[25%]" priority />
        {isevm?
        (<Image src={evm} alt="q122" className=" w-[900px]  absolute -translate-x-[17%] translate-y-[30%]" priority />):
        (<Image src={evs} alt="q122" className=" w-[1100px]  absolute -translate-x-[17%] translate-y-[30%] -m-[60px] -mt-[100px]" priority />)}
        <div className='w-[600px] h-[100px]  relative flex'>
          {isevm &&<Image src={option} alt="q122" className=" w-[600px] absolute" priority />}
          {!isevm &&<Image src={option2} alt="q122" className=" w-[600px] absolute" priority />}
          <div onClick={()=>setisevm(true)} className='w-[50%] h-full cursor-pointer z-10'></div>
          <div onClick={()=>setisevm(false)} className='w-[50%] h-full cursor-pointer z-10'></div>
        </div>
        {isevm &&<Image src={light} alt="q122" className=" w-[290px] absolute top-0 mix-blend-screen -translate-x-[10px]" priority />}
        {!isevm &&<Image src={light2} alt="q122" className=" w-[290px] absolute top-0 mix-blend-screen translate-x-[325px]" priority />}
        </div>
        <div className='flex h-[600px]'>
        <div className='flex justify-end items-center'>
            <Image src={esd0} alt="q122" className={` w-[400px]  `+ (isevm?` opacity-0 `:` opacity-1 `)} priority />
          </div>
          <div className='w-[380px]'>
          </div>
          {isevm?(
            (<div className='flex flex-col items-start justify-center'>
            <Image src={ed1} alt="q122" className=" w-[400px] mt-2" priority />
            <Image src={ed2} alt="q122" className=" w-[400px] mt-2" priority />
            <Image src={ed3} alt="q122" className=" w-[400px] mt-2" priority />
            <Image src={ed4} alt="q122" className=" w-[400px] mt-2" priority />
            <Image src={ed5} alt="q122" className=" w-[400px] mt-2" priority />  
          </div>)
          ):
          (<div className='flex flex-col items-start justify-center'>
            <Image src={esd1} alt="q122" className=" w-[400px] mt-2" priority />
            <Image src={esd2} alt="q122" className=" w-[400px] mt-2" priority />
            <Image src={esd3} alt="q122" className=" w-[400px] mt-2" priority />
            <Image src={esd4} alt="q122" className=" w-[400px] mt-2" priority />
            <Image src={esd5} alt="q122" className=" w-[400px] mt-2" priority />  
          </div>)
          }
        </div>
      </div>
      {isevm?(
      <div>
        <div className=" max-w-[1024px] mx-auto font-Josefin text-[#F1E3B5] text-5xl md:text-6xl text-center ">
          EVERMOON
        </div>
        <div className=" max-w-[1024px] mx-auto font-Josefin text-[#F1E3B5] text-5xl md:text-6xl text-center ">
          TOKEN
        </div>
        <div className=" max-w-[1024px] mx-auto font-Josefin text-white text-xl md:text-xl text-center ">
          {"total supply 1,000,000,000"}
        </div>
      </div>
      ):(
      <div>
        <div className=" max-w-[1024px] mx-auto font-Josefin text-[#F1E3B5] text-5xl md:text-6xl text-center ">
          EVERSTONE
        </div>
        <div className=" max-w-[1024px] mx-auto font-Josefin text-white text-xl md:text-xl text-center ">
          {"Unlimited Supply"}
        </div>
      </div>
      )
      }
    </section>
    </>
  )
}

