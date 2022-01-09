import React, { Fragment } from "react";
import Moon from "../assets/moon.png";
import Image from "./image";
import { ComingSoonLink, Link } from "./header/Link";
import NextLink from "next/link";
import Logo from "../assets/logo.png";
import Marketplace from "../assets/marketplace-box.svg";
import { Menu, Transition } from "@headlessui/react";
const Header = () => {
  return (
    <header className="relative mx-auto w-full z-50">
      <div className="absolute inset-0 w-full h-16 gold-gradient-inv" />
      <div className="px-10 py-5 flex items-center">
        <div className="">
          <NextLink href="/">
            <a>
              <Image className="w-40" src={Logo} alt="logo" />
            </a>
          </NextLink>
        </div>

        <div className="flex items-center mr-auto">
          <Link title="HOME" href="/" current={true} />
          <div className="bg-white w-2 h-2 rounded-full" />
          <Link title="ABOUT GAME" href="/" current={false} />
          <div className="bg-white w-2 h-2 rounded-full" />
          <Link title="ROADMAP" href="/" current={false} />
          <div className="bg-[#767676] w-2 h-2 rounded-full" />
          <ComingSoonLink title="PARTHNERSHIP" />
          <div className="bg-[#767676] w-2 h-2 rounded-full" />
          <ComingSoonLink title="NEWS" />
        </div>

        <div className="relative mr-12">
          <div className="absolute top-1/2 left-0 right-0  -z-10 -translate-y-1/2">
            <Image className="" src={Marketplace} alt="marketplace" />
          </div>
          <div className=" mx-10">
            <div className="text-disable font-tavi text-xl ">Marketplace</div>
            <div className={`text-sm font-source text-gold-gradient leading-3`}>
              COMING SOON
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
