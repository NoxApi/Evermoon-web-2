import Image from '../image'
import topc from '../../assets/map/topc.png'
import botc from '../../assets/map/botc.png'
import mm from '../../assets/map/minimap.svg'
import pin from '../../assets/map/pin.svg'
import top from '../../assets/map/top.png'
import jung from '../../assets/map/jungle.png'
import mid from '../../assets/map/mid.png'
import bot from '../../assets/map/bot.png'
import sup from '../../assets/map/sup.png'
import supb from '../../assets/map/sup.svg'
import topb from '../../assets/map/top.svg'
import jungb from '../../assets/map/jungle.svg'
import midb from '../../assets/map/mid.svg'
import botb from '../../assets/map/bot.svg'
import MapMobile from './mobile'
import { useEffect, useState } from 'react'


export default function MAP() {
  const [videoplay,setvideoplay]= useState(1)
  const [v1,setv1]= useState("h-[8vw]")
  const [v2,setv2]= useState("h-[0vw]")
  const [v3,setv3]= useState("h-[0vw]")
  const [v4,setv4]= useState("h-[0vw]")
  const [v5,setv5]= useState("h-[0vw]")

  const [status1,setstatus1]= useState("activated")
  const [status2,setstatus2]= useState("")
  const [status3,setstatus3]= useState("")
  const [status4,setstatus4]= useState("")
  const [status5,setstatus5]= useState("")

  const [role1,setrole1]= useState("roleactivated")
  const [role2,setrole2]= useState("")
  const [role3,setrole3]= useState("")
  const [role4,setrole4]= useState("")
  const [role5,setrole5]= useState("")

  function setv(x:any){
    setv1("h-[0vw]")
    setv2("h-[0vw]")
    setv3("h-[0vw]")
    setv4("h-[0vw]")
    setv5("h-[0vw]")
    setstatus1("")
    setstatus2("")
    setstatus3("")
    setstatus4("")
    setstatus5("")
    setrole1("")
    setrole2("")
    setrole3("")
    setrole4("")
    setrole5("")
    if (x==1){
      setvideoplay(1)
      setv1("h-[8vw]")
      setstatus1("activated")
      setrole1("roleactivated")
    }
    if (x==2){
      setvideoplay(2)
      setv2("h-[8vw]")
      setstatus2("activated")
      setrole2("roleactivated")
    }
    if (x==3){
      setvideoplay(3)
      setv3("h-[8vw]")
      setstatus3("activated")
      setrole3("roleactivated")
    }

    if (x==4){
      setvideoplay(4)
      setv4("h-[8vw]")
      setstatus4("activated")
      setrole4("roleactivated")
    }

    if (x==5){
      setvideoplay(5)
      setv5("h-[8vw]")
      setstatus5("activated")
      setrole5("roleactivated")
    }
  }

  
  useEffect(() => {
    
  },[])

  return (
    <section
      id="Map"
      className="relative  w-full overflow-hidden bg-center h-[50vw] lgm:h-auto " 
    >
      <div className='lgm:hidden'>
      <div className='z-20 w-[100%] absolute top-0 flex justify-center lgm:static'>
      <Image src={topc} alt="icon"  className='absolute w-[100%] lgm:hidden'/>
      <Image src={topb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo  `+role1} />
      <Image src={jungb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+role2} />
      <Image src={midb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+role3} />
      <Image src={botb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+role4} />
      <Image src={supb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+role5} />
      </div>




      <div  className='z-30 w-[26vw] absolute top-0 right-0  lgm:hidden'>
        <div className='w-[100%] h-[100%] relative'>
        <Image  src={mm} alt="icon" className=''/>
        <div onClick={()=>setv(1)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=1&&<Image   src={pin} alt="icon" className='w-[1vw] absolute top-[4.2vw] right-[19.85vw]'/>}
        </div>
        {videoplay==1&&<div className='pintop absolute top-[0.3vw] right-[15.05vw] ' />}
        <div onClick={()=>setv(3)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=3&&<Image   src={pin} alt="icon" className='w-[1vw] absolute top-[5.8vw] right-[12vw]'/>}
        </div>
        {videoplay==3&&<div className='pintop absolute top-[1.8vw] right-[7.05vw] ' />}
        <div onClick={()=>setv(2)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=2&&<Image   src={pin} alt="icon" className='w-[1vw] absolute top-[7vw] right-[18vw]'/>}
        </div>
        {videoplay==2&&<div className='pintop absolute top-[3.2vw] right-[13.25vw] ' />}
        <div onClick={()=>setv(5)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=5&&<Image   src={pin} alt="icon" className='w-[1vw] absolute top-[7.8vw] right-[6.3vw]'/>}
        </div>
        {videoplay==5&&<div className='pintop absolute top-[4vw] right-[1.45vw] ' />}
        <div onClick={()=>setv(4)} className='w-auto h-auto cursor-pointer'>
        {videoplay!=4&&<Image   src={pin} alt="icon" className='w-[1vw] absolute top-[12.8vw] right-[3.3vw]'/>}
        </div>
        {videoplay==4&&<div className='pintop absolute top-[9vw] right-[-1.5vw] ' />}
        
        
        
        
        </div>
      </div>
    
      {videoplay==1&& <video
        className="w-[100%]  top-0"
        loop
        autoPlay
        muted
      >
      
         <source src="/S1.mp4#t=0.1" type="video/mp4" />
      </video>}

      {videoplay==3&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         {/* <source src="/bg-video.webm#t=0.1" type="video/webm" /> */}
         <source src="/S2.mp4#t=0.1" type="video/mp4" />
      </video>}

      {videoplay==4&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/S3.mp4#t=0.1" type="video/mp4" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}


      {videoplay==2&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/S4.mp4#t=0.1" type="video/mp4" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}

      {videoplay==5&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/S5.mp4#t=0.1" type="video/mp4" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}

      <Image src={botc} alt="icon" className='z-20 w-[100%] absolute -bottom-2'/>
    </div>
    </section>
  )
}
