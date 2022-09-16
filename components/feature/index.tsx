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
      className="relative  max-h-[1080px] w-full overflow-hidden bg-center bg-bgs3 h-[700px] flex flex-col justify-center font-Josefin text-[#F1E3B5] " 
    >
      <div className='flex items-start justify-center'>
        <a className=' text-6xl mdm:text-4xl'>FEATURES</a>
     </div>
     <div className='flex justify-center items-center'>
      <div className='grid h-[auto]  relative w-[auto] p-8 mdm:p-2 grid-cols-6 xlm:grid-cols-3 mdm:grid-cols-2 '>
        <div>
        <Image src={f1} alt="icon" className=' w-[220px] mx-[10px] mdm:w-[160px]'/>
        </div>
        <div> 
        <Image src={f1} alt="icon" className=' w-[220px] mx-[10px] mdm:w-[160px]'/></div>
        <div>
        <Image src={f1} alt="icon" className=' w-[220px] mx-[10px] mdm:w-[160px]'/></div>
        <div>
        <Image src={f1} alt="icon" className=' w-[220px] mx-[10px] mdm:w-[160px]'/></div>
        <div>
        <Image src={f1} alt="icon" className=' w-[220px] mx-[10px] mdm:w-[160px]'/></div>
        <div>
        <Image src={f1} alt="icon" className=' w-[220px] mx-[10px] mdm:w-[160px]'/></div>
      </div>
      </div>
    </section>
  )
}
