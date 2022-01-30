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
import eclipseb from "../../assets/token/eclipseb.svg";
import eclipses from "../../assets/token/eclipses.svg";
const spring = {
  type: "spring",
  damping: 25,
  stiffness: 150,
};
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
      className="relative  md:h-[75rem] w-full overflow-hidden"
    >
      {/* <div className="relative h-full w-full ">
        <ImageNext
          // width="100%"
          // height="100%"
          layout="fill"
          objectFit="cover"
          src={BG}
          alt="BG"
          priority={true}
        />
      </div> */}
      <div className="h-full">
        <div className="flex h-full flex-col items-center pb-8">
          <div className={"relative z-0 mt-32  mb-10"}>
            <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
              <Image className="" src={HeaderBox} alt="HeaderBox" />
            </div>
            <div className=" mx-14">
              <div className="text-gold-gradient font-tavi text-3xl md:text-5xl font-medium ">
                Token
              </div>
            </div>
          </div>

          <AnimatePresence>
            <div className="md:grid md:grid-cols-[1fr_auto_1fr] mx-auto w-full h-full max-w-7xl px-3">
              <div
                onClick={tapMoon}
                className={
                  "flex flex-col items-center " +
                  (selected === 1 ? "" : "justify-center md:mb-32 ")
                }
              >
                <div className="relative">
                  <div className="hidden md:block">
                    {selected === 1 && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Image
                          className="w-72 cursor-pointer"
                          src={eclipses}
                          alt="eclipses"
                          priority={true}
                        />
                      </motion.div>
                    )}
                    {selected === 1 && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Image
                          className="w-72 p-7 cursor-pointer"
                          src={eclipseb}
                          alt="eclipseb"
                          priority={true}
                        />
                      </motion.div>
                    )}
                  </div>
                  <div className="md:hidden">
                    <div className="absolute inset-0">
                      <Image
                        className="w-48 cursor-pointer"
                        src={eclipses}
                        alt="eclipses"
                        priority={true}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <Image
                        className="w-48 p-7 cursor-pointer"
                        src={eclipseb}
                        alt="eclipseb"
                        priority={true}
                      />
                    </div>
                  </div>
                  <motion.div transition={spring} layoutId="moon">
                    <Image
                      className="w-48 md:w-72 p-10 cursor-pointer"
                      src={Moon}
                      alt="Moon"
                      priority={true}
                    />
                  </motion.div>
                </div>
                <div className="hidden md:block">
                  {selected === 1 && <EvermoonDetail />}
                </div>
                <div className="md:hidden">
                  <EvermoonDetail />
                </div>
              </div>
              <div className="hidden w-24 md:flex flex-col items-center mb-8">
                <div className="flex-grow-[2] relative">
                  <div
                    // layoutId="dmoon"
                    className={`${
                      selected === 1 ? "w-12 " : "w-1 "
                    } skew-y-[35deg]   origin-left  bg-gold-gradient-sm absolute top-0 bottom-0 h-full left-1/2 -translate-x-[1px]  transition-all duration-300`}
                  />
                </div>
                <div className="h-16" />
                <div className="flex-grow-[3] relative">
                  <div
                    className={`${
                      selected === 2 ? "w-12 " : "w-1"
                    } -skew-y-[35deg]  origin-right  bg-gold-gradient-sm absolute top-0 bottom-0 h-full right-1/2 translate-x-[1px] transition-all duration-300`}
                  />
                </div>
                <div className="h-4" />
              </div>
              <div
                onClick={tapEverMoon}
                className={
                  "flex flex-col items-center " +
                  (selected === 2 ? "" : "justify-center  md:mb-32")
                }
              >
                <div className="relative">
                  <div className="hidden md:block">
                    {selected === 2 && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Image
                          className="w-72 cursor-pointer"
                          src={eclipses}
                          alt="eclipses"
                          priority={true}
                        />
                      </motion.div>
                    )}
                    {selected === 2 && (
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Image
                          className="w-72 p-7 cursor-pointer"
                          src={eclipseb}
                          alt="eclipseb"
                          priority={true}
                        />
                      </motion.div>
                    )}
                  </div>
                  <div className="md:hidden">
                    <div className="absolute inset-0">
                      <Image
                        className="w-48 cursor-pointer"
                        src={eclipses}
                        alt="eclipses"
                        priority={true}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <Image
                        className="w-48 p-7 cursor-pointer"
                        src={eclipseb}
                        alt="eclipseb"
                        priority={true}
                      />
                    </div>
                  </div>
                  <motion.div transition={spring} layoutId="evermoon">
                    <Image
                      className="w-48 md:w-72 p-12 cursor-pointer"
                      src={Evermoon}
                      alt="Evermoon"
                      priority={true}
                    />
                  </motion.div>
                </div>
                <div className="hidden md:block">
                  {selected === 2 && <EverMoonStoneDetail />}
                </div>
                <div className="md:hidden">
                  <EverMoonStoneDetail />
                </div>
              </div>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function EvermoonDetail() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 400 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 400 }}
      transition={spring}
    >
      <div className="font-tavi text-lg md:text-5xl font-medium text-gold-gradient text-center">
        EVERMOON
      </div>
      <div className="font-tavi text-sm md:text-2xl text-gold-gradient text-center">
        #EVM
      </div>
      <div className="max-w-lg text-sm md:text-base mx-auto mt-8 text-center">
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
          detail="Use your $EVM tokens to earn more profit! Watch it rise in value as $MS inevitably conquers the NF'T game market."
          src={m2}
        />
        <SubDetail
          title="3. BUILDING CHALENGE"
          detail="Burn Heroes, Skins and Shards to gain more valuable rewards."
          src={m3}
        />
        <SubDetail
          title="4. IN GAME PAYMENT"
          detail="Use $EVM  tokens to buy Heroes, Skins, Shards and Loot boxes gaining new experiences."
          src={m4}
        />
        <SubDetail
          title="5. GOVERNANCE"
          detail="EVERMOON is an economic game powered by $EVM and $EVS coins based on earning, staking and spending."
          src={m5}
        />
      </div>
    </motion.div>
  );
}

function EverMoonStoneDetail() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 400 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 400 }}
      transition={spring}
    >
      <div className="mt-8 font-tavi text-lg md:text-5xl font-medium text-gold-gradient text-center">
        EVERSTONE
      </div>
      <div className="font-tavi text-sm md:text-2xl text-gold-gradient text-center">
        #EVS
      </div>
      <div className="max-w-lg text-sm md:text-base mx-auto mt-8 text-center">
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
    </motion.div>
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
      <Image className="w-12 md:w-16" src={src} alt="m1" />
      <div className="ml-3">
        <div className="font-source text-sm md:text-base font-bold leading-4 text-gold-gradient">
          {title}
        </div>
        <div className="font-source text-sm md:text-base leading-5">{detail}</div>
      </div>
    </div>
  );
}
