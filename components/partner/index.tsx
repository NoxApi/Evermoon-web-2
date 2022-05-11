import React, { useState } from 'react'
import Image from '../image'
import { PartnerM } from './mobile'
import Link from 'next/link'
import Light from '../../assets/team/light.svg'
import { GoldGradientFrame } from '../frame'

const teams = ['t1', 't2', 't3', 't4', 't5', 't6', 't7']

export const Partner = () => {
  return (
    <section className="relative overflow-hidden mb-[100px]">
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-5xl md:text-6xl text-center relative">
        PARTNERS
      </div>

      <div className="mt-20 max-w-[900px]  mx-auto  relative grid grid-cols-10 gap-y-[20px] gap-x-[75px]  lgm:hidden">
      
        <div className=' col-span-3  w-[225px] lgm:w-[225] h-[150px] flex justify-center items-start pt-[22px]  '  >
        <Link href={"https://redkite.polkafoundry.com/#/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"11"}  w={"w-[225px]"} ></ImagePartner>
          </a>
        </Link>
        </div>
        <div className=' col-span-3 w-[255px] h-[150px] flex justify-center items-center   '  >
          <Link href={"https://gamefi.org/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"15"}  w={"w-[225px]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        
        <div className=' col-span-4 w-[300px] h-[150px] flex justify-center items-center '  >
        <Link href={"https://koicapital.com/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"6"}  w={"w-[300px]"}  ></ImagePartner>
            </a>
        </Link>
        </div>
        


        <div className=' col-span-3 w-[225px] h-[150px] flex justify-end items-center '  >
        <Link href={"https://nftb.io/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"7"}  w={"w-[225px]"}  ></ImagePartner>
        </a>
        </Link>
        </div>
        
        <div className=' col-span-3 lgm:col-span-7 w-[100%] h-[150px] flex justify-end lgm:justify-center items-center '  >
        <Link href={"https://ucapital.vc/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"16"}  w={"w-[225px]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-4 w-[300px] h-[150px] flex justify-center items-center'  >
        <Link href={"#"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"14"}  w={"w-[300px]"} ></ImagePartner>
            </a>
        </Link>
        </div>
       
        
       
        <div className=' col-span-3 w-[225px] h-[150px] flex justify-center items-center  '  >
        <Link href={"https://binstarter.io/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"10"}  w={"w-[225px]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-3 w-[225px] h-[150px] flex justify-center items-center '  >
        <Link href={"https://dinoland.io/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"9"}  w={"w-[200px]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-4 w-[300px] h-[150px] flex justify-center items-center '  >
        <Link href={"https://gemguardian.io/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"8"}  w={"w-[300px]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        

        <div className=' col-span-4 lgm:col-span-4 w-[300px] h-[150px] flex justify-center items-center '  >
        <Link href={"http://www.merlionvc.com/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"12"}  w={"w-[300px]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-2 w-[150px] h-[150px] flex justify-center items-center  '  >
        <Link href={"https://hydraverse.io/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"13"}  w={"w-[150px]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-4 w-[300px] h-[150px] flex justify-center items-center '  >
        <Link href={"http://www.abga.asia/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"4"}  w={"w-[300px]"} ></ImagePartner>
            </a>
        </Link>
        </div>

     

        <div className=' col-span-2  w-[150px] h-[150px] flex justify-center'  >
        <Link href={"https://www.facebook.com/CryptoCupThailand/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"1"}  w={"w-[150px]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-2 lgm:col-span-3 w-[150px] lgm:w-[225px] h-[150px] flex justify-center items-center'  >
        <Link href={"https://twitter.com/AuxiliusLab100x"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"2"}  w={"w-[150px]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-2  w-[150px] h-[150px] flex justify-center items-center '  >
        <Link href={"https://www.facebook.com/neolutionEsport/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"3"}  w={"w-[150px]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-4  w-[300px] h-[150px] flex items-center justify-center  '  >
        <Link href={"https://www.eizperchain.com/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"5"}  w={"w-[300px]"} ></ImagePartner>
        </a>
        </Link>
        </div>
       
        
      </div>
      <PartnerM/>
    </section>
  )
}

const ImagePartner = ({
  path,
  w,
}: {
  path: string
  w?:string
}) => {
  const [image, setImage] = useState<StaticImageData | null>(null)

  ;(function (imageName) {
    import(`../../assets/partner/${imageName}.png`).then((image) =>
      setImage(image.default)
    )
  })(path)

  return (
    <div>
      {image && (      
        <Image alt={path} className={` ${w}  `} src={image} priority />
      )}
    </div>
  )
}
