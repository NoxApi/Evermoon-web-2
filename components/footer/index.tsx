import React from 'react'
import Image from '../image'
import left from '../../assets/footer/left.png'
import right from '../../assets/footer/right.png'
import Logo from '../../assets/logo2.png'
import LinkNewTab from '../LinkNewTab'
import Telegram from '../../assets/socials/telegram.svg'
import Discord from '../../assets/socials/discord.svg'
import Facebook from '../../assets/socials/facebook.svg'
import Twitter from '../../assets/socials/twitter.svg'
import Youtube from '../../assets/socials/youtube.svg'
import Link from 'next/link'
import BG from '../../assets/footer/bg.png'

interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={'relative z-0  ' + className}
      style={{
        background:
          'linear-gradient(180deg, #0B1B37 0%, #07162D 100%, #07162D 100%)',
      }}
    >
      <Image
        src={BG}
        alt="BG"
        className="absolute inset-0 -z-20 mt-32 opacity-40"
        fill
      />

      <Image
        className="absolute right-0 md:left-0 bottom-0 -scale-x-100 md:scale-x-100 w-40 -z-10"
        src={right}
        alt="right"
        priority={true}
      />
      <div className="absolute left-0 right-0  max-w-7xl mx-auto px-8 h-[1px] bg-gold opacity-30" />
      <div className="relative flex flex-col md:flex-row flex-wrap justify-between  lg:max-w-5xl lg:mx-auto py-12 px-8">
        <div className="w-5" />
        <div className="max-w-[217px]">
          <Image className="w-full" src={Logo} alt="Logo" priority={true} />
          <div className="font-Josefin text-center">
            NFT multichain MOBA game
          </div>
        </div>

        <div className="w-full max-w-[110px] mt-20 md:mt-0">
          <div className="font-Glamode text-2xl text-gold-gradient">
            EXPLORE
          </div>
          <div className="mt-4 grid grid-cols-1 gap-y-2 font-Josefin">
            <Link href="/#Home">
              <a>HOME</a>
            </Link>
            <Link href="/#RoadMap">
              <a>ROADMAP</a>
            </Link>
            <Link href="/#Feature">
              <a>ABOUT GAME</a>
            </Link>
            <LinkNewTab href="https://docs.evermoon.games/evermoon/">
              WHITEPAPER
            </LinkNewTab>
          </div>
        </div>

        <div className="max-w-[217px] mt-12 md:mt-0 mb-12 md:mb-0">
          <div className="font-Glamode text-2xl text-gold-gradient">
            COMMUNITY
          </div>
          <div className="max-w-[124px] md:max-w-none mt-4 grid grid-cols-3 md:grid-cols-6 gap-x-12 gap-y-6">
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
    </footer>
  )
}

export default Footer
