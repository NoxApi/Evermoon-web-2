import Image from '../image'
import topcm from '../../assets/map/topcm.png'
import botcm from '../../assets/map/botcm.png'
import pic1 from '../../assets/map/pic1.png'
import { useState } from 'react'

export default function MapMobile(){
 return(
    <div className='lg:hidden'>
    <Image src={topcm} alt="icon"  className=' w-[100%]'/>
    <Image src={pic1} alt="icon"  className=' w-[100%]'/>
    <Image src={botcm} alt="icon"  className=' w-[100%] absolute bottom-0'/>
    </div>
 )
} 