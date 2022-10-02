import React, { useState } from 'react'
import Image from '../image'
import linkin from "../../assets/team/linkin.png"
import Link from 'next/link'


const teams = [{name:"Patipol A.",path:'t1',role:"CEO",link:"www.google.com"},
              {name:"Tanachot A.",path:'t2',role:"CTO,CFO,SMART CONTRACT & WEB APPLICATION DEVELOPER" ,link:"xx"},
              {name:"Suphitcha L.",path:'t3',role:"CMO" ,link:"xx"},
              {name:"Chonnathan W.",path:'t4',role:"CPO,GAME DIRECTOR,VFX DEVELOPER",link:""}]

export const TeamD = () => {
  return (
    <section
      className="relative h-[50vw] w-full overflow-hidden bg-bgs5 bg-cover  bg-[#04032C] " 
    >
      <div className=" mt-[4vw]  mx-auto font-Josefin text-gold-light text-[5vw] text-center relative">
        TEAM
      </div>

      <div className=" mt-[2vw] lg:mx-auto relative  ">
        <div className="relative  flex flex-wrap justify-evenly pt-[2vw] h-full">
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
    <div className=' h-[26vw] lgm:h-[380px]'>
      {image && (
        <Image alt={path} className={`w-[17vw]   ${className}  `} src={image} priority />
      )}
      <div className=' flex justify-between px-[1vw]  mt-[1vw]'>
        <div className='flex flex-col w-[11vw]'>
          <a className='text-[1.6vw] '>{name}</a>
          <a className='text-[0.6vw]  text-[#F1E3B5] '>{role}</a>
        </div>
        <div  className='flex items-start cursor-pointer'>
          {link&&<Link href={link} ><Image alt="" className={`w-[3vw] mt-[0.7vw]`} src={linkin} priority /></Link>}
        </div>
      </div>
    </div>
  )
}