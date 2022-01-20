import Image from "../image";
import ImageNext from "next/image";
import BG from "../../assets/bgtoken.png";
import HeaderBox from "../../assets/header-box.svg";
import Moon from "../../assets/token/tmoon.png";
import Evermoon from "../../assets/token/tever.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import m1 from "../../assets/token/m1.svg";
import m2 from "../../assets/token/m2.svg";
import m3 from "../../assets/token/m3.svg";
import m4 from "../../assets/token/m4.svg";
import m5 from "../../assets/token/m5.svg";
import e1 from "../../assets/token/e1.svg";
import e2 from "../../assets/token/e2.svg";
import e3 from "../../assets/token/e3.svg";

export default function Token() {
  const [selected, setSelected] = useState(0);

  const tapMoon = () => {
    if (selected === 1) setSelected(0);
    else setSelected(1);
  };
  const tapEverMoon = () => {
    if (selected === 2) setSelected(0);
    else setSelected(2);
  };

  return (
    <section
      id="Token"
      className="relative bg-white h-[70rem] w-full overflow-hidden"
    >
      <div className="relative h-full w-full ">
        <ImageNext
          // width="100%"
          // height="100%"
          layout="fill"
          objectFit="cover"
          src={BG}
          alt="BG"
          priority={true}
        />
      </div>
      <div className="absolute inset-0">
        <div className="flex h-full flex-col items-center pb-8">
          <div className={"relative z-0 mt-32  mb-10"}>
            <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
              <Image className="" src={HeaderBox} alt="HeaderBox" />
            </div>
            <div className=" mx-14">
              <div className="text-gold-gradient font-tavi text-5xl font-medium ">
                Token
              </div>
            </div>
          </div>

          <AnimatePresence>
            <div className="grid grid-cols-[1fr_auto_1fr] mx-auto w-full h-full max-w-7xl">
              <div
                onClick={tapMoon}
                className={
                  "flex flex-col items-center " +
                  (selected === 1 ? "" : "justify-center mb-32 ")
                }
              >
                <motion.div layoutId="moon">
                  <Image className="w-64 cursor-pointer" src={Moon} alt="Moon" priority={true}/>
                </motion.div>
                {selected === 1 && <MoonStoneDetail />}
              </div>
              <div className="w-24 flex flex-col items-center">
                <div
                  // layoutId="dmoon"
                  className={`${
                    selected === 1 ? "scale-x-[12] " : ""
                  } skew-y-[35deg] w-1  origin-left flex-grow-[2] bg-gold-gradient-sm transition-all duration-300`}
                />
                <div className="h-16" />
                <div
                  className={`${
                    selected === 2 ? "scale-x-[12] " : ""
                  } -skew-y-[35deg] w-1 origin-right flex-grow-[3] bg-gold-gradient-sm transition-all duration-300`}
                />
                <div className="h-4" />
              </div>
              <div
                onClick={tapEverMoon}
                className={
                  "flex flex-col items-center " +
                  (selected === 2 ? "" : "justify-center  mb-32")
                }
              >
                <motion.div layoutId="evermoon">
                  <Image className="w-64 cursor-pointer" src={Evermoon} alt="Evermoon" priority={true}/>
                </motion.div>
                {selected === 2 && <EverMoonStoneDetail />}
              </div>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function MoonStoneDetail() {
  return (
    <div>
      <div className="font-tavi text-5xl font-medium text-gold-gradient text-center">
        MOONSTONE
      </div>
      <div className="font-tavi text-2xl text-gold-gradient text-center">
        #MS
      </div>
      <div className="max-w-lg mx-auto mt-8 text-center">
        Core of our moon economy, to the new dimension of NFT games industry
        play and earn. Generate income to reach the dreams for players, players
        can achieve a rewarding experience. Through...
      </div>
      <div className="mt-8 mx-8">
        <SubDetail
          title="1. TOURNAMENT"
          detail=" Join rank, special event and e-sport to earn a lot of special rewards
          from our games."
          src={m1}
        />
        <SubDetail
          title="2. STAKING"
          detail="Use your $MS tokens to earn more profit! Watch it rise in value as $MS inevitably conquers the NF'T game market."
          src={m2}
        />
        <SubDetail
          title="3. BUILDING CHALENGE"
          detail="Burn Heroes, Skins and Shards to gain more valuable rewards."
          src={m3}
        />
        <SubDetail
          title="4. IN GAME PAYMENT"
          detail="Use $MS tokens to buy Heroes, Skins, Shards and Loot boxes gaining new experiences."
          src={m4}
        />
        <SubDetail
          title="5. GOVERNANCE"
          detail="EVERMOON is an economic game powered by $MS and $EVS coins based on earning, staking and spending."
          src={m5}
        />
      </div>
    </div>
  );
}

function EverMoonStoneDetail() {
  return (
    <div>
      <div className="mt-8 font-tavi text-5xl font-medium text-gold-gradient text-center">
        EVERSTONE
      </div>
      <div className="font-tavi text-2xl text-gold-gradient text-center">
        #EVS
      </div>
      <div className="max-w-lg mx-auto mt-8 text-center">
        Everstone, the valuable tokens in the EVERMOON universe, is the token
        that controls the core economy of the game. Allows players to purchase
        loot boxes containing rare skins that cannot be found in the game.
      </div>
      <div className="mt-8 mx-8">
        <SubDetail
          title="1. IN GAME PAYMENT"
          detail="Use $MS tokens to buy Heroes, Skins, Shards and Loot boxes gaining new experiences."
          src={e1}
        />
        <SubDetail
          title="2. BUILDING CHALENGE"
          detail="Burn Heroes, Skins and Shards to gain more valuable rewards."
          src={e2}
        />
        <SubDetail
          title="3. GOVERNANCE"
          detail="EVERMOON is an economic game powered by $MS and $EVS coins based on earning, staking and spending."
          src={e3}
        />
      </div>
    </div>
  );
}
interface SubDetailProps {
  title: string;
  detail: string;
  src: StaticImageData;
}
function SubDetail({ title, detail, src }: SubDetailProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] my-3">
      <Image className="w-16" src={src} alt="m1" />
      <div className="ml-3">
        <div className="font-source font-bold leading-4 text-gold-gradient">
          {title}
        </div>
        <div className="font-source  leading-5">{detail}</div>
      </div>
    </div>
  );
}
