import React, { useState } from 'react'
import Image from '../image'
import { PartnerM } from './mobile'
import Link from 'next/link'
import topc from '../../assets/heroes/topc.png'
import botc from '../../assets/heroes/botc.png'
import all from '../../assets/partner/all.svg'
import h1 from '../../assets/heroes/h1.png'

const teams = ['t1', 't2', 't3', 't4', 't5', 't6', 't7']

export const Partner = () => {
  return (
    <section
      id="Home"
      className="relative  h-[auto] w-full overflow-hidden bg-bgs6 bg-center " 
    >
      <Image src={topc} alt="icon" className='z-30 w-[100%] absolute top-0'/>
      <Image src={botc} alt="icon" className='z-20 w-[100%] absolute bottom-0'/>
      <div className="mt-36 mb-12 max-w-[1024px] mx-auto font-Josefin text-gold-light text-4xl md:text-7xl text-center ">
        PARTNERS
      </div>
      <div className='mx-[5vw] flex justify-center items-start'> 
      <Image src={all} alt="icon" className=' w-[90%] mb-36'/>
      </div>
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
