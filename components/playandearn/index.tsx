import Header from '../header'
import Image from '../image'
import bg from '../../assets/playandearn/bgs2.png'
import evm from '../../assets/playandearn/evm.png'
import footer from '../../assets/home/bottom.svg'

export default function PAR() {
  return (
    <section
      id="Home"
      className="relative  max-h-[1080px] w-full overflow-hidden bg-center " 
    >
       <Image src={bg} alt="Banner  " 
        className=" absolute top-0 h-[1080px]  w-[1920px] right-0"
      /> 
    <div className='h-[1080px] flex relative'>
      <div className='bg-red-300 w-[600px] h-[700px] z-30 mx-auto my-auto flex flex-col items-center justify-center font-Josefin'>
        <div className='flex flex-col w-[370px]'>
        <a className='text-5xl'>{"Play & Earn"}</a>
        <a className='text-5xl'>{"Free to Earn"}</a>
        <a className='text-xl'>{"Play and have fun along with earning with a 5v5 MOBA three lanes experience, customize the strategy and gameplay of you and your teammates."}</a>
        </div>
      </div>
      <div className='w-[500px]'>
        <Image alt='icon' src={evm} className="absolute inset-0 w-[500px] left-[58vw] top-[40vh]"/>
      </div>
    </div>
      <Image src={footer} alt="banner"/> *
    </section>
  )
}
