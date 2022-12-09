import Header from '../header'
import Image from '../image'
import LinkNewTab from '../LinkNewTab'
import store1 from '../../assets/home/store1.png'
import store2 from '../../assets/home/store2.png'
import store2h from '../../assets/home/store2h.png'
import store1h from '../../assets/home/store1h.png'
import storebg from '../../assets/home/storebg.png'
import card1 from '../../assets/home/card1.png'
import card2 from '../../assets/home/card2.png'
import card3 from '../../assets/home/card3a.svg'
import card3a from '../../assets/home/card3.svg'
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
import s1s from '../../assets/roadmap/s1s.png'
import s2s from '../../assets/roadmap/s2s.png'
import s3s from '../../assets/roadmap/s3s.png'
import s4s from '../../assets/roadmap/s4s.png'
import s5s from '../../assets/roadmap/s5s.png'

export default function HomeD() {
  return (
    <section
      className="relative  h-[50vw] w-full overflow-hidden bg-bgs1 bg-cover " 
    >

      <div className="absolute inset-0">
        <Header />
      </div>
      <div className=" flex flex-col items-center justify-start h-[960px] ">
        <div className="flex flex-col items-center w-[100%]  justify-start h-full ">
          <div className='flex flex-col items-center  relative mt-[38vw] smm:mt-[100px] h-full'  >
            <LinkNewTab href="https://docs.evermoon.games/evermoon/">
              <div className='w-[18vw]  relative  whitepaper cursor-pointer  '>
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
                className=" absolute inset-0   opacity-0  whitepaper3 z-0 mix-blend-screen mt-[-3.11vw] mx-[-1vw] "
              />
              </div>
            </LinkNewTab>
          </div>  
          
        </div>
        
        <div className=' absolute  bottom-0 left-0 z-30 translate-y-[-3vw] translate-x-[4vw] w-[25vw] h-[7vw] '>
          <div className='relative'>
          <LinkNewTab href={'https://www.youtube.com/watch?v=nHP5dS11kKc&ab_channel=Evermoon'} >
            <div className="w-[3.3vw]  inset-0 left-[22%] translate-y-[2.2vw]  z-50  cursor-pointer relative">
              <Image src={card3a}  alt="AppStore" className='absolute w-[3.9vw] opacity-0 hover:opacity-100 z-50' />
              <Image src={card3}  alt="AppStore" className='absolute w-[3.9vw] z-30 opacity-1'  />        
            </div>
          </LinkNewTab>
              <Image src={card1} alt="AppStore" className=" absolute top-[-1vw] w-[15vw] z-20" />
              <Image src={card2} alt="AppStore" className=" absolute top-[-1vw] w-[15vw]  z-30" />
              <Image src={card4} alt="AppStore" className=" absolute inset-0 left-[60%] translate-y-[4vw] w-[8vw]" />
          </div>
        </div>
        <div className=' absolute flex  justify-center w-[100%] items-center h-[5vw] bottom-[0.9vw]   '>
          <Image src={storebg} alt="AppStore" className="w-[12vw] absolute  z-20 " />
          <div className='flex  z-30 '>
            <LinkNewTab href="https://play.google.com/store/apps/details?id=com.ViewPassion.Evermoon">
              <button className='w-[11vw]    relative store2'>
                <Image src={store2} alt="AppStore" className="absolute inset-0 store2c1" />
                <Image src={store2h} alt="AppStore" className="absolute inset-0  opacity-0 store2c2" />
              </button>
            </LinkNewTab>
            <LinkNewTab href="https://testflight.apple.com/join/NnqmneOP">
              <button className='w-[11vw]     relative store2'>
                <Image src={store1} alt="AppStore" className="absolute inset-0 store2c1" />
                <Image src={store1h} alt="AppStore" className="absolute inset-0  opacity-0 store2c2" />
              </button>
            </LinkNewTab>
          </div>           
        </div>
        <div className='flex absolute  bottom-0  right-0 translate-y-[-0.8vw] z-40 translate-x-[-5vw]'>
          <div className='flex z-40'>
            <LinkNewTab href="https://t.me/Evermoon_Community">
                <Image src={s1} alt="q122" className="absolute w-[2.2vw] mx-[0.5vw]" priority />
                <Image src={s1s} alt="q122" className=" w-[2.2vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
            </LinkNewTab>
          <LinkNewTab href="https://discord.com/invite/VgtZZwWbuG">
            <Image src={s2} alt="q122" className="absolute w-[2.2vw] mx-[0.5vw]" priority />
            <Image src={s2s} alt="q122" className=" w-[2.2vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
          </LinkNewTab>
          </div>
          <div className='flex'>
          <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
            <Image src={s3} alt="q122" className="absolute w-[2.2vw] mx-[0.5vw]" priority />
            <Image src={s3s} alt="q122" className=" w-[2.2vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
          </LinkNewTab>
          <LinkNewTab href="https://twitter.com/EverMoon_nft">
            <Image src={s4} alt="q122" className="absolute w-[2.2vw] mx-[0.5vw]" priority />
            <Image src={s4s} alt="q122" className=" w-[2.2vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.youtube.com/c/Evermoon">
            <Image src={s5} alt="q122" className="absolute w-[2.2vw] mx-[0.5vw]" priority />
            <Image src={s5s} alt="q122" className=" w-[2.2vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
          </LinkNewTab>
          </div>        
        </div>
      </div>
       <Image src={footer} alt="banner" className='w-[100%] absolute bottom-0 z-30'/> 
    </section>
  )
}
