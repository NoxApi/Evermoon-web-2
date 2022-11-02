import Image from '../image'
import topc from '../../assets/map/topc.png'
import botc from '../../assets/map/botc.png'
import mm from '../../assets/map/minimap.png'
import pin from '../../assets/map/pin.svg'
import top from '../../public/top.png'
import jung from '../../public/jung.png'
import mid from '../../public/mage.png'
import bot from '../../public/marksman.png'
import sup from '../../public/sup.png'
import supb from '../../assets/map/sup.svg'
import topb from '../../assets/map/top.svg'
import jungb from '../../assets/map/jungle.svg'
import midb from '../../assets/map/mid.svg'
import botb from '../../assets/map/bot.svg'
import MapMobile from './mobile'
import { useEffect, useState } from 'react'


export default function MAP() {
  const [videoplay,setvideoplay]= useState(1)
  function setv(x:any){
    if (x==1){
      setvideoplay(1)
    }
    else if (x==2){
      setvideoplay(2)
    }
    else if (x==3){
      setvideoplay(3)
    }

    else if (x==4){
      setvideoplay(4)
    }

    else if (x==5){
      setvideoplay(5)
    }
  }
  return (
    <section
      id="Map"
      className="relative  w-full overflow-hidden bg-center h-[50vw] lgm:h-auto " 
    >
      <div className='pin2  absolute top-[400px] right-[195px] z-50 invisible' />
      <div className='pin5  absolute top-[400px] right-[195px] z-50 invisible' />
      <div className='pin4  absolute top-[400px] right-[195px] z-50 invisible' />
      <div className='pin3  absolute top-[400px] right-[195px] z-50 invisible' />
      <div className='lgm:hidden'>
      <div className='z-20 w-[100%] absolute top-0 flex justify-center lgm:static'>
      <Image src={topc} alt="icon"  className='absolute w-[100%] lgm:hidden'/>
      <Image src={topb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo  `+(videoplay== 1 ? 'roleactivated' : '')} />
      <Image src={jungb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+(videoplay== 2 ? 'roleactivated' : '')} />
      <Image src={midb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+(videoplay== 3 ? 'roleactivated' : '')} />
      <Image src={botb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+(videoplay== 4 ? 'roleactivated' : '')} />
      <Image src={supb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+(videoplay== 5 ? 'roleactivated' : '')} />
      </div>
      
      <div className='pin3 hidden' />
      <div className='pin4 hidden' />
      <div className='pin5 hidden' />
      <div  className='z-30 w-[500px] 2xlm:w-[400px] xlm:w-[300px] absolute top-0 right-0  lgm:hidden'>
        <div className='w-[100%] h-[100%] relative'>
        <Image  src={mm} alt="icon" className=''/>
        <div onClick={()=>setv(1)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=1&&<Image   src={pin} alt="icon" className='w-[20px] 2xl:w-[27px] xlm:w-[15.5px] absolute top-[65px] right-[303.5px] 2xl:right-[380px] 2xl:top-[94px] z-10 xlm:right-[230px] xlm:top-[50px]'/>}
        </div>
        {videoplay==1&&<div className=' pintop1 absolute top-[5px] right-[225px] 2xl:right-[262px]  xlm:right-[166.7px] xlm:top-[6px]' />}
        
        
        
        
        <div onClick={()=>setv(2)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=2&&<Image   src={pin} alt="icon" className='w-[20px] 2xl:w-[27px] xlm:w-[15.5px] absolute top-[90px] right-[273px] 2xl:right-[328.5px] 2xl:top-[125px] z-10 xlm:right-[198.5px] xlm:top-[79px]'/>}
        </div>
        {videoplay==2&&<div className='pin2  absolute top-[36px] right-[195px] 2xl:right-[210px] xlm:right-[135.4px] xlm:top-[30px]' />}
        
        
        
        
        <div onClick={()=>setv(3)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=3&&<Image   src={pin} alt="icon" className='w-[20px] 2xl:w-[27px] xlm:w-[15.5px] absolute top-[85px] right-[188.5px] 2xl:right-[228.5px] 2xl:top-[90px] z-10 xlm:right-[135px] xlm:top-[60px]'/>}
        </div>
        {videoplay==3&&<div className='pin3  absolute top-[31px] 2xl:top-[5px] right-[110px] xlm:right-[72.5px] xlm:top-[17px] ' />}
        
        
        
        
        
        <div onClick={()=>setv(4)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=4&&<Image   src={pin} alt="icon" className='w-[20px] 2xl:w-[27px] xlm:w-[15.5px] absolute top-[190px] right-[45px] z-10 2xl:right-[85.5px] 2xl:top-[225px] xlm:right-[80px] xlm:top-[85px]'/>}
        </div>
        {videoplay==4&&<div className='pin4  absolute top-[136px] -right-[32.5px] xlm:right-[17.5px] xlm:top-[40px]' />}
        
        
        
        
        
        <div onClick={()=>setv(5)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=5&&<Image   src={pin} alt="icon" className='w-[20px] 2xl:w-[27px] xlm:w-[15.5px] absolute top-[115px] right-[95px] z-10 2xl:right-[135.5px] 2xl:top-[140px] xlm:right-[50px] xlm:top-[137px]'/>}
        </div>
        {videoplay==5&&<div className='pin5  absolute top-[54px] right-[17px] xlm:right-[-13px] xlm:top-[91px]' />}
        
        
        
        
        </div>
      </div>
    
       <video
        className={`w-[100%]  top-0 `+(videoplay== 1 ? '' : 'hidden')}
        loop
        autoPlay
        muted
      >
      
         <source src="/S1.webm#t=0.1" type="video/webm" />
      </video>

     <video
        className={`w-[100%]  top-0 `+(videoplay== 3 ? '' : 'hidden')}
        loop
        autoPlay
        muted
      >
         {/* <source src="/bg-video.webm#t=0.1" type="video/webm" /> */}
         <source src="/S2.webm#t=0.1" type="video/webm" />
      </video>

      <video
        className={`w-[100%]  top-0 `+(videoplay==4 ? '' : 'hidden')}
        loop
        autoPlay
        muted
      >
         <source src="/S3.webm#t=0.1" type="video/webm" />
        {/* <source src="/bonner.webm" type="video/webm" /> */}
      </video>


      <video
        className={`w-[100%]  top-0 `+(videoplay== 2 ? '' : 'hidden')}
        loop
        autoPlay
        muted
      >
         <source src="/S4.webm#t=0.1" type="video/webm" />
        {/* <source src="/bonner.webm" type="video/webm" /> */}
      </video>

      <video
        className={`w-[100%]  top-0 `+(videoplay== 5 ? '' : 'hidden')}
        loop
        autoPlay
        muted
      >
         <source src="/S5.webm#t=0.1" type="video/webm" />
        {/* <source src="/bonner.webm" type="video/webm" /> */}
      </video>

      <Image src={botc} alt="icon" className='z-20 w-[100%] absolute -bottom-2'/>
    </div>
    </section>
  )
}
