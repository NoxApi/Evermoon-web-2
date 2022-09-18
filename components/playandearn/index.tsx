import Header from '../header'
import Image from '../image'
import bg from '../../assets/playandearn/bgs2.png'
import bgm from '../../assets/playandearn/bgs2m.svg'
import evm from '../../assets/playandearn/evm.png'
import footer from '../../assets/home/bottom.svg'

export default function PAR() {
  return (
    <section
      id="Playandearn"
      className="relative  max-h-[1080px] w-full overflow-hidden bg-center mdm:h-[auto]  mdm:bg-bgs2m bg-cover  smm:h-[200vw]" 
    >   
       <Image src={bg} alt="Banner " 
        className=" absolute top-0 h-[1080px]  w-[1920px] right-0 xlm:right-[-300px] mdm:hidden"     
      />
      <Image alt='icon' src={evm} className="w-[600px] h-[200px] absolute right-[250px] xlm:right-[-50px] evmanimate mdm:hidden "/> \
    <div className='h-[1080px] smm:h-[170vw]  flex relative mdm:flex-col mdm:items-center '>
    <div className='h-[600px] w-[300x] smm:h-0'>

    </div>
      <div className='w-[600px] mdm:w-[100vw] h-[700px] z-30 mx-auto mdm:mx-0 xlm:pl-[5vw] my-auto flex flex-col items-start justify-center font-Josefin text-7xl xlm:text-6xl smm:text-5xl smm:justify-end '>
        <div className='flex flex-col w-[600px] mdm:w-[90vw] mdm:max-w-[500px] xlm:w-[400px]'>
          <a className='mt-[10px] '>{"Play & Earn"}</a>
          <a className='mt-[10px]'>{"Free to Earn"}</a>
          <a className='text-3xl xlm:text-2xl smm:text-xl mt-[10px]'>{"Play and have fun along with earning with a 5v5 MOBA three lanes experience, customize the strategy and gameplay of you and your teammates."}</a>
        </div>
      </div>
      <div className='w-[500px] mdm:hidden '/>
    </div>
    </section>
  )
}
