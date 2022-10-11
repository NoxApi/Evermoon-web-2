import Header from '../header'
import Image from '../image'
import LinkNewTab from '../LinkNewTab'
import text1 from '../../assets/home/text1.svg'
import trailer from '../../assets/home/trailer.png'
import div from '../../assets/home/divider.png'
import store1 from '../../assets/home/store1.png'
import store2 from '../../assets/home/store2.png'
import store2h from '../../assets/home/store2h.png'
import store1h from '../../assets/home/store1h.png'
import storebg from '../../assets/home/storebg.png'
import card1 from '../../assets/home/card1.png'
import card2 from '../../assets/home/card2.png'
import card3 from '../../assets/home/card3.png'
import card4 from '../../assets/home/card4.png'
import footer from '../../assets/home/bottom.svg'
import wp1 from '../../assets/home/WP1.png'
import wp2 from '../../assets/home/wp2.png'
import wp3 from '../../assets/home/wp3.png'
import s1 from '../../assets/roadmap/telegram.png'
import s2 from '../../assets/roadmap/discord.png'
import s3 from '../../assets/roadmap/facebook.png'
import s4 from '../../assets/roadmap/twitter.png'
import s5 from '../../assets/roadmap/youtube.png'

export default function Home() {
  return (
    <section
      id="Home"
      className="relative  h-[960px] smm:h-[180vw] w-full overflow-hidden bg-bgs1 lgm:bg-bgs1t smm:bg-bgs1m bg-cover bg-center " 
    >
      <div className="absolute inset-0">
        <Header />
      </div>
      <div className=" flex flex-col items-center justify-start h-[960px] smm:h-[180vw] ">
        <div className="flex flex-col items-center w-[100%]  justify-start h-full ">
          <div className='flex flex-col items-center  relative mt-[500px] smm:mt-[100px] h-full'  >
          <Image src={text1} alt="AppStore" className="max-w-[1280px] w-[100vw] mx-[5vw] smm:hidden" />
            <div className="flex smm:hidden">
              <Image src={div} alt="AppStore" className=" inset-0  w-[400px] lgm:w-[300px] -my-[20px] mix-blend-screen " />
            </div>
            <LinkNewTab href="https://docs.evermoon.games/evermoon/">
              <div className='w-[300px] lgm:w-[200px]  relative  whitepaper cursor-pointer smm:hidden lgm:hidden'>
              <Image
                src={wp1}
                alt="Whitepaper"
                className=" absolute inset-0 whitepaper1"
              />
              <Image
                src={wp2}
                alt="Whitepaper"
                className=" absolute inset-0 opacity-0 whitepaper2"
              />
              <Image
                src={wp3}
                alt="Whitepaper"
                className=" w-[330px] lgm:w-[220px] absolute inset-0 top-[-50px] lgm:top-[-33px] left-[-15px] lgm:left-[-10.5px] opacity-0  whitepaper3 z-0 mix-blend-screen "
              />
              </div>
            </LinkNewTab>
          </div>  
          
        </div>
        <div className='lg:hidden h-[250px] flex flex-col justify-start items-center smm:hidden'>
          <div className='relative pr-[210px]'>
            <LinkNewTab href={'https://www.youtube.com/watch?v=nHP5dS11kKc&ab_channel=Evermoon'} >
              <div className="w-[50px]  absolute inset-0 z-20  cursor-pointer translate-x-[170%] translate-y-12 ">
                <Image src={card3}  alt="AppStore" className='' />
              </div>
            </LinkNewTab>
              <Image src={card1} alt="AppStore" className="w-[220px] absolute " />
              <Image src={card2} alt="AppStore" className="w-[220px] absolute  " />
          </div>
          <a className='pt-[140px] pb-[20px] font-Josefin text-3xl text-[#F1E3B5] font-bold text-shadow-black'>Game Trailer</a>
        </div>


        <div className='sm:hidden h-[30vw] flex flex-col justify-start items-center'>
          <div className='relative'>
            <LinkNewTab href={'https://www.youtube.com/watch?v=nHP5dS11kKc&ab_channel=Evermoon'} >
              <div className="w-[56vw]  inset-0 z-20  cursor-pointer ">
                <Image src={trailer}  alt="AppStore" className='' />
              </div>
            </LinkNewTab>
          </div>
          <div className='flex  mt-[2vw] '>
            <LinkNewTab href="https://t.me/Evermoon_Community">
              <Image src={s1} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
            </LinkNewTab>
            <LinkNewTab href="https://discord.com/invite/VgtZZwWbuG">
              <Image src={s2} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
            </LinkNewTab>
            <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
              <Image src={s3} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
            </LinkNewTab>
            <LinkNewTab href="https://twitter.com/EverMoon_nft">
              <Image src={s4} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
            </LinkNewTab>
            <LinkNewTab href="https://www.youtube.com/c/Evermoon">
              <Image src={s5} alt="q122" className=" w-[7vw] mx-[1vw]" priority />
            </LinkNewTab>       
        </div>
        </div> 

        <div className=' relative flex h-[10%] justify-center w-[100%] items-end pb-[18px] smm:pb-[1vw] '>
          <Image src={storebg} alt="AppStore" className="w-[250px] smm:w-[40vw]  absolute  z-20 " />
          <div className='flex -translate-y-[48px] smm:-translate-y-[10vw] z-30  cursor-pointer'>
            <div className='w-[250px] smm:w-[50vw] cursor-pointer  relative store2'>
              <Image src={store2} alt="AppStore" className="absolute inset-0 store2c1" />
              <Image src={store2h} alt="AppStore" className="absolute inset-0  opacity-0 store2c2" />
            </div>
            <div className='w-[250px] smm:w-[50vw] cursor-pointer   relative store2'>
              <Image src={store1} alt="AppStore" className="absolute inset-0 store2c1" />
              <Image src={store1h} alt="AppStore" className="absolute inset-0  opacity-0 store2c2" />
            </div>
          </div>           
        </div>
        <div className=' absolute  bottom-0 left-0 z-20 translate-y-[-3vw] xlm:mb-[50px] w-[450px] h-[130px] lgm:hidden  '>
          <div className='relative'>
          <LinkNewTab href={'https://www.youtube.com/watch?v=_UpRh3Wgv1M&feature=emb_title&ab_channel=Evermoon'} >
            <div  className="w-[65px]  absolute inset-0 left-[19%] translate-y-6 trailer z-20  cursor-pointer mix-blend-luminosity hover:mix-blend-normal  ">
              <Image src={card3}  alt="AppStore"  />
            </div>
          </LinkNewTab>
              <Image src={card1} alt="AppStore" className="w-[250px] absolute top-[-30px] card1" />
              <Image src={card2} alt="AppStore" className="w-[250px] absolute top-[-30px] card2" />
              <Image src={card4} alt="AppStore" className="w-[170px]  absolute inset-0 left-[60%] translate-y-16 trailertext xlm:hidden" />
          </div>
          
        </div>
       
      </div>
      <div className='lg:hidden'>
      </div>
       <Image src={footer} alt="banner" className='w-[100%] absolute bottom-0 z-30'/> 
    </section>
  )
}

