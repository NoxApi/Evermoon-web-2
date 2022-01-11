import Image from "../image";
import BG from "../../assets/bg.png";
import HeaderBox from "../../assets/header-box.svg";
import LearnMoreBox from "../../assets/learnmore-box.svg";
import YouTube from "react-youtube";
import NFTHero from "../../assets/feature/nft-hero.png";
import MarketPlace from "../../assets/feature/market-place.png";
import FreeToPlay from "../../assets/feature/free-to-play.png";
import Staking from "../../assets/feature/staking.png";
import BuildingChallenge from "../../assets/feature/building-challenge.png";
import SubFeature from "./SubFeature";

export default function Feature() {
  return (
    <section id="Feature" className="relative bg-white h-screen w-full">
      <div className="h-full w-full overflow-hidden">
        <Image className=" " src={BG} alt="BG" />
      </div>
      <div className="absolute inset-0">
        <div className="flex flex-col items-center">
          <div className={"relative z-0 mt-32  mb-10"}>
            <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
              <Image className="" src={HeaderBox} alt="HeaderBox" />
            </div>
            <div className=" mx-10">
              <div className="text-gold-gradient font-tavi text-5xl font-medium ">
                FEATURES
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-16">
            <div className="flex flex-col mt-8 items-center">
              <YouTube videoId="piZkiA-mLx8" />
              <div className={"relative z-0 mt-16"}>
                <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
                  <Image className="" src={LearnMoreBox} alt="LearnMoreBox" />
                </div>
                <div className=" mx-10">
                  <div className="font-tavi font-medium text-2xl">
                    LEARN MORE
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-20 flex flex-col">
              <SubFeature
                src={NFTHero}
                title={[`NFT HEROES`, <br key={""} />, `/SKINS`]}
                detail="Heroes and skins are stored securely on the Binance Smart Chain."
              />
              <SubFeature
                src={MarketPlace}
                title={"Market Place"}
                detail="Trade heroes, skins, shards and loot boxes."
                imgWidth="w-16"
              />
              <SubFeature
                src={FreeToPlay}
                title={[`MOBA Free`, <br key={""} />, `to play`]}
                detail="Battle in the Everfield to earn $EVS while playing."
                imgWidth="w-20"
              />
              <SubFeature
                src={Staking}
                title={"Staking"}
                detail="Increase your $MS token yields by holding $EVS."
                imgWidth="w-28"
              />
              <SubFeature
                src={BuildingChallenge}
                title={"Building Challenge"}
                detail="Assimilate heroes and skins to earn new valuable resources."
                imgWidth="w-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
