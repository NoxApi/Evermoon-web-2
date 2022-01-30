import React from 'react'
import Image from '../image'
import left from '../../assets/footer/left.png'
import right from '../../assets/footer/right.png'
import Logo from '../../assets/logo.png'
import LinkNewTab from '../LinkNewTab'
import Telegram from '../../assets/socials/telegram.svg'
import Discord from '../../assets/socials/discord.svg'
import Facebook from '../../assets/socials/facebook.svg'
import Twitter from '../../assets/socials/twitter.svg'
import Youtube from '../../assets/socials/youtube.svg'
import Link from 'next/link'

interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={'relative z-0 ' + className}
      style={{
        background:
          'linear-gradient(180deg, #03091A 0%, #03091A 0.01%, #000000 100%)',
      }}
    >
      <Image
        className="hidden md:block absolute left-0 bottom-0 w-48 -z-10"
        src={left}
        alt="left"
        priority={true}
      />
      <Image
        className="absolute right-0 bottom-0 w-28 md:w-40 -z-10"
        src={right}
        alt="right"
        priority={true}
      />
      <div className="absolute left-0 right-0  max-w-7xl mx-auto px-8 h-[1px] bg-gold opacity-30" />
      <div className="flex flex-col md:flex-row flex-wrap justify-between  lg:max-w-5xl lg:mx-auto py-12 px-8">
        <div className="max-w-[187px] md:max-w-[217px]">
          <Image className="w-full" src={Logo} alt="Logo" priority={true} />
          <div className="font-source text-center">
            NFT multichain MOBA game
          </div>
        </div>
        <div className="w-full max-w-[310px] mt-20 md:mt-0">
          <div className="font-tavi font-semibold text-2xl text-gold-gradient">
            EXPLORE
          </div>
          <div className="mt-4 grid grid-cols-2 gap-y-6 font-source">
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
          <div className="font-tavi font-semibold text-2xl text-gold-gradient">
            COMMUNITY
          </div>
          <div className="mt-4 grid grid-cols-3 gap-y-4">
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
