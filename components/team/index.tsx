import React, { useState } from 'react'
import Image from '../image'
import linkin from "../../assets/team/linkin.png"


const teams = [{name:"Patipol A.",path:'t1',role:"CEO",link:"xx"},
              {name:"Tanachot A.",path:'t2',role:"CTO,CFO,SMART CONTRACT & WEB APPLICATION DEVELOPER" ,link:"xx"},
              {name:"Suphitcha L.",path:'t3',role:"CMO" ,link:"xx"},
              {name:"Chonnathan W.",path:'t4',role:"CPO,GAME DIRECTOR,VFX DEVELOPER",link:""}]

export const Team = () => {
  return (
    <section
      id="Team"
      className="relative  h-[1080px] w-full overflow-hidden bg-bgs5 bg-center smm:bg-bgs5m smm:bg-cover bg-[#04032C] smm:h-auto smm:pb-[200px]" 
    >
      <div className=" mt-20 lgm:mt-2 smm:mt-0 max-w-[1280px] mx-auto font-Josefin text-gold-light text-5xl md:text-6xl text-center relative">
        TEAM
      </div>

      <div className=" mt-20  max-w-[1280px] mx-8 smm:mx-[2vw] lg:mx-auto relative  ">
        <div className="relative lgm:-mt-10 flex flex-wrap justify-evenly pt-12  px-0  gap-y-7 gap-x-8 smm:gap-y-1 h-full">
          {teams.slice(0,4).map((team) => (
            <ImageTeam key={team.path} path={team.path} className="" link={team.link} name={team.name} role={team.role}/>
          ))}
        </div>
      </div>
    </section>
  )
}

const ImageTeam = ({
  path,
  name,
  className,
  link,
  role,
}: {
  path: string
  className?: string
  name: string
  role: string
  link?: string
}) => {
  const [image, setImage] = useState<StaticImageData | null>(null)

  ;(function (imageName) {
    import(`../../assets/team/${imageName}.png`).then((image) =>
      setImage(image.default)
    )
  })(path)

  return (
    <div className=' h-[500px] lgm:h-[380px]'>
      {image && (
        <Image alt={path} className={`w-[19rem] xlm:w-[14rem]  ${className} -m-3 `} src={image} priority />
      )}
      <div className=' flex justify-between px-[5px] lg:px-0 mt-[20px]'>
        <div className='flex flex-col w-[180px] xlm:w-[140px]'>
          <a className='text-3xl xlm:text-xl'>{name}</a>
          <a className='text-sm xlm:text-xs text-[#F1E3B5] '>{role}</a>
        </div>
        <div className='flex items-start'>
          {link&&<Image alt="" className={`w-[60px] xlm:w-[50px] mt-[10px]`} src={linkin} priority />}
        </div>
      </div>
    </div>
  )
}
