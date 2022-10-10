import Image from '../image'
import topcm from '../../assets/map/topcm.svg'
import botcm from '../../assets/map/botcm.png'
import pic1 from '../../assets/map/pic1.png'
import pic2 from '../../assets/map/pic2.png'
import supb from '../../assets/map/sup.svg'
import topb from '../../assets/map/top.svg'
import jungb from '../../assets/map/jungle.svg'
import midb from '../../assets/map/mid.svg'
import botb from '../../assets/map/bot.svg'
import left from '../../assets/map/left.svg'
import right from '../../assets/map/right.svg'
import light from '../../assets/map/light.svg'
import lights from '../../assets/map/lights.svg'
import { useEffect, useState } from 'react'

export default function MapMobile(){
   const [lane,setlane] = useState(1)
   
 return(
   <section
      id="Map"
      className="relative  w-full overflow-hidden bg-center h-[50vw] lgm:h-auto " 
    >
    <div className='lg:hidden font-Josefin'>
   <div className='h-[58.4vw] relative'>
    <Image src={topcm} alt="icon"  className=' w-[100%] absolute z-[-10]'/>
    <div className='w-[100vw] h-[32vw]  flex items-end'>
      <div className='w-[100vw] h-[7vw]  flex items-center px-[7vw]'>
         <div onClick={()=>setlane(1)} className='flex items-center w-[19vw]  h-[7vw] cursor-pointer'>
            <Image src={lights} alt="icon"  className={` w-[13vw] mb-[0.3vw] ml-[3vw]  opacity-0 roleo absolute z-10 `+(lane== 1 ? 'roleactivated' : '')}/>
            <Image src={light} alt="icon"  className={` w-[15vw] mb-[0.3vw] ml-[2.5vw]  opacity-100 roleo absolute -z-10 `}/>
            <a className='ml-[5.5vw] text-[2vw] z-20 text-[#F1E3B5]'> Top Lane</a>
         </div>
         <div onClick={()=>setlane(2)} className='flex items-center w-[20vw]  h-[7vw] cursor-pointer'>
            <Image src={lights} alt="icon"  className={` w-[13vw] mb-[0.3vw] ml-[3.5vw]  opacity-0 roleo absolute z-10 `+(lane== 2 ? 'roleactivated' : '')}/>
            <Image src={light} alt="icon"  className={` w-[15vw] mb-[0.3vw] ml-[2.5vw]  opacity-100 roleo absolute -z-10 `}/>
            <a className='ml-[5.5vw] text-[2vw] z-20 text-[#F1E3B5]'> Mid Lane</a>
         </div>
         <div onClick={()=>setlane(3)} className='flex items-center w-[21vw]  h-[7vw] cursor-pointer'>
            <Image src={lights} alt="icon"  className={` w-[13vw] mb-[0.3vw] ml-[3.5vw]  opacity-0 roleo absolute z-10 `+(lane== 3 ? 'roleactivated' : '')}/>
            <Image src={light} alt="icon"  className={` w-[15vw] mb-[0.3vw] ml-[2.5vw]  opacity-100 roleo absolute -z-10 `}/>
            <a className='ml-[5.5vw] text-[2vw] z-20 text-[#F1E3B5]'> Bottom Lane</a>
         </div>
         <div onClick={()=>setlane(4)} className='flex items-center w-[18.5vw]  h-[7vw] cursor-pointer'>
            <Image src={lights} alt="icon"  className={` w-[13vw] mb-[0.3vw] ml-[3.5vw]  opacity-0 roleo absolute z-10 `+(lane== 4 ? 'roleactivated' : '')}/>
            <Image src={light} alt="icon"  className={` w-[15vw] mb-[0.3vw] ml-[2.5vw]  opacity-100 roleo absolute -z-10 `}/>
            <a className='ml-[5.5vw] text-[2vw] z-20 text-[#F1E3B5]'> Jungle</a>
         </div>
         <div onClick={()=>setlane(5)} className='flex items-center w-[17vw]  h-[7vw] cursor-pointer'>
            <Image src={lights} alt="icon"  className={` w-[13vw] mb-[0.3vw] ml-[3vw]  opacity-0 roleo absolute z-10 `+(lane== 5 ? 'roleactivated' : '')}/>
            <Image src={light} alt="icon"  className={` w-[15vw] mb-[0.3vw] ml-[2.5vw]  opacity-100 roleo absolute -z-10 `}/>
            <a className='ml-[5.5vw] text-[2vw] z-20 text-[#F1E3B5]'> Support</a>
         </div>
      </div>
    </div>
      <Image src={topb} alt="icon" className={`z-30 w-[84.4vw] pt-[1.7vw] left-[7.8vw] absolute opacity-0 roleo `+(lane== 1 ? 'roleactivated' : '')} />
      <Image src={midb} alt="icon" className={`z-30 w-[84.4vw] pt-[1.7vw] left-[7.8vw] absolute opacity-0 roleo `+(lane== 2 ? 'roleactivated' : '')} />
      <Image src={botb} alt="icon" className={`z-30 w-[84.4vw] pt-[1.7vw] left-[7.8vw] absolute opacity-0 roleo `+(lane== 3 ? 'roleactivated' : '')} />
      <Image src={jungb} alt="icon" className={`z-30 w-[84.4vw] pt-[1.7vw] left-[7.8vw] absolute opacity-0 roleo `+(lane== 4 ? 'roleactivated' : '')} />
      <Image src={supb} alt="icon" className={`z-30 w-[84.4vw] pt-[1.7vw] left-[7.8vw] absolute opacity-0 roleo `+(lane== 5 ? 'roleactivated' : '')} />
   </div>
   <div className='h-[98vw] flex items-start mt-[-2vw]'>
   {lane==1&& <video
        className="w-[100%]  top-0 -z-10"
        loop
        autoPlay
        muted
      >
      
         <source src="/S1M.mp4#t=0.1" type="video/mp4" />
      </video>}

      {lane==2&& <video
        className="w-[100%] right-0 mt-[-2vw]" 
        loop
        autoPlay
        muted
      >
         {/* <source src="/bg-video.mp4#t=0.1" type="video/mp4" /> */}
         <source src="/S2M.mp4#t=0.1" type="video/mp4" />
      </video>}

      {lane==3&& <video
        className="w-[100%] right-0 mt-[-2vw]"
        loop
        autoPlay
        muted
      >
         <source src="/S3M.mp4#t=0.1" type="video/mp4" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}


      {lane==4&& <video
        className="w-[100%] right-0 mt-[-2vw]"
        loop
        autoPlay
        muted
      >
         <source src="/S4M.mp4#t=0.1" type="video/mp4" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}

      {lane==5&& <video
        className="w-[100%] right-0 mt-[-2vw]"
        loop
        autoPlay
        muted
      >
         <source src="/S5M.mp4#t=0.1" type="video/mp4" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}
    <div className='flex justify-between w-full px-[3vw] mt-[30vw] absolute'>
      <div>
      {lane!=1&&<div onClick={()=>setlane(lane-1)}>
         <Image src={left} alt="icon"  className={`w-[8vw]`}/>
      </div>}
      </div>
      <div>
      {lane!=5&&<div onClick={()=>setlane(lane+1)}>
         <Image src={right} alt="icon"  className={`w-[8vw]`}/>
      </div>}
      </div>
    </div>
   </div>
    <Image src={botcm} alt="icon"  className=' w-[100%] absolute bottom-0 z-100'/>
    </div>
    </section>
 )
} 