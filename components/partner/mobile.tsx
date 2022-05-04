import React, { useState } from 'react'
import Image from '../image'

export const PartnerM = () => {
  return (
     <>

      <div className="mt-20 max-w-[420px] mx-auto relative grid grid-cols-6 gap-y-1 gap-x-5 pl-[1.25rem] sm:hidden">
        <div className=' col-span-2  w-[110px] h-[110px] flex justify-center'  >
            <ImagePartner  path={"1"}  w={"110px"} ></ImagePartner>
        </div>
        <div className=' col-span-2  w-[110px]  h-[110px] flex justify-center items-center'  >
            <ImagePartner  path={"2"}  w={"110px"} ></ImagePartner>
        </div>
        <div className=' col-span-2  w-[110px] h-[110px] flex justify-end items-center '  >
            <ImagePartner  path={"3"}  w={"110px"} ></ImagePartner>
        </div>
        <div className=' col-span-3  w-[165px]  h-[110px] flex justify-center items-center '  >
            <ImagePartner  path={"4"}  w={"165px"} ></ImagePartner>
        </div>
        <div className=' col-span-3  w-[165px] h-[110px] flex items-center  '  >
        <ImagePartner  path={"5"}  w={"165px"} ></ImagePartner>
        </div>
        <div className=' col-span-4 w-[220px] h-[110px]  flex items-center'  >
            <ImagePartner  path={"6"}  w={"220px"}  ></ImagePartner>
        </div>
        <div className=' col-span-2 w-[110px] h-[110px] flex justify-end items-center '  >
        <ImagePartner  path={"7"}  w={"110px"}  ></ImagePartner>
        </div>
        <div className=' col-span-4 w-[220px] h-[110px] flex justify-center items-center '  >
            <ImagePartner  path={"8"}  w={"220px"} ></ImagePartner>
        </div>
        <div className=' col-span-2 w-[110px] h-[110px] '  >
            <ImagePartner  path={"9"}  w={"160px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[165px] h-[110px] flex justify-center items-center  '  >
        <ImagePartner  path={"10"}  w={"165px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[165px] h-[110px] flex justify-start items-center '  >
            <ImagePartner  path={"11"}  w={"165px"} ></ImagePartner>
        </div>
        <div className=' col-span-4  w-[220px] h-[110px] flex justify-center items-center '  >
        <ImagePartner  path={"12"}  w={"220px"} ></ImagePartner>
        </div>
        <div className=' col-span-2 w-[110px] h-[110px] flex justify-end items-center '  >
        <ImagePartner  path={"13"}  w={"110px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[165px] h-[110px] flex justify-center items-center '  >
            <ImagePartner  path={"14"}  w={"165px"} ></ImagePartner>
        </div>
        <div className=' col-span-3 w-[165px] h-[110px] flex justify-center items-center  '  >
        <ImagePartner  path={"15"}  w={"165px"} ></ImagePartner>
        </div>
        <div className=' col-span-6 lgm:col-span-7 w-[100%] h-[110px] flex justify-center items-center '  >
        <ImagePartner  path={"16"}  w={"200px"} ></ImagePartner>
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
        <Image alt={path} className={` w-[${w}]  `} src={image} priority />
      )}
    </div>
  )
}