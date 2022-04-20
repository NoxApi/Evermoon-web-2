import React, { useState } from 'react'
import Content from '../../assets/runes/content.svg'
import Arrow from '../../assets/team/arrow.svg'

import ImageNext from 'next/image'
import Image from '../image'

import Light from '../../assets/team/light.svg'

const teams = ['t1', 't2', 't3', 't4', 't5', 't6', 't7']

export const Team = () => {
  return (
    <section className="relative">
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl text-center relative">
        TEAM
      </div>

      <div className="mt-8 max-w-[1024px] mx-auto relative">
        <div className="absolute inset-0">
          <ImageNext
            src={Content}
            alt="Content"
            className=" w-full h-full "
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="absolute top-0 left-0 right-0">
          <Image
            src={Light}
            alt="Light"
            className="w-[450px] -translate-y-1/2 mx-auto"
          />
        </div>

        <div className="pt-14 relative font-Glamode text-4xl text-center">
          MAIN CORE TEAM
        </div>

        <div className="relative mt-10 flex flex-wrap justify-evenly pt-12  px-6 gap-x-2 gap-y-7">
          {teams.map((team) => (
            <ImageTeam key={team} path={team} />
          ))}
        </div>
        <div className="relative flex justify-center pb-12">
          <button className="font-Glamode flex items-center">More <Image src={Arrow} alt='Arrow' className='w-6' /></button>
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
    <div>
      {image && (
        <Image alt={path} className={`w-52 ${className}`} src={image} />
      )}
    </div>
  )
}