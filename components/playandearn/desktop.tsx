import Header from '../header'
import Image from '../image'
import bg from '../../assets/playandearn/bgs2.png'
import bgm from '../../assets/playandearn/bgs2m.svg'
import evm from '../../assets/playandearn/evm.png'
import footer from '../../assets/home/bottom.svg'

export default function PAED() {
  return (
    <section
      className="relative bg-bgs2 bg-cover h-[50vw]" 
    >   
        <Image alt='icon' src={evm} className="w-[31vw] absolute right-[13vw] evmanimate  "/> \
    </section>
  )
}