import React from "react";

interface Props {
  className?: string;
}

const Footer = ({ className }: Props) => {
  return (
    <footer className={"flex flex-wrap justify-between py-4 px-8 " + className}>
      <div className="font-poppins">© 2021 - Moonbrat. All rights reserved</div>
      <div className="mr-5 flex">
        <a href="http://discord.gg/HS9UquFhPU">
          <img src="./discord.svg" width={35} height={35} className="mr-2" />
        </a>
        <a href="https://twitter.com/MoonbratNFT">
          <img src="./telegram.svg" width={35} height={35} className="mr-2" />
        </a>
        <a href="http://t.me/MoonbratNFT">
          <img src="./twitter.svg" width={35} height={35} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
