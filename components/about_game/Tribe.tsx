import Image from "../image";
import BG from "../../assets/bgtribe.png";
import HeaderBox from "../../assets/header-box.svg";
import LNakamatos from "../../assets/tribe/lnakamatos.png";
import LEthern from "../../assets/tribe/lethern.png";
import LByzan from "../../assets/tribe/lbyzan.png";
import LLunarian from "../../assets/tribe/llunarian.png";
import LSolis from "../../assets/tribe/lsolis.png";
import Nakamatos from "../../assets/tribe/nakamatos.png";
import Ethern from "../../assets/tribe/ethern.png";
import Byzan from "../../assets/tribe/byzan.png";
import Lunarian from "../../assets/tribe/lunarian.png";
import Solis from "../../assets/tribe/solis.png";
import { ArrowLeft, ArrowRight } from "./Arrow";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { title } from "process";

class TribeClass {
  title: string;
  img: StaticImageData;
  logo: StaticImageData;
  element: JSX.Element;

  constructor(
    title: string,
    img: StaticImageData,
    logo: StaticImageData,
    element: JSX.Element
  ) {
    this.title = title;
    this.img = img;
    this.logo = logo;
    this.element = element;
  }
}

const tribes = [
  new TribeClass("Nakamatos", Nakamatos, LNakamatos, TribeNakamatos()),
  new TribeClass("Ethern", Ethern, LEthern, TribeEthern()),
  new TribeClass("Byzan", Byzan, LByzan, TribeByzan()),
  new TribeClass("Solis", Solis, LSolis, TribeSolis()),
  new TribeClass("Lunarian", Lunarian, LLunarian, TribeLunarian()),
];

export default function Tribe() {
  const [tribeIndex, setTribeIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);

  const tribesElement = [...tribes.slice(2), ...tribes.slice(0, 2)];
  const up = () => {
    setTribeIndex(tribeIndex + 1);
  };
  const down = () => {
    setTribeIndex(tribeIndex - 1);
  };

  function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const checkTribeIndex = async () => {
    if (tribeIndex < -5) {
      setIsTransition(false);
      setTribeIndex(0);
      await delay(1);
      setIsTransition(true);
      setTribeIndex(-1);
    }
    if (tribeIndex > 5) {
      setIsTransition(false);
      setTribeIndex(0);
      await delay(1);
      setIsTransition(true);
      setTribeIndex(1);
    }
  };

  useEffect(() => {
    checkTribeIndex();
    return () => {};
  }, [tribeIndex]);

  return (
    <section id="Tribe" className="relative bg-white h-screen w-full ">
      <div className="h-full w-full overflow-hidden">
        <Image className=" " src={BG} alt="BG" />
      </div>
      <div className="absolute inset-0 mx-auto max-w-7xl">
        <div className="flex h-full items-stretch">
          <div className="flex flex-col  pr-8">
            <div className="flex mt-28 mb-10">
              <div className={"relative z-0 "}>
                <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
                  <Image className="" src={HeaderBox} alt="HeaderBox" />
                </div>
                <div className=" mx-20">
                  <div className="text-gold-gradient font-tavi text-5xl font-medium ">
                    TRIBE
                  </div>
                </div>
              </div>
              <div className="ml-12 max-w-lg">
                Evermoon is a planet similar to the Earth, waiting for human to
                arrive. It{"'"}s the best place to begin a new mankind.
              </div>
            </div>

            {
              tribesElement[
                (5 -
                  (tribeIndex < 0 ? (tribeIndex + 10) % 5 : tribeIndex % 5)) %
                  5
              ].element
            }
          </div>
          <Scroller
            up={up}
            down={down}
            isTransition={isTransition}
            tribeIndex={tribeIndex}
          />
        </div>
      </div>
    </section>
  );
}

function TribesLogo() {
  return (
    <>
      {tribes.map((tribe) => (
        <div key={tribe.title}>
          <Image className="w-28 m-4" src={tribe.logo} alt={tribe.title} />
        </div>
      ))}
    </>
  );
}

