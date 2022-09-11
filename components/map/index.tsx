import Image from '../image'
import topc from '../../assets/map/topc.png'
import botc from '../../assets/map/botc.png'
import mm from '../../assets/map/minimap.svg'
import FP from '../../assets/map/fullpin.png'
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
import { useState } from 'react'


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

  console.log(v2)
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
  return (
    <section
      id="Home"
      className="relative h-[auto] w-full overflow-hidden bg-center " 
    >
      <div className='z-20 w-[100%] absolute top-0 flex justify-center'>
      <Image src={topc} alt="icon"  className='absolute w-[100%]'/>
      <Image src={topb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo  `+role1} />
      <Image src={jungb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+role2} />
      <Image src={midb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+role3} />
      <Image src={botb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+role4} />
      <Image src={supb} alt="icon" className={`z-30 w-[30vw] pt-[3.5vw] absolute opacity-0 roleo `+role5} />
      </div>




      <div  className='z-30 w-[30vw] absolute top-0 right-0 max-w-[600px]'>
        <div className='w-[100%] h-[100%]'>
        <Image  src={mm} alt="icon" className=''/>
        <div className={`absolute bottom-[11vw] right-[23.05vw] w-[0.5vw]  overflow-hidden  cursor-pointer z-30 flex items-end  pinanimate `+v2}>
        <Image   src={FP} alt="icon" className='w-[1vw]'/>
        </div>
        <div onClick={()=>setv(1)} className={`absolute bottom-[14vw] left-[2.3vw] w-[1.4vw] h-[3vw] overflow-hidden  cursor-pointer z-50 flex items-end  pinactivate `+status1}>
        <Image   src={top} alt="icon" className='w-[7vw] absolute '/>
        </div>
        <div className={`absolute bottom-[14vw] right-[26.75vw] w-[0.5vw] overflow-hidden  cursor-pointer z-40 flex items-end pinanimate `+v1}>
        <Image   src={FP} alt="icon" className='w-[1vw]'/>
        </div>
        <div onClick={()=>setv(2)} className={`absolute bottom-[11vw] left-[6vw] w-[1.4vw] h-[3vw] overflow-hidden  cursor-pointer z-50 flex items-end  pinactivate `+status2}>
        <Image   src={jung} alt="icon" className='w-[7vw] absolute '/>
        </div>

        <div className={`absolute bottom-[12vw] right-[14.56vw] w-[0.5vw] overflow-hidden  cursor-pointer z-40 flex items-end pinanimate `+v3}>
        <Image   src={FP} alt="icon" className='w-[1vw]'/>
        </div>
        <div onClick={()=>setv(3)} className={`absolute bottom-[12vw] left-[14.5vw] w-[1.4vw] h-[3vw] overflow-hidden  cursor-pointer z-50 flex items-end  pinactivate `+status3}>
        <Image   src={mid} alt="icon" className='w-[7vw] absolute '/>
        </div>

        <div className={`absolute bottom-[4vw] right-[11.56vw] w-[0.5vw] overflow-hidden  cursor-pointer z-40 flex items-end pinanimate `+v4}>
        <Image   src={FP} alt="icon" className='w-[1vw]'/>
        </div>
        <div onClick={()=>setv(4)} className={`absolute bottom-[4vw] left-[17.5vw] w-[1.4vw] h-[3vw] overflow-hidden  cursor-pointer z-50 flex items-end  pinactivate `+status4}>
        <Image   src={bot} alt="icon" className='w-[7vw] absolute '/>
        </div>

        <div className={`absolute bottom-[7.1vw] right-[4.56vw] w-[0.5vw] overflow-hidden  cursor-pointer z-40 flex items-end pinanimate `+v5}>
        <Image   src={FP} alt="icon" className='w-[1vw]'/>
        </div>
        <div onClick={()=>setv(5)} className={`absolute bottom-[7vw] left-[24.45vw] w-[1.5vw] h-[3vw] overflow-hidden  cursor-pointer z-50 flex items-end  pinactivate `+status5}>
        <Image   src={sup} alt="icon" className='w-[7vw] absolute '/>
        </div>

        </div>
      </div>
      {videoplay==1&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/benz3.webm#t=0.1" type="video/webm" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}

      {videoplay==2&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         {/* <source src="/bg-video.webm#t=0.1" type="video/webm" /> */}
         <source src="/benz3.webm#t=0.1" type="video/webm" /> 
      </video>}

      {videoplay==3&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/benz3.webm#t=0.1" type="video/webm" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}


      {videoplay==4&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/benz3.webm#t=0.1" type="video/webm" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}

      {videoplay==5&& <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/benz3.webm#t=0.1" type="video/webm" />
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>}

      <Image src={botc} alt="icon" className='z-20 w-[100%] absolute bottom-0'/>
    </section>
  )
}
