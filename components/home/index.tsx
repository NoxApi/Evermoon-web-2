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
import WhitePaper from '../../assets/white-paper.svg'
import LinkNewTab from '../LinkNewTab'

export default function Home() {
  return (
    <section
      id="Home"
      className="relative bg-white min-h-[844px] h-screen w-full"
    >
      <video
        className="inset-0 min-h-[844px] h-screen w-full object-cover"
        loop
        autoPlay
        muted
        preload="metadata"
      >
        <source src="/bg-video.webm#t=0.1" type="video/webm" />
        <source src="/bg-video.mp4#t=0.1" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black-gradient" />
      <div className="absolute inset-0">
        <Header />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xlr font-tavi font-bold text-gold-gradient text-center">
          MOBILE MOBA BLOCKCHAIN
        </div>
        <div className="text-2xlr font-tavi text-center">
          JOIN OUR UNIVERSE TO BE A HERO
        </div>

        <div className="flex flex-col mt-16 items-center w-72 mx-auto">
          <a
            className="relative z-0"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfBJTRBIPUIXd1g_0uadx__KC8x1y8NxD94bvwW_T6LgDbRPA/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <div className="font-source font-semibold text-black text-sm w-72 py-4 z-0 text-center">
              JOIN MOONLIGHT PROGRAM
            </div>
            <Image
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10"
              src={JoinButton}
              alt="JoinButton"
            />
          </a>
          <div className="flex my-3 items-center w-72">
            <div className="flex-grow h-[1px] bg-gold-light" />
            <Image
              className="w-4 mx-2"
              src={DividerDiamond}
              alt="DividerDiamond"
            />
            <div className="flex-grow h-[1px] bg-gold-light" />
          </div>
          <a
            className="relative z-0"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf954l5vbU-LZ-VuR_iNPJM-yJCCJiCu3WIn4e4702j7kvDdw/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <div className="font-source font-semibold text-gold-light text-sm w-72 py-4 z-0 text-center">
              Join Stategic Partner & Private Sale
            </div>
            <Image
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10"
              src={JoinOutlineButton}
              alt="JoinOutlineButton"
            />
          </a>
        </div>

        <div className="flex flex-col mt-16 items-center">
          <div className="font-source text-sm">COMING SOON</div>

          <div className="flex my-3 items-center w-72">
            <Image className="flex-grow" src={GooglePlay} alt="GooglePlay" />
            <div className="w-4" />
            <Image className="flex-grow" src={AppStore} alt="AppStore" />
          </div>

          <div className="flex my-3 justify-between w-72">
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

      <LinkNewTab href="https://docs.evermoon.games/evermoon/">
        <Image
          className="absolute bottom-8 md:bottom-12 right-6 md:right-20 w-28 md:w-40 lg:w-52"
          src={WhitePaper}
          alt="WhitePaper"
        />
      </LinkNewTab>
    </section>
  )
}