function TribeNakamatos() {
  return (
    <div className="relative flex h-full items-center">
      <div className="w-[36rem]" />
      <TribeInfo
        title="Nakamatos"
        detail="The first tribe to arrive on the Moon. They are the longest existing
            tribes on the moon which make them acquire many ancient powers.They
            are also known as a sacred tribe."
      />

      <div className="absolute top-0 bottom-0 -left-12 w-[29rem]">
        <Image src={Nakamatos} alt="Nakamatos" />
      </div>
    </div>
  );
}

function TribeEthern() {
  return (
    <div className="relative flex h-full items-center">
      <div className="w-[36rem]" />
      <TribeInfo
        title="Ethern"
        detail="The tribe that evolved from Nakamatos. 
        With their intelligence and smartness, 
        they start a new tribe making them a tribe with high technology."
      />

      <div className="absolute top-0 bottom-0 -left-14 w-[31rem]">
        <Image src={Ethern} alt="Nakamatos" />
      </div>
    </div>
  );
}

function TribeByzan() {
  return (
    <div className="relative flex h-full items-center">
      <div className="w-[36rem]" />
      <TribeInfo
        title="Byzan"
        detail="They have escaped from Ethern since Ethern lacks resources, 
        they have a crowded population, and a very high cost of living. 
        They are good at farming, inventing new tactics, and developing new weapons. They love peace, but when it’s time to fight, they have no hesitation."
      />

      <div className="absolute -top-10 bottom-0 -left-16 w-[35rem]">
        <Image src={Byzan} alt="Byzan" />
      </div>
    </div>
  );
}

function TribeSolis() {
  return (
    <div className="relative flex h-full items-center">
      
      <TribeInfo
        title="Solis"
        detail="They have a very strong bonding with nature. 
          They are connected to water, land, and forest. 
          Their skill is an ability to communicate with nature and animals."
      />
      <div className="w-[36rem]" />

      <div className="absolute top-10 bottom-0 -right-20 w-[42rem]">
        <Image src={Solis} alt="Solis" />
      </div>
    </div>
  );
}

function TribeLunarian() {
  return (
    <div className="relative flex h-full items-center">
      <div className="w-[36rem]" />
      <TribeInfo
        title="Lunarian"
        detail="They migrated from another planet. 
        They have very high-tech weapons and a space-warship. 
        They appearance is very unique comparing to other tribe, 
        since they came from another planet"
      />

      <div className="absolute -top-5 bottom-0 -left-8 w-[34rem]">
        <Image src={Lunarian} alt="Lunarian" />
      </div>
    </div>
  );
}

interface TribeInfoProps {
  title: string;
  detail: string;
}
function TribeInfo({ title, detail }: TribeInfoProps) {
  return (
    <div className="relative mb-56 flex-grow w-full  z-0">
      <div className="mx-24 mt-16 mb-32">
        <div className="font-tavi text-6xl text-gold-gradient">{title}</div>
        <div className="mt-8 font-source text-lg">{detail}</div>
      </div>
      <div className="absolute inset-0 bg-bluegreen-gradient -z-10 -skew-x-6" />
    </div>
  );
}

interface ScrollerProps {
  up: () => void;
  down: () => void;
  isTransition: boolean;
  tribeIndex: number;
}

function Scroller({ up, down, isTransition, tribeIndex }: ScrollerProps) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-6 rotate-90 z-10" onClick={up}>
        <ArrowLeft />
      </div>
      <div className="relative  rounded-[50px]  bg-black/10 overflow-hidden">
        <div
          className={isTransition ? "transition-transform" : ""}
          style={{ transform: `translateY(${tribeIndex * 20}%)` }}
        >
          <TribesLogo />
        </div>
        <div
          className={
            "absolute inset-0 " + (isTransition ? "transition-transform" : "")
          }
          style={{ transform: `translateY(${tribeIndex * 20 + 100}%)` }}
        >
          <TribesLogo />
        </div>
        <div
          className={
            "absolute inset-0 " + (isTransition ? "transition-transform" : "")
          }
          style={{ transform: `translateY(${tribeIndex * 20 - 100}%)` }}
        >
          <TribesLogo />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="w-32 h-32 mx-auto   rounded-full border-2 border-gold-light hole"></div>
        </div>
      </div>
      <div className="w-6 rotate-90 z-10" onClick={down}>
        <ArrowRight />
      </div>
    </div>
  );
}
