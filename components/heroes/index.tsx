
import Image from '../image'
import topc from '../../assets/heroes/topc.png'
import botc from '../../assets/heroes/botc.png'
import mm from '../../assets/map/minimap.svg'
import h1 from '../../assets/heroes/h1.png'


export default function Heroes() {
  return (
    <section
      id="Home"
      className="relative h-[1080px] w-full overflow-hidden bg-center " 
    >
      <Image src={topc} alt="icon" className='z-30 w-[100%] absolute top-0'/>
      <Image src={mm} alt="icon" className='z-20 w-[30vw] absolute top-0 right-0'/>
      <Image src={h1} alt="icon" className='z-20 w-[1920px] absolute top-0 right-0'/>
      <Image src={botc} alt="icon" className='z-20 w-[100%] absolute bottom-0'/>
    </section>
  )
}