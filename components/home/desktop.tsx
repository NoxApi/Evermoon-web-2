import Header from '../header'
import Image from '../image'
import JoinButton from '../../assets/join_button.svg'
import JoinOutlineButton from '../../assets/join_outline_button.svg'
import DividerDiamond from '../../assets/divider-diamond.svg'
import GooglePlay from '../../assets/google-play.png'
import AppStore from '../../assets/app-store.png'
import Telegram from '../../assets/socials/telegram.svg'
import Discord from '../../assets/socials/discord.svg'
import Facebook from '../../assets/socials/facebook.svg'
import Twitter from '../../assets/socials/twitter.svg'
import Youtube from '../../assets/socials/youtube.svg'
import LinkNewTab from '../LinkNewTab'
import bg from '../../assets/home/BG.png'
import text1 from '../../assets/home/text1.svg'
import text2 from '../../assets/home/text2.svg'
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
import ImageNext from 'next/image'
import JoinProgram from '../../assets/home/joinprogram.svg'
import JoinSale from '../../assets/home/joinsale.svg'
import Whitepaper from '../../assets/home/whitepaper.svg'
import wp1 from '../../assets/home/WP1.png'
import wp2 from '../../assets/home/wp2.png'
import wp3 from '../../assets/home/wp3.png'
import CTA from '../../assets/socials/CTA.svg'
import frameCTA from '../../assets/socials/frameCTA.svg'
import { useState } from 'react'
import Banner from '../../assets/Banner.png'
import { ModalController } from '../globalmodal'
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
  const [open,setopen] = useState(false)
  return (
    <section
      className="relative  h-[50vw] w-full overflow-hidden bg-bgs1 bg-cover " 
    >
      <ModalController status={open} setStatus={setopen}/>

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
        <div className='md:hidden h-[30vw] flex flex-col justify-start items-center bg-black'>
          <div className='relative'>
            <div onClick={()=>setopen(true)} className="w-[50px]  absolute inset-0 z-20  cursor-pointer translate-x-[170%] translate-y-12 ">
              <Image src={card3}  alt="AppStore" className='' />
            </div>
              <Image src={card1} alt="AppStore" className="w-[220px] absolute " />
              <Image src={card2} alt="AppStore" className="w-[220px] absolute  " />
          </div>
          <a className='pt-[140px] pb-[20px] font-Josefin text-3xl text-[#F1E3B5] font-bold text-shadow-black'>Game Trailer</a>
        </div> 
        
        <div className=' absolute  bottom-0 left-0 z-30 translate-y-[-3vw] translate-x-[4vw] w-[25vw] h-[7vw] '>
          <div className='relative'>
            <div onClick={()=>setopen(true)} className="w-[3.3vw]  absolute inset-0 left-[19%] translate-y-[1.2vw] trailer z-50  cursor-pointer mix-blend-normal hover:mix-blend-luminosity  ">
              <Image src={card3}  alt="AppStore"  />
            </div>
              <Image src={card1} alt="AppStore" className=" absolute top-[-1.5vw] card1 z-20" />
              <Image src={card2} alt="AppStore" className=" absolute top-[-1.5vw] card2 z-30" />
              <Image src={card4} alt="AppStore" className=" absolute inset-0 left-[60%] translate-y-[2vw] trailertext" />
          </div>
        </div>
        <div className=' absolute flex  justify-center w-[100%] items-center h-[5vw] bottom-[0.5vw]   '>
          <Image src={storebg} alt="AppStore" className="w-[12vw] absolute  z-20 " />
          <div className='flex  z-30  cursor-pointer'>
            <div className='w-[11vw]  cursor-pointer  relative store2'>
              <Image src={store2} alt="AppStore" className="absolute inset-0 store2c1" />
              <Image src={store2h} alt="AppStore" className="absolute inset-0  opacity-0 store2c2" />
            </div>
            <div className='w-[11vw]  cursor-pointer   relative store2'>
              <Image src={store1} alt="AppStore" className="absolute inset-0 store2c1" />
              <Image src={store1h} alt="AppStore" className="absolute inset-0  opacity-0 store2c2" />
            </div>
          </div>           
        </div>
        <div className='flex absolute  bottom-0  right-0 translate-y-[-1vw] z-40 translate-x-[-5vw]'>
          <div className='flex z-40'>
            <LinkNewTab href="https://t.me/Evermoon_Community">
                <Image src={s1} alt="q122" className="absolute w-[3vw] mx-[0.5vw]" priority />
                <Image src={s1s} alt="q122" className=" w-[3vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
            </LinkNewTab>
          <LinkNewTab href="https://discord.com/invite/VgtZZwWbuG">
            <Image src={s2} alt="q122" className="absolute w-[3vw] mx-[0.5vw]" priority />
            <Image src={s2s} alt="q122" className=" w-[3vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
          </LinkNewTab>
          </div>
          <div className='flex'>
          <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
            <Image src={s3} alt="q122" className="absolute w-[3vw] mx-[0.5vw]" priority />
            <Image src={s3s} alt="q122" className=" w-[3vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
          </LinkNewTab>
          <LinkNewTab href="https://twitter.com/EverMoon_nft">
            <Image src={s4} alt="q122" className="absolute w-[3vw] mx-[0.5vw]" priority />
            <Image src={s4s} alt="q122" className=" w-[3vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.youtube.com/c/Evermoon">
            <Image src={s5} alt="q122" className="absolute w-[3vw] mx-[0.5vw]" priority />
            <Image src={s5s} alt="q122" className=" w-[3vw] mx-[0.5vw] opacity-0 hover:opacity-100 store2c2" priority />
          </LinkNewTab>
          </div>        
        </div>
      </div>
      <div className='md:hidden'>
        <SocialCTA />
      </div>
       <Image src={footer} alt="banner" className='w-[100%] absolute bottom-0 z-30'/> 
    </section>
  )
}

function SocialCTA() {
  return (
    <div className="group ">
      <Image
        src={CTA}
        alt="cta"
        className="absolute top-1/2 left-0 w-8 -translate-y-1/2 group-hover:translate-x-[3.5rem] transition-transform"
      />
      <div className="absolute top-1/2 left-0 w-14 -translate-y-1/2 -translate-x-[3.5rem] group-hover:translate-x-[0] transition-transform">
        <div className="relative">
          <Image src={frameCTA} alt="frameCTA" className="" />
          <div className="absolute inset-0 flex flex-col justify-evenly py-6 items-center">
            <LinkNewTab href="https://t.me/Evermoon_Community">
              <Image className="w-8" src={Telegram} alt="Telegram" />
            </LinkNewTab>
            <LinkNewTab href="https://discord.com/invite/VgtZZwWbuG">
              <Image className="w-8" src={Discord} alt="Discord" />
            </LinkNewTab>
            <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
              <Image className="w-8" src={Facebook} alt="Facebook" />
            </LinkNewTab>
            <LinkNewTab href="https://twitter.com/EverMoon_nft">
              <Image className="w-8" src={Twitter} alt="Twitter" />
            </LinkNewTab>
            <LinkNewTab href="https://www.youtube.com/channel/UCFxqPU4dTufi07B13w_mMuw/videos">
              <Image className="w-8" src={Youtube} alt="Youtube" />
            </LinkNewTab>
          </div>
        </div>
      </div>
    </div>
  )
}