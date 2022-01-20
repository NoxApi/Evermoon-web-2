import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Image from "../image";
import LearnMoreBox from "../../assets/learnmore-box.svg";
import { ArrowLeft, ArrowRight } from "./Arrow";
import RSpeed from "../../assets/feature/rspeed.png";
import RStrength from "../../assets/feature/rstrength.png";
import RProtection from "../../assets/feature/rprotection.png";
import SPurple from "../../assets/feature/spurple.png";
import SGold from "../../assets/feature/sgold.png";
import LWinner from "../../assets/feature/lwinner.png";
import LLoser from "../../assets/feature/lloser.png";
import LEvermoon from "../../assets/feature/levermoon.png";
import { CCarousel, CCarouselItem } from "@coreui/react";

export default function LearnMore() {
  let [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const maxPage = 2;
    if (page < 0) setPage(0);
    if (page > maxPage) setPage(maxPage);
    return () => {};
  }, [page]);

  useEffect(() => {
    if (isOpen) setPage(0);
    return () => {};
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={"relative z-0 mt-16"}
      >
        <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
          <Image className="" src={LearnMoreBox} alt="LearnMoreBox" />
        </div>
        <div className=" mx-10">
          <div className="font-tavi font-medium text-2xl">LEARN MORE</div>
        </div>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className=" inline-block w-full max-w-6xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-bluepurple-gradient border-2 border-[color:var(--gold-light)] shadow-xl rounded-2xl">
                <div className="grid grid-cols-[auto_1fr_auto] items-center">
                  <div className="z-10" onClick={() => setPage(page - 1)}>
                    <ArrowLeft />
                  </div>

                  <div className="relative z-0">
                    <div
                      className="flex flex-col items-center transition-transform"
                      style={{ transform: `translateX(${(0 - page) * 100}%)` }}
                    >
                      <Dialog.Title
                        as="h3"
                        className="mt-8 mb-6 text-white flex justify-center"
                      >
                        <div className={"relative z-0 "}>
                          <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
                            <Image
                              className=""
                              src={LearnMoreBox}
                              alt="LearnMoreBox"
                            />
                          </div>
                          <div className=" mx-24">
                            <div className="font-tavi font-medium text-2xl text-center">
                              RUNES
                            </div>
                          </div>
                        </div>
                      </Dialog.Title>
                      <div className="flex w-full px-20 mt-16 justify-evenly">
                        <RuneItem src={RSpeed} title="Speed" />
                        <RuneItem src={RStrength} title="Strength" />
                        <RuneItem src={RProtection} title="Protection" />
                      </div>
                      <div className="mt-12 text-white font-source text-lg max-w-lg text-center">
                        An ancient stone that harbored a strong energy since
                        ancient times. It can be obtained by opening it from
                        loot boxes and market places.
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 flex flex-col items-center transition-transform"
                      style={{ transform: `translateX(${(1 - page) * 100}%)` }}
                    >
                      <Dialog.Title
                        as="h3"
                        className="mt-8 mb-6 text-white flex justify-center"
                      >
                        <div className={"relative z-0 "}>
                          <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
                            <Image
                              className=""
                              src={LearnMoreBox}
                              alt="LearnMoreBox"
                            />
                          </div>
                          <div className=" mx-24">
                            <div className="font-tavi font-medium text-2xl text-center">
                              SHARDS
                            </div>
                          </div>
                        </div>
                      </Dialog.Title>
                      <div className="flex w-full px-20 mt-16 justify-evenly">
                        <ShardItem src={SPurple} title="Purple" />
                        <ShardItem src={SGold} title="Gold" />
                      </div>
                      <div className="mt-20 text-white font-source text-lg max-w-lg text-center">
                        An ancient crystal that harbored a hero spirit since
                        ancient times. It can be obtained by opening it from
                        loot boxes and market places.
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 flex flex-col items-center transition-transform"
                      style={{ transform: `translateX(${(2 - page) * 100}%)` }}
                    >
                      <Dialog.Title
                        as="h3"
                        className="mt-8 mb-6 text-white flex justify-center"
                      >
                        <div className={"relative z-0 "}>
                          <div className="absolute top-1/2 left-0 right-0 -z-10 -translate-y-1/2">
                            <Image
                              className=""
                              src={LearnMoreBox}
                              alt="LearnMoreBox"
                            />
                          </div>
                          <div className=" mx-24">
                            <div className="font-tavi font-medium text-2xl text-center">
                              LOOT BOXES
                            </div>
                          </div>
                        </div>
                      </Dialog.Title>
                      <div className="flex w-full px-20 mt-16 justify-evenly">
                        <LootItem src={LWinner} title="Winner Loot boxes">
                          A box to get when you win in Ranked Mode. The reward
                          in the box will be good or bad depending on your luck.
                        </LootItem>
                        <LootItem src={LLoser} title="Loser Loot boxes">
                          A box to get when you lose in Ranked Mode. The reward
                          in the box will be good or bad depending on your luck.
                        </LootItem>
                        <LootItem src={LEvermoon} title="Evermoon Loot Box">
                          A box that you can buy from Evermoon, the central
                          store. The rewards in the box are heroes, skins and
                          runes.
                        </LootItem>
                      </div>
                    </div>
                  </div>

                  <div className="z-10" onClick={() => setPage(page + 1)}>
                    <ArrowRight />
                  </div>
                </div>
                <div className="flex justify-center mt-10 mb-4">
                  <div
                    className={`w-2 h-2 m-[0.3rem] rotate-45 ${
                      page === 0 ? "bg-gold-light" : "bg-disable"
                    }`}
                  />
                  <div
                    className={`w-2 h-2 m-[0.3rem] rotate-45 ${
                      page === 1 ? "bg-gold-light" : "bg-disable"
                    }`}
                  />
                  <div
                    className={`w-2 h-2 m-[0.3rem] rotate-45 ${
                      page === 2 ? "bg-gold-light" : "bg-disable"
                    }`}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

interface RuneItemProps {
  src: StaticImageData;
  title: string;
}
function RuneItem({ src, title }: RuneItemProps) {
  return (
    <div className="flex flex-col items-center">
      <Image className="w-52" src={src} alt={title} priority={true} />
      <div>
        <div className="font-tavi font-medium text-lg text-white uppercase">
          {title}
        </div>
        <div className="h-[3px] w-8 mt-0 rounded-full bg-gold-light" />
      </div>
    </div>
  );
}

interface ShardItemProps {
  src: StaticImageData;
  title: string;
}
function ShardItem({ src, title }: ShardItemProps) {
  return (
    <div className="flex flex-col items-center">
      <Image className="w-52" src={src} alt={title} priority={true} />
      <div>
        {/* <div className="font-tavi font-medium text-lg text-white uppercase">
          {title}
        </div>
        <div className="h-[3px] w-8 mt-0 rounded-full bg-gold-light" /> */}
      </div>
    </div>
  );
}

interface LootItemProps {
  src: StaticImageData;
  title: string;
  children: any;
}
function LootItem({ src, title, children }: LootItemProps) {
  return (
    <div className="flex flex-col items-center">
      <Image className="w-52" src={src} alt={title} priority={true} />
      <div>
        <div className="font-tavi font-medium text-lg text-white uppercase">
          {title}
        </div>
        <div className="h-[3px] w-8 mt-0 rounded-full bg-gold-light" />
        <div className="text-white font-source text-sm w-52">{children}</div>
      </div>
    </div>
  );
}
