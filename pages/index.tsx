import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Image from "../components/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import JoinButton from "../assets/join_button.svg";
import JoinOutlineButton from "../assets/join_outline_button.svg";
import DividerDiamond from "../assets/divider-diamond.svg";
import GooglePlay from "../assets/google-play.png";
import AppStore from "../assets/app-store.png";
import Telegram from "../assets/socials/telegram.svg";
import Discord from "../assets/socials/discord.svg";
import Facebook from "../assets/socials/facebook.svg";
import Twitter from "../assets/socials/twitter.svg";
import Youtube from "../assets/socials/youtube.svg";
import WhitePaper from "../assets/white-paper.svg";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Evermoon</title>
        <meta name="description" content="Evermoon's NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="relative bg-white h-screen w-full">
          <video
            className="inset-0 h-screen w-full object-cover"
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

            <div className="mt-40 text-4xl font-tavi font-bold text-gold-gradient text-center">
              MOBILE MOBA BLOCKCHAIN
            </div>
            <div className="text-xl font-tavi text-center">
              JOIN OUR UNIVERSE TO BE A HERO
            </div>

            <div className="flex flex-col mt-16 items-center w-72 mx-auto">
              <div className="relative z-0">
                <div className="font-source font-semibold text-black text-sm w-72 py-4 z-0 text-center">
                  JOIN MOONLIGHT PROGRAM
                </div>
                <Image
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10"
                  src={JoinButton}
                  alt="JoinButton"
                />
              </div>
              <div className="flex my-3 items-center w-72">
                <div className="flex-grow h-[1px] bg-gold-light" />
                <Image
                  className="w-4 mx-2"
                  src={DividerDiamond}
                  alt="DividerDiamond"
                />
                <div className="flex-grow h-[1px] bg-gold-light" />
              </div>
              <div className="relative z-0">
                <div className="font-source font-semibold text-gold-light text-sm w-72 py-4 z-0 text-center">
                  Join Stategic Partner & Private Sale
                </div>
                <Image
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10"
                  src={JoinOutlineButton}
                  alt="JoinOutlineButton"
                />
              </div>
            </div>

            <div className="flex flex-col mt-16 items-center">
              <div className="font-source text-sm">COMING SOON</div>

              <div className="flex my-3 items-center w-72">
                <Image
                  className="flex-grow"
                  src={GooglePlay}
                  alt="GooglePlay"
                />
                <div className="w-4" />
                <Image className="flex-grow" src={AppStore} alt="AppStore" />
              </div>

              <div className="flex my-3 justify-between w-72">
                <Image className="w-8" src={Telegram} alt="Telegram" />
                <Image className="w-8" src={Discord} alt="Discord" />
                <Image className="w-8" src={Facebook} alt="Facebook" />
                <Image className="w-8" src={Twitter} alt="Twitter" />
                <Image className="w-8" src={Youtube} alt="Youtube" />
              </div>
            </div>
          </div>
          <Image className="absolute bottom-12 right-20 w-52" src={WhitePaper} alt="WhitePaper" />
        </section>
      </main>

      <Footer />
    </Layout>
  );
};

export default Home;
