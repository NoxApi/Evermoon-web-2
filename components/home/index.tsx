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

export default function Home() {
  const [open,setopen] = useState(false)
  return (
    <section
      id="Home"
      className="relative  h-[960px] smm:h-[180vw] w-full overflow-hidden bg-bgs1 smm:bg-bgs1m bg-cover bg-center " 
    >
      <ModalController status={open} setStatus={setopen}/>
      {/* <Image src={bg} alt="Banner" 
        className=" bg-contain"
      /> */}
    

      {/* <div className="md:hidden">
        <Image src={Banner} alt="Banner" className=" h-screen w-full" fill />
      </div> */}

      <div className="absolute inset-0">
        <Header />
      </div>
      <div className=" flex flex-col items-center justify-start h-[960px] smm:h-[180vw] ">
        <div className="flex flex-col items-center w-[100%]  justify-start h-full ">
          <div className='flex flex-col items-center  relative mt-[500px] smm:mt-[100px] h-full'  >
          <Image src={text1} alt="AppStore" className="max-w-[1280px] w-[100vw] mx-[5vw] smm:hidden" />
          <Image src={text2} alt="AppStore" className="max-w-[1280px] w-[100vw] mx-[5vw] sm:hidden" />
            <div className="flex smm:hidden">
              <Image src={div} alt="AppStore" className=" inset-0  w-[400px] mdm:w-[300px] -my-[20px] mix-blend-screen " />
            </div>
            <LinkNewTab href="https://docs.evermoon.games/evermoon/">
              <div className='w-[300px] mdm:w-[200px]  relative  whitepaper cursor-pointer smm:hidden '>
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
                className=" w-[330px] mdm:w-[220px] absolute inset-0 top-[-50px] mdm:top-[-33px] left-[-15px] mdm:left-[-10.5px] opacity-0  whitepaper3 z-0 mix-blend-screen "
              />
              </div>
            </LinkNewTab>
          </div>  
          
        </div>
        <div className='md:hidden h-[250px] flex flex-col justify-start items-center'>
          <div className='relative pr-[210px]'>
            <div onClick={()=>setopen(true)} className="w-[50px]  absolute inset-0 z-20  cursor-pointer translate-x-[170%] translate-y-12 ">
              <Image src={card3}  alt="AppStore" className='' />
            </div>
              <Image src={card1} alt="AppStore" className="w-[220px] absolute " />
              <Image src={card2} alt="AppStore" className="w-[220px] absolute  " />
          </div>
          <a className='pt-[140px] pb-[20px] font-Josefin text-3xl text-[#F1E3B5] font-bold text-shadow-black'>Game Trailer</a>
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
        <div className=' absolute  bottom-0 left-0 z-20 translate-y-[-3vw] xlm:mb-[50px] w-[450px] h-[130px] mdm:hidden  '>
          <div className='relative'>
            <div onClick={()=>setopen(true)} className="w-[65px]  absolute inset-0 left-[19%] translate-y-6 trailer z-20  cursor-pointer mix-blend-luminosity hover:mix-blend-normal  ">
              <Image src={card3}  alt="AppStore"  />
            </div>
              <Image src={card1} alt="AppStore" className="w-[250px] absolute top-[-30px] card1" />
              <Image src={card2} alt="AppStore" className="w-[250px] absolute top-[-30px] card2" />
              <Image src={card4} alt="AppStore" className="w-[170px]  absolute inset-0 left-[60%] translate-y-16 trailertext xlm:hidden" />
          </div>
        </div>
        <div className='flex absolute  bottom-0 mdm:hidden right-0 translate-y-[-2vw] xlm:flex-col xlm:mb-[70px] xlm:right-5 z-30  '>
          <div className='flex xlm:pl-[36px] z-30'>
          <LinkNewTab href="https://t.me/Evermoon_Community">
            <Image src={s1} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>
          <LinkNewTab href="https://discord.com/invite/VgtZZwWbuG">
            <Image src={s2} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>
          </div>
          <div className='flex'>
          <LinkNewTab href="https://www.facebook.com/EvermoonOfficialGameFi">
            <Image src={s3} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>
          <LinkNewTab href="https://twitter.com/EverMoon_nft">
            <Image src={s4} alt="q122" className=" w-12 mx-3" priority />
          </LinkNewTab>
          <LinkNewTab href="https://www.youtube.com/c/Evermoon">
            <Image src={s5} alt="q122" className=" w-12 mx-3" priority />
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
