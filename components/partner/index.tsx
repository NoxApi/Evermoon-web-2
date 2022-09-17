import React, { useState } from 'react'
import Image from '../image'
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
      className="relative  h-[56vw] lgm:h-[197vw] w-full overflow-hidden bg-bgs6 bg-center lgm:bg-bgs6m bg-cover " 
    >
      <Image src={topc} alt="icon" className='z-30 w-[100%] absolute top-0 lgm:hidden'/>
      <Image src={botc} alt="icon" className='z-20 w-[100%] absolute bottom-0 lgm:hidden'/>
      <div className='mx-[5vw] flex justify-center items-start'> 
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
