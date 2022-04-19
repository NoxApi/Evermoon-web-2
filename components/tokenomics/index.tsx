import React, { useState } from 'react'
import Content from '../../assets/runes/content.svg'
import Ring from '../../assets/tokenomics/ring.svg'
import SmallRing from '../../assets/tokenomics/smallring.svg'
import Evermoon from '../../assets/tokenomics/evermoon.png'
import Everstone from '../../assets/tokenomics/everstone.png'
import UseCase0 from '../../assets/tokenomics/Use case-0.svg'
import UseCase1 from '../../assets/tokenomics/Use case-1.svg'
import UseCase2 from '../../assets/tokenomics/Use case-2.svg'
import UseCase3 from '../../assets/tokenomics/Use case-3.svg'
import UseCase4 from '../../assets/tokenomics/Use case-4.svg'
import UseCase0S from '../../assets/tokenomics/everstone/Use case-0.svg'
import UseCase1S from '../../assets/tokenomics/everstone/Use case-1.svg'
import UseCase2S from '../../assets/tokenomics/everstone/Use case-2.svg'
import UseCase3S from '../../assets/tokenomics/everstone/Use case-3.svg'
import UseCase4S from '../../assets/tokenomics/everstone/Use case-4.svg'

import ImageNext from 'next/image'
import Image from '../image'
import { css, keyframes } from '@emotion/css'

const spin = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(15px, 0) rotate(180deg);
  }
  100% {
    transform: translate(0px, 0) rotate(360deg);
  }
`

const spinInv = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

export const Tokenomics = () => {
  const [show, setShow] = useState(0)

  return (
    <section className="relative">
      <div className="mt-20 max-w-[1024px] mx-auto font-Josefin text-gold-light text-6xl text-center relative">
        TOKENOMICS
      </div>

      <div className="max-w-[1024px] mx-auto relative">
        <div className="absolute inset-0">
          <ImageNext
            src={Content}
            alt="Content"
            className=" w-full h-full "
            layout="fill"
            objectFit="fill"
          />
        </div>
        {show === 0 && <Summary setShow={setShow} />}
        {show === 1 && <EVERMOON setShow={setShow} />}
        {show === 2 && <EVERSTONE setShow={setShow} />}
      </div>
    </section>
  )
}

function RingToken({
  token,
  animate = false,
  width = 'w-80',
}: {
  token: StaticImageData
  animate?: boolean
  width?: string
}) {
  return (
    <div className="flex ">
      <div className="relative ">
        <Image src={Ring} alt="ring" className={width} />
        <div className="absolute inset-0 flex">
          {animate ? (
            <Image
              src={SmallRing}
              alt="SmallRing"
              className={
                'w-full my-auto ' +
                css`
                  animation: 7s linear infinite ${spinInv};
                  animation-delay: -3000ms;
                `
              }
            />
          ) : (
            <Image
              src={SmallRing}
              alt="SmallRing"
              className={'w-full my-auto '}
            />
          )}
        </div>
        <div className="absolute inset-0 flex">
          {animate ? (
            <Image
              src={SmallRing}
              alt="SmallRing"
              className={
                'w-full my-auto ' +
                css`
                  animation: 7s linear infinite ${spin};
                `
              }
            />
          ) : (
            <Image
              src={SmallRing}
              alt="SmallRing"
              className={'w-full my-auto rotate-45'}
            />
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-[8%]">
          <Image src={token} alt="token" className="w-full " />
        </div>
      </div>
    </div>
  )
}

function Summary({ setShow }: { setShow: Function }) {
  return (
    <div className="relative mt-10 flex justify-evenly pt-12 pb-60">
      <div className="flex flex-col items-center" onClick={() => setShow(1)}>
        <RingToken token={Evermoon} animate />
        <div className="font-Josefin text-3xl text-gold-light">
          EVERMOON TOKEN
        </div>
        <div className="font-Josefin text-xl">Total Supply 1,000,000,000</div>
      </div>

      <div className="flex flex-col items-center" onClick={() => setShow(2)}>
        <RingToken token={Everstone} animate />
        <div className="font-Josefin text-3xl text-gold-light">EVERSTONE</div>
        <div className="font-Josefin text-xl">Unlimited Supply</div>
      </div>
    </div>
  )
}

function EVERMOON({ setShow }: { setShow: Function }) {
  return (
    <div className="relative mt-10 grid grid-cols-2  pt-12 pb-8">
      <div className="flex flex-col items-center" onClick={() => setShow(0)}>
        <RingToken token={Evermoon} animate />
      </div>

      <div className="flex flex-col items-left">
        <div className="font-Josefin text-4xl text-gold-light">
          EVERMOON TOKEN ($ES)
        </div>
        <div className="font-Josefin text-2xl text-white mt-3">
          Total Supply 1,000,000,000
        </div>
        <div className="font-Josefin text-sm text-white mr-20 mt-4">
          To the new dimension of NFT game industries of play and earn,
          moonstone is a core of our moon economy. Generating income to reach
          your dreams. Players may achieve a rewarding experience through…
        </div>
        <div className="flex flex-col pr-20 gap-y-5 mt-8">
          {[UseCase0, UseCase1, UseCase2, UseCase3, UseCase4].map(
            (image: StaticImageData) => (
              <Image key={image.src} src={image} alt="" />
            )
          )}
        </div>
      </div>

      <div
        className="absolute top-7 left-7 flex flex-col items-center"
        onClick={() => setShow(2)}
      >
        <RingToken token={Everstone} width="w-20" />
      </div>
    </div>
  )
}

function EVERSTONE({ setShow }: { setShow: Function }) {
  return (
    <div className="relative mt-10 grid grid-cols-2  pt-12 pb-8">
      <div className="flex flex-col items-center" onClick={() => setShow(0)}>
        <RingToken token={Everstone} animate />
      </div>

      <div className="flex flex-col items-left">
        <div className="font-Josefin text-4xl text-gold-light">
          EVERSTONE ($EVM)
        </div>
        <div className="font-Josefin text-2xl text-white mt-3">
          Unlimited Supply
        </div>
        <div className="font-Josefin text-sm text-white mr-20 mt-4">
          Everstone, the most valuable tokens in the EVERMOON universe, is the
          token that overcome the core economy of the game. As it always be,
          Evermoon allows players to purchase loot boxes that contain rare skins
          that never be found in the game
        </div>
        <div className="flex flex-col pr-20 gap-y-5 mt-8">
          {[UseCase0S, UseCase1S, UseCase2S, UseCase3S, UseCase4S].map(
            (image: StaticImageData) => (
              <Image key={image.src} src={image} alt="" />
            )
          )}
        </div>
      </div>

      <div
        className="absolute top-7 left-7 flex flex-col items-center"
        onClick={() => setShow(1)}
      >
        <RingToken token={Evermoon} width="w-20" />
      </div>
    </div>
  )
}
