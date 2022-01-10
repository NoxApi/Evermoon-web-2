import React, { Fragment } from "react";
import Moon from "../assets/moon.png";
import Image from "../image";
import { ComingSoonLink, Link } from "./Link";
import NextLink from "next/link";
import Logo from "../../assets/logo.png";

import { Menu, Transition } from "@headlessui/react";
import Marketplace from "./Marketplace";
const Header = () => {
  return (
    <header className="relative mx-auto w-full z-50">
      <div className="absolute inset-0 w-full h-16 bg-gold-gradient-inv" />
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
          <Menu as="div" className="relative  px-6">
            <Menu.Button>
              <Link title="ABOUT GAME" href="/" current={false} />
            </Menu.Button>
            <Menu.Items className="absolute flex flex-col bottom-4 translate-y-full left-0 ml-14  mt-2  text-white font-sans font-semibold">
              <div className="parallelogram px-7 py-4 w-44">
                {["FEATURE", "TRIBE", "TOKEN"].map((stitle) => (
                  <Menu.Item key={`stitle-${stitle}`}>
                    <div className="group my-1">
                      <a className={``} href="/account-settings">
                        {stitle}
                      </a>
                      <div className="h-[3px] w-8 mt-1 rounded-full bg-gold-light scale-x-0 group-hover:scale-x-100 transition-transform origin-top-left" />
                    </div>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Menu>

          <div className="bg-white w-2 h-2 rounded-full" />
          <Link title="ROADMAP" href="/" current={false} />
          <div className="bg-[#767676] w-2 h-2 rounded-full" />
          <ComingSoonLink title="PARTHNERSHIP" />
          <div className="bg-[#767676] w-2 h-2 rounded-full" />
          <ComingSoonLink title="NEWS" />
        </div>
        <Marketplace className="mr-12" />
      </div>
    </header>
  );
};

export default Header;
