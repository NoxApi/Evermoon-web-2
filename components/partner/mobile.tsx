import React, { useState } from 'react'
import Image from '../image'
import Link from 'next/link'
export const PartnerM = () => {
  return (
     <>

      <div className="mt-20 w-[80vw] max-w-[900px] mx-auto relative grid grid-cols-6 gap-y-[10vw] gap-x-[3.33vw] px-[3.33vw] lg:hidden  " >
        
        <div className=' col-span-3 w-[35vw] h-[auto] flex justify-center items-center pb-[3vw]'   >
        <Link href={"https://redkite.polkafoundry.com/#/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"11"}  w={"w-[35vw]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-3 w-[35vw] h-[auto] flex justify-center items-center '  >
        <Link href={"https://gamefi.org/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"15"}  w={"w-[35vw]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-4  w-[40vw] h-[auto] flex justify-center items-center  '  >
        <Link href={"http://www.merlionvc.com/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"12"}  w={"w-[40vw]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-2 w-[20vw] h-[auto] flex justify-center items-center  '  >
        <Link href={"https://hydraverse.io/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"13"}  w={"w-[20vw]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        
        <div className=' col-span-4 w-[40vw] h-[auto]  flex items-center'  >
        <Link href={"https://koicapital.com/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"6"}  w={"w-[40vw]"}  ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-2 w-[20vw] h-[auto] flex justify-end items-center '  >
        <Link href={"https://nftb.io/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"7"}  w={"w-[20vw]"}  ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-3 w-[35vw] h-[auto] flex justify-center items-center  '  >
        <Link href={"https://binstarter.io/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"10"}  w={"w-[35vw]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-3  w-[35vw]  h-[auto] flex justify-center items-center '  >
        <Link href={"http://www.abga.asia/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"4"}  w={"w-[35vw]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-4 w-[40vw] h-[auto] flex justify-center items-center '  >
        <Link href={"https://gemguardian.io/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"8"}  w={"w-[40vw]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-2 w-[20vw] h-[auto] flex justify-center items-center '  >
        <Link href={"https://dinoland.io/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"9"}  w={"w-[20vw]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        
        <div className=' col-span-3  w-[100%] h-[auto] flex justify-center items-center '  >
        <Link href={"https://ucapital.vc/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"16"}  w={"w-[35vw]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        
        <div className=' col-span-3  w-[35vw] h-[auto] flex items-center  '  >
        <Link href={"https://www.eizperchain.com/"}>
          <a target="_blank" rel="noopener noreferrer">
        <ImagePartner  path={"5"}  w={"w-[35vw]"} ></ImagePartner>
        </a>
        </Link>
        </div>
        <div className=' col-span-6 w-[100%] h-[auto] flex justify-center items-start pb-[ '  >
        <Link href={"#"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"14"}  w={"w-[70vw]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-2  w-[22.22vw] h-[auto] flex justify-center'  >
        <Link href={"https://www.facebook.com/CryptoCupThailand/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"1"}  w={"w-[22.22vw]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-2  w-[22.22vw]  h-[auto] flex justify-center items-center'  >
        <Link href={"https://twitter.com/AuxiliusLab100x"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"2"}  w={"w-[22.22vw]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        <div className=' col-span-2  w-[22.22vw] h-[auto] flex justify-end items-center '  >
        <Link href={"https://www.facebook.com/neolutionEsport/"}>
          <a target="_blank" rel="noopener noreferrer">
            <ImagePartner  path={"3"}  w={"w-[22.22vw]"} ></ImagePartner>
            </a>
        </Link>
        </div>
        
    </div> 
    </>
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