import Image from '../image'
import topc from '../../assets/map/topc.png'
import botc from '../../assets/map/botc.png'
import mm from '../../assets/map/minimap.svg'


export default function MAP() {
  return (
    <section
      id="Home"
      className="relative h-[auto] w-full overflow-hidden bg-center " 
    >
      <Image src={topc} alt="icon" className='z-20 w-[100%] absolute top-0'/>
      <Image src={mm} alt="icon" className='z-20 w-[30vw] absolute top-0 right-0'/>
       <video
        className="w-[100%] right-0"
        loop
        autoPlay
        muted
      >
         <source src="/benz3.webm#t=0.1" type="video/webm" /> 
        {/* <source src="/bonner.mp4" type="video/mp4" /> */}
      </video>
      <Image src={botc} alt="icon" className='z-20 w-[100%] absolute bottom-0'/>
    </section>
  )
}
