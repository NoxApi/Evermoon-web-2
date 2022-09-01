import React, { useState } from 'react'
import Content from '../../assets/runes/content.svg'
import Ring from '../../assets/tokenomics/ring.svg'
import SmallRing from '../../assets/tokenomics/smallring.svg'
import Evermoon from '../../assets/tokenomics/evermoon.png'
import Everstone from '../../assets/tokenomics/everstone.png'
import UseCase0 from '../../assets/tokenomics/Use case-0.svg'
import UseCase1 from '../../assets/tokenomics/Use case-1.svg'
import UseCase2 from '../../assets/tokenomics/Use case-2.svg'
import UseCase3 from '../../assets/tokenomics/Use case-3.svg'
import UseCase4 from '../../assets/tokenomics/Use case-4.svg'
import evs from '../../assets/tokenomics/evstext.svg'
import evm from '../../assets/tokenomics/evmtext.svg'
import UseCase0S from '../../assets/tokenomics/everstone/Use case-0.svg'
import UseCase1S from '../../assets/tokenomics/everstone/Use case-1.svg'
import UseCase2S from '../../assets/tokenomics/everstone/Use case-2.svg'
import UseCase3S from '../../assets/tokenomics/everstone/Use case-3.svg'
import UseCase4S from '../../assets/tokenomics/everstone/Use case-4.svg'
import { TokenomicsM } from './tablet'
import ImageNext from 'next/image'
import Image from '../image'
import { css, keyframes } from '@emotion/css'
import { GoldGradientFrame } from '../frame'
import { Transition } from '@headlessui/react'

const spin = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(15px, 0) rotate(180deg);
  }
  100% {
    transform: translate(0px, 0) rotate(360deg);
  }
`

const spinInv = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

export const Tokenomics = () => {
  return (
    <>
    <section
      id="Home"
      className="relative  h-[1080px] w-full overflow-hidden bg-bgs4 bg-center" 
    >
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-5xl md:text-6xl text-center relative ">
        TOKENOMICS
      </div>

      <div className="max-w-[1024px] h-[550px] mdm:h-[850px] mx-8 lg:mx-auto relative transition-all">
        <GoldGradientFrame />
        <Summary />   
      </div>
    </section>
    <TokenomicsM/>
    </>
  )
}

function RingToken({
  token,
  animate = false,
  width = 'w-[200px] md:w-80',
}: {
  token: StaticImageData
  animate?: boolean
  width?: string
}) {
  return (
    <div className="">
      <div className="relative ">
        <Image src={Ring} alt="ring" className={width} />
        <div className="absolute inset-0 flex ">
          {animate ? (
            <Image
              src={SmallRing}
              alt="SmallRing"
              className={
                'w-full my-auto ' +
                css`
                  animation: 7s linear infinite ${spinInv};
                  animation-delay: -3000ms;
                `
              }
            />
          ) : (
            <Image
              src={SmallRing}
              alt="SmallRing"
              className={'w-full my-auto '}
            />
          )}
        </div>
        <div className="absolute inset-0 flex">
          {animate ? (
            <Image
              src={SmallRing}
              alt="SmallRing"
              className={
                'w-full my-auto ' +
                css`
                  animation: 7s linear infinite ${spin};
                `
              }
            />
          ) : (
            <Image
              src={SmallRing}
              alt="SmallRing"
              className={'w-full my-auto rotate-45'}
            />
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-[8%]">
          <Image src={token} alt="token" className="w-full mdm:w-[150px] " />
        </div>
      </div>
      
    </div>
  )
}

function Summary() {
  return (
    <div className="relative mt-10 flex flex-row  justify-between mdm:justify-between mdm:pb-[100px] mdm:flex-col  mdm:h-[850px]">
   
      <div className="flex flex-col items-center EVM-HOV w-[100%]    ">
        <div className='tokenomic  mdm:flex-col mdm:items-center mdm:justify-center  mdm:px-[10vw]  '>
        <div className='flex flex-col hoverA ml-[30px] mdm:ml-0'>
        <RingToken token={Evermoon} animate />
        <div className=''>
          <div className="font-Josefin text-xl md:text-3xl text-gold-light">
              EVERMOON TOKEN
            </div>
            <div className="font-Josefin md:text-xl text-center">
              Total Supply 1,000,000,000
            </div>
      </div>
      
        </div>
        <div className=' tokenomicinfo '>
          
        <div className="relative flex flex-col text-left mx-[130px] lgm:mx-auto max-w-[400px]" >
          <div className="flex flex-col gap-y-5 mt-8 justify-center  ">
            {[evm,UseCase0, UseCase1, UseCase2, UseCase3, UseCase4].map(
              (image: StaticImageData) => (
                <Image key={image.src} src={image} alt="" className='' />
              )
            )}
          </div>
          
        </div>
          
        </div>
        
        </div>
      </div>

      <button className="EVM flex flex-col items-center EVS-HOV w-[100%] ">
      <div className='tokenomic2  mdm:flex-col mdm:items-center mdm:justify-center  mdm:px-[10vw]'>     
      <div className=' tokenomicinfo  '>  
          <div className="relative flex flex-col text-left mx-[130px] lgm:mx-auto max-w-[400px]">
            <div className="flex flex-col  gap-y-5 mt-8 justify-center mdm:pt-[100px]">
            {[evs,UseCase0S, UseCase1S, UseCase2S, UseCase3S, UseCase4S].map(
              (image: StaticImageData) => (
                <Image key={image.src} src={image} alt="" className='' />
              )
            )}
            </div>
            
          </div>
          </div>
      <div className='flex flex-col hoverA mr-[30px] mdm:mr-0'>
        <RingToken token={Everstone} animate />
        <div className="EVM font-Josefin text-xl md:text-3xl text-gold-light">
          EVERSTONE
        </div>
        <div className="EVM font-Josefin md:text-xl">Unlimited Supply</div>
        </div>
    
          </div>
      </button>
    </div>
  )
}

