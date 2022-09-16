import React, { useState } from 'react'
import Image from '../image'
import linkin from "../../assets/team/linkin.png"


const teams = ['t1', 't2', 't3', 't4', 't5', 't6', 't7']

export const Team = () => {
  return (
    <section
      id="Home"
      className="relative  h-[1080px] w-full overflow-hidden bg-bgs5 bg-center" 
    >
      <div className=" mt-20 smm:mt-0 max-w-[1280px] mx-auto font-Josefin text-gold-light text-5xl md:text-6xl text-center relative">
        TEAM
      </div>

      <div className=" mt-20 smm:mt-6 max-w-[1280px] mx-8 smm:mx-[2vw] lg:mx-auto relative">
        <div className="relative lgm:-mt-10 flex flex-wrap justify-evenly pt-12  px-0  gap-y-7 gap-x-8 smm:gap-y-14 smm:gap-x-2">
          {teams.slice(0,4).map((team) => (
            <ImageTeam key={team} path={team} className=""/>
          ))}
        </div>
      </div>
    </section>
  )
}

const ImageTeam = ({
  path,
  className,
}: {
  path: string
  className?: string
}) => {
  const [image, setImage] = useState<StaticImageData | null>(null)

  ;(function (imageName) {
    import(`../../assets/team/${imageName}.png`).then((image) =>
      setImage(image.default)
    )
  })(path)

  return (
    <div className=' h-[500px] xlm:h-[400px]'>
      {image && (
        <Image alt={path} className={`w-[19rem] xlm:w-[16rem] smm:w-[43vw] ${className} -m-3 `} src={image} priority />
      )}
      <div className=' flex justify-between px-[5px] mt-[15px]'>
        <div className='flex flex-col'>
          <a className='text-3xl xlm:text-xl'>Patipol A.</a>
          <a className='text-xl xlm-text-base'>CEO</a>
        </div>
        <div className='flex items-center'>
          <Image alt="" className={`w-[60px] xlm:w-[50px]`} src={linkin} priority />
        </div>
      </div>
    </div>
  )
}
