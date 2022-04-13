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
    </section>
  )
}
