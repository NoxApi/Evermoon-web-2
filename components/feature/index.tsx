import Header from '../header'
import Image from '../image'
import bg from '../../assets/playandearn/bgs2.png'
import evm from '../../assets/playandearn/evm.png'
import footer from '../../assets/home/bottom.svg'
import f1 from '../../assets/features/f1.svg'


export default function Features() {
  return (
    <section
      id="Home"
      className="relative  max-h-[1080px] w-full overflow-hidden bg-center bg-bgs3 " 
    >
       
    <div className='h-[auto] flex relative'>
      <Image src={f1} alt="icon" className=' w-[250px]'/>
    </div>
    </section>
  )
}
