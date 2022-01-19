import Image from "../image";
import ImageNext from "next/image";
import BG from "../../assets/bgroadmap.png";
import HeaderBox from "../../assets/header-box.svg";
import m1 from "../../assets/roadmap/m1.png";
import m2 from "../../assets/token/tmoon.png";
import m3 from "../../assets/roadmap/m3.png";
import m4 from "../../assets/roadmap/m4.png";
import m5 from "../../assets/token/tever.png";
import m6 from "../../assets/roadmap/m6.png";
import dash from "../../assets/roadmap/dash.svg";
import droplet from "../../assets/roadmap/droplet.svg"

export default function RoadMap() {
  return (
    <section id="RoadMap" className="relative bg-white  w-full overflow-hidden">
      <div className="absolute inset-0  ">
        <ImageNext
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          src={BG}
          alt="BG"
          priority={true}
        />
      </div>
      <div className="relative w-full">
        <div className="flex h-full flex-col items-center ">
          <div className={"relative z-0 mt-32  mb-10"}>
            <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
              <Image className="" src={HeaderBox} alt="HeaderBox" />
            </div>
            <div className=" mx-14">
              <div className="text-gold-gradient font-tavi text-5xl font-medium ">
                ROADMAP
              </div>
            </div>
          </div>

          <div className="relative mt-16 flex flex-col items-center gap-y-80 pb-8">
            <div className="absolute inset-0 flex flex-col">
              {/* <div className="w-1 h-full mx-auto border-l-2 border-white border-dashed"></div> */}
              <div className="relative h-full  overflow-hidden mt-24 mb-32">
                {/* <Image
                  className="w-[0.2rem] h-full mx-auto bg-repeat-y "
                  src={dash}
                  alt="dash"
                /> */}
                <ImageNext
                  className="w-[0.01rem] h-full mx-auto bg-repeat-y  "
                  width="0.1rem"
                  height="100%"
                  src={dash}
                  alt="dash"
                  layout="fill"
                  // objectFit="contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col">
              {/* <div className="w-1 h-full mx-auto border-l-2 border-white border-dashed"></div> */}
              <div className="relative h-[45rem] -mt-8 ">
                {/* <div className="w-4 h-32 bg-gold-gradient-strong mx-auto rounded-[50%] rounded-tr-none -rotate-45" /> */}
                <Image className="absolute left-0 right-0 droplet w-10 mx-auto" src={droplet} alt="droplet" />
              </div>
            </div>
            <div className="relative">
              <Image className="w-52" src={m1} alt="milestone1" />
              <div className="absolute flex flex-col justify-center top-0 bottom-0 right-0 translate-x-full">
                <div className="font-source font-semibold text-lg text-gold-gradient">
                  MILESTONE 1
                </div>
                <div className="font-source font-semibold text-lg text-white">
                  Q1 / 2022
                </div>
                <div className="font-source text-xs text-white uppercase">
                  game trailer
                  <br /> white paper
                  <br /> communities launching
                  <br /> seed & Private Sale
                </div>
              </div>
            </div>

            <div className="relative">
              <Image className="w-52 p-4" src={m2} alt="milestone1" />
              <div className="absolute flex flex-col justify-center items-end top-0 bottom-0 left-0 -translate-x-full">
                <div className="font-source font-semibold text-lg text-gold-gradient">
                  MILESTONE 2
                </div>
                <div className="font-source font-semibold text-lg text-white">
                  Q2 / 2022
                </div>
                <div className="font-source text-xs text-white uppercase text-right">
                  public sale & TGE
                  <br />
                  Releasing NFT’s Characters
                </div>
              </div>
            </div>

            <div className="relative">
              <Image className="w-52 p-4" src={m3} alt="milestone1" />
              <div className="absolute flex flex-col justify-center top-0 bottom-0 right-0 translate-x-full">
                <div className="font-source font-semibold text-lg text-gold-gradient">
                  MILESTONE 3
                </div>
                <div className="font-source font-semibold text-lg text-white">
                  Q3 / 2022
                </div>
                <div className="font-source text-xs text-white uppercase">
                  NFT PRE-SALE
                  <br />
                  $EVM Staking
                  <br />
                  NFT MarketPLACE
                </div>
              </div>
            </div>

            <div className="relative">
              <Image className="w-52 p-4" src={m4} alt="milestone1" />
              <div className="absolute flex flex-col justify-center items-end top-0 bottom-0 left-0 -translate-x-full">
                <div className="font-source font-semibold text-lg text-gold-gradient">
                  MILESTONE 4
                </div>
                <div className="font-source font-semibold text-lg text-white">
                  Q4 / 2022
                </div>
                <div className="font-source text-xs text-white uppercase text-right">
                  building chalenges
                </div>
              </div>
            </div>

            <div className="relative">
              <Image className="w-52 p-4" src={m5} alt="milestone1" />
              <div className="absolute flex flex-col justify-center top-0 bottom-0 right-0 translate-x-full">
                <div className="font-source font-semibold text-lg text-gold-gradient">
                  MILESTONE 5
                </div>
                <div className="font-source font-semibold text-lg text-white">
                  Q1 / 2023
                </div>
                <div className="font-source text-xs text-white uppercase">
                  beta game launch
                  <br />
                  OFFICIAL LAUNCH
                </div>
              </div>
            </div>

            <div className="relative">
              <Image className="w-52 p-4" src={m6} alt="milestone1" />
              <div className="absolute flex flex-col justify-center items-end top-0 bottom-0 left-0 -translate-x-full">
                <div className="font-source font-semibold text-lg text-gold-gradient">
                  MILESTONE 6
                </div>
                <div className="font-source font-semibold text-lg text-white">
                  Q2 / 2023
                </div>
                <div className="font-source text-xs text-white uppercase text-right">
                  E-Sport Tournament
                  <br />
                  Ranking rewards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
