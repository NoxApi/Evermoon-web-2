import Header from '../header'
import Image from '../image'
import bg from '../../assets/playandearn/bgs2.png'
import bgm from '../../assets/playandearn/bgs2m.svg'
import evm from '../../assets/playandearn/evm.png'
import footer from '../../assets/home/bottom.svg'

export default function PAED() {
  return (
    <section
      id="Playandearn"
      className="relative bg-bgs2 bg-cover h-[50vw]" 
    >   
        <Image alt='icon' src={evm} className="w-[600px] h-[200px] absolute right-[250px] xlm:right-[-50px] evmanimate mdm:hidden "/> \
        <div className='h-[1080px] mdm:hidden  flex relative mdm:flex-col mdm:items-center '>
        <div className='w-[500px] mdm:hidden '/>
        </div>
    </section>
  )
}