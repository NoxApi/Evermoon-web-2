import React, { useState } from 'react'
import Image from '../image'
import { PartnerM } from './mobile'

import Light from '../../assets/team/light.svg'
import { GoldGradientFrame } from '../frame'

const teams = ['t1', 't2', 't3', 't4', 't5', 't6', 't7']

export const Partner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-5xl md:text-6xl text-center relative">
        PARTNERS
      </div>

      <div className="mt-20 max-w-[900px] lgm:max-w-[600px] lgm:mx-auto lgm:px-[auto] mx-auto lg:mx-auto relative grid grid-cols-10 gap-y-6 gap-x-10 mdm:gap-x-1 lgm:grid-cols-7 smm:hidden">
        <div className=' col-span-2  w-[150px] h-[150px] flex justify-center'  >
            <ImagePartner  path={"1"}  w={"150px"} ></ImagePartner>
        </div>
        <div className=' col-span-2 lgm:col-span-3 w-[150px] lgm:w-[225px] h-[150px] flex justify-center items-center'  >
            <ImagePartner  path={"2"}  w={"150px"} ></ImagePartner>
        </div>
        <div className=' col-span-2  w-[150px] h-[150px] flex justify-center items-center '  >
            <ImagePartner  path={"3"}  w={"150px"} ></ImagePartner>
        </div>
        <div className=' col-span-4  w-[320px] lgm:w-[225] h-[150px] flex justify-center items-center '  >
            <ImagePartner  path={"4"}  w={"300px"} ></ImagePartner>
        </div>
        <div className=' col-span-3  w-[225px] h-[150px] flex items-center  '  >
        <ImagePartner  path={"5"}  w={"225px"} ></ImagePartner>
        </div>
        <div className=' col-span-4 w-[375px] h-[150px]  '  >
            <ImagePartner  path={"6"}  w={"330px"}  ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[225px] h-[150px] flex justify-end items-center '  >
        <ImagePartner  path={"7"}  w={"150px"}  ></ImagePartner>
        </div>
        <div className=' col-span-4 w-[300px] h-[150px] flex justify-center items-center '  >
            <ImagePartner  path={"8"}  w={"300px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[225px] h-[150px] '  >
            <ImagePartner  path={"9"}  w={"160px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[225px] h-[150px] flex justify-center items-center  '  >
        <ImagePartner  path={"10"}  w={"225px"} ></ImagePartner>
        </div>
        <div className=' col-span-4 w-[300px] h-[150px] flex justify-start items-center '  >
            <ImagePartner  path={"11"}  w={"300px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 lgm:col-span-4 w-[300px] h-[150px] flex justify-center items-center '  >
        <ImagePartner  path={"12"}  w={"300px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[225px] h-[150px] flex justify-end items-center '  >
        <ImagePartner  path={"13"}  w={"150px"} ></ImagePartner>
        </div>
        <div className=' col-span-4 w-[300px] h-[150px] flex justify-center items-center '  >
            <ImagePartner  path={"14"}  w={"300px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[225px] h-[150px] flex justify-center items-center  '  >
        <ImagePartner  path={"15"}  w={"225px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 lgm:col-span-7 w-[100%] h-[150px] flex justify-end lgm:justify-center items-center '  >
        <ImagePartner  path={"16"}  w={"225px"} ></ImagePartner>
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
        <Image alt={path} className={` w-[${w}]  `} src={image} priority />
      )}
    </div>
  )
}
