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
import bgm from '../../assets/bgm.jpg'
import ImageNext from 'next/image'
import JoinProgram from '../../assets/home/joinprogram.svg'
import JoinSale from '../../assets/home/joinsale.svg'
import Whitepaper from '../../assets/home/whitepaper.svg'
import CTA from '../../assets/socials/CTA.svg'
import frameCTA from '../../assets/socials/frameCTA.svg'
import { useState } from 'react'

export default function Home() {
  return (
    <section
      id="Home"
      className="relative bg-white min-h-[844px] h-screen w-full overflow-hidden"
    >
      <video
        className="hidden md:block inset-0 min-h-[844px] h-screen w-full object-cover"
        loop
        autoPlay
        muted
        preload="metadata"
      >
        {/* <source src="/bg-video.webm#t=0.1" type="video/webm" /> */}
        <source src="/banner.mp4#t=0.1" type="video/mp4" />
      </video>

      <div className="absolute inset-0">
        <Header />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center translate-x-72">
        <div className="text-5xlr font-Glamode font-bold text-gold-gradient text-center text-shadow-xl">
          MOBILE MOBA BLOCKCHAIN
        </div>
        <div className="prose-xl font-Josefin text-center text-shadow-xl">
          JOIN OUR UNIVERSE TO BECOME A HERO
        </div>

        <div className="flex flex-col mt-16 items-center w-72 mx-auto">
          <LinkNewTab href="https://docs.google.com/forms/d/e/1FAIpQLSfBJTRBIPUIXd1g_0uadx__KC8x1y8NxD94bvwW_T6LgDbRPA/viewform">
            <Image
              src={JoinProgram}
              alt="JoinProgram"
              className="w-[420px] transition-transform hover:scale-110 duration-500"
            />
          </LinkNewTab>
          <div className="h-7" />
          <LinkNewTab href="https://docs.google.com/forms/d/e/1FAIpQLSf954l5vbU-LZ-VuR_iNPJM-yJCCJiCu3WIn4e4702j7kvDdw/viewform">
            <Image
              src={JoinSale}
              alt="JoinSale"
              className="w-[420px] transition-transform hover:scale-110 duration-500"
            />
          </LinkNewTab>

          <div className="flex mt-6">
            <Image src={AppStore} alt="AppStore" className="w-[150px]" />
            <div className="w-5" />
            <Image src={GooglePlay} alt="GooglePlay" className="w-[150px]" />
          </div>

          <LinkNewTab href="https://docs.evermoon.games/evermoon/">
            <Image
              src={Whitepaper}
              alt="Whitepaper"
              className="w-[300px] mt-6 transition-transform hover:scale-110 duration-500"
            />
          </LinkNewTab>
        </div>
      </div>

      <SocialCTA />
    </section>
  )
}

function SocialCTA() {
  return (
    <div className='group '>
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
