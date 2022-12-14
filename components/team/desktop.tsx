import React, { useState } from 'react'
import Image from '../image'
import linkin from "../../assets/team/linkin.png"
import LinkNewTab from '../LinkNewTab'
import frameCTA from '../../assets/socials/frameCTA.svg'
import CTA from '../../assets/team/cta.png'
import T1 from '../../assets/team/t5.png'

const teams = [{name:"Patipol A.",path:'t1',role:"CEO",link:"https://www.linkedin.com/in/patipol-anantarattana-007502214"},
                {name:"Tanachot A.",path:'t2',role:"CTO,CFO,SMART CONTRACT & WEB APPLICATION DEVELOPER" ,link:"https://www.linkedin.com/in/tanachot"},
                {name:"Suphitcha L.",path:'t3',role:"CMO" ,link:"https://www.linkedin.com/in/suphitcha-latthikul-494588160"},
                {name:"Chonnathan W.",path:'t4',role:"CPO,GAME DIRECTOR,VFX DEVELOPER",link:""}]
                export const TeamD = () => {
                  return (
    <section
      className="relative h-[50vw]  overflow-hidden bg-bgs5 bg-cover  bg-[#04032C] " 
    >
      <ACTA/>
      <div className=" mt-[4vw]  mx-auto font-Josefin text-gold-light text-[5vw] text-center relative">
        TEAM
      </div>

      <div className=" mt-[2vw] lg:mx-auto relative w-[80%] mx-auto ">
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
      <div className=' flex justify-between px-[1vw]  mt-[1vw] '>
        <div className='flex flex-col w-[12vw] '>
          <a className='text-[1.6vw] font-Josefin '>{name}</a>
          <a className='text-[0.6vw]  text-[#F1E3B5] font-Josefin '>{role}</a>
        </div>
        <div  className='flex items-start cursor-pointer'>
          {link&&<LinkNewTab href={link}><Image alt="" className={`w-[3vw] mt-[0.7vw]`} src={linkin} priority /></LinkNewTab>}
        </div>
      </div>
    </div>
  )
}

function ACTA() {
  return (
    <div className="group ">
      <Image
        src={CTA}
        alt="cta"
        className="absolute top-1/2 left-0 w-[3vw] -translate-y-1/2 group-hover:translate-x-[22vw] transition-transform z-50"
      />
      <div className="absolute top-1/2 left-0 w-14 -translate-y-[12.3vw] -translate-x-[22vw] group-hover:translate-x-[0] transition-transform z-50">
        <div className="relative">
        <div className=' h-[26vw] lgm:h-[380px]'>
        <Image alt={""} className={`w-[22vw]`} src={T1} priority />
      <div className=' flex justify-between px-[1vw]  mt-[1vw] '>
      </div>
    </div>
          <div className="absolute inset-0 flex flex-col justify-evenly py-6 items-center">
          </div>
        </div>
      </div>
    </div>
  )
}