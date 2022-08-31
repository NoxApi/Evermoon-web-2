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
import text1 from '../../assets/home/text1.png'
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
import wp1 from '../../assets/home/wp1.png'
import wp2 from '../../assets/home/wp2.png'
import wp3 from '../../assets/home/wp3.png'
import CTA from '../../assets/socials/CTA.svg'
import frameCTA from '../../assets/socials/frameCTA.svg'
import { useState } from 'react'
import Banner from '../../assets/Banner.png'
import { ModalController } from '../globalmodal'

export default function Home() {
  const [open,setopen] = useState(false)
  return (
    <section
      id="Home"
      className="relative  max-h-[1080px] w-full overflow-hidden bg-bgs1 bg-center" 
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
      <div className=" flex flex-col items-center justify-start h-[1080px] ">
        <div className="flex flex-col items-center w-[100%] mx-auto h-[80%] justify-center ">
          <div className='flex flex-col items-center  relative mt-[500px] '  >
          <Image src={text1} alt="AppStore" className="max-w-[1280px] w-[100vw]" />
            <div className="flex">
              <Image src={div} alt="AppStore" className=" absolute inset-0 top-[63%] left-[34.5%]  w-[400px]   mix-blend-screen" />
            </div>
            <LinkNewTab href="https://docs.evermoon.games/evermoon/">
              <div className='w-[300px]  mt-[50px] relative  whitepaper cursor-pointer'>
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
                className=" w-[330px] absolute inset-0 top-[-50px] left-[-15px] opacity-0 mix-blend-screen whitepaper3 "
              />
              </div>
            </LinkNewTab>
          </div>  
          
        </div>
        <div className=' relative flex h-[20%] justify-center w-[100%] items-end pb-[18px]'>
          <Image src={storebg} alt="AppStore" className="w-[250px]  absolute  z-20 " />
          <div className='flex -translate-y-[48px] z-30  cursor-pointer'>
            <div className='w-[250px] cursor-pointer  relative store2'>
              <Image src={store2} alt="AppStore" className="absolute inset-0 store2c1" />
              <Image src={store2h} alt="AppStore" className="absolute inset-0  opacity-0 store2c2" />
            </div>
            <div className='w-[250px] cursor-pointer   relative store2'>
              <Image src={store1} alt="AppStore" className="absolute inset-0 store2c1" />
              <Image src={store1h} alt="AppStore" className="absolute inset-0  opacity-0 store2c2" />
            </div>
          </div>
            
          </div>  
        <div className=' absolute  top-[70%] left-0 z-20 translate-y-[4vw] xlm:top-[63%] lgm:top-[60%] lgm:translate-x-[20vw] lgm:mx-auto w-[450px] h-[130px] '>\
          <div className='relative'>
            <div onClick={()=>setopen(true)} className="w-[65px]  absolute inset-0 left-[19%] translate-y-6 trailer z-20  cursor-pointer mix-blend-luminosity hover:mix-blend-normal  ">
              <Image src={card3}  alt="AppStore"  />
            </div>
              <Image src={card1} alt="AppStore" className="w-[250px] absolute top-[-30px] card1" />
              <Image src={card2} alt="AppStore" className="w-[250px] absolute top-[-30px] card2" />
              <Image src={card4} alt="AppStore" className="w-[170px]  absolute inset-0 left-[60%] translate-y-16 trailertext" />
          </div>
        </div>
      </div>

      <SocialCTA />
      {/* <Image src={footer} alt="banner"/> */}
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
