import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Home from '../components/home'
import ImageNext from 'next/image'
import Image from '../components/image'
import Layout from '../components/layout'
import { Trailer } from '../components/trailer'
import { Tribe } from '../components/tribe'
import Divider from '../assets/tribe/Divider.svg'
import { Features } from '../components/feature'
import { Heroes } from '../components/heroes'
import { Runes } from '../components/runes/runes'

import BGRune from '../assets/runes/bg.png'
import { Tokenomics } from '../components/tokenomics'
import { Team } from '../components/team'
import { Roadmap } from '../components/roadmap'
import { Partner } from '../components/partner'
import { Move } from '../components/movetoearn'

const Index: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Evermoon</title>
        <meta name="description" content="Evermoon's NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
        <div className="relative z-0">
          <div className="relative w-full h-0 z-10">
            <div
              className="w-full h-56 -translate-y-[52%]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%,rgba(22, 22, 55, 1) 45%, rgba(22, 22, 55, 1) 50%, rgba(7, 22, 45, 0) 100%)',
              }}
            />
          </div>

          <Trailer />
          <div className="relative w-full h-0 z-10">
            <div
              className="w-full h-28 md:h-64 -translate-y-[52%] flex flex-col  justify-center"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, #0E0E15 51.78%, #0E0E15 55.78%, rgba(7, 22, 45, 0) 100%)',
              }}
            >
            </div>
          </div>
          <Move/>

          <div className="relative w-full h-0 z-10">
            <div
              className="w-full h-28 md:h-64 -translate-y-[52%] flex flex-col  justify-center"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, #0E0E15 51.78%, #0E0E15 55.78%, rgba(7, 22, 45, 0) 100%)',
              }}
            >
              <div className="w-full  mx-auto max-w-[840px]">
                <Image src={Divider} alt="Divider" className="" />
              </div>
            </div>
          </div>
          
          <Tribe />

          <div className="relative w-full h-0 z-10">
            <div
              className="w-full h-40 -translate-y-[52%]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(13, 28, 48, 0) 0%, #0D1C30 51.78%, rgba(13, 28, 48, 0) 100%)',
              }}
            />
          </div>

          <Features />

          <div className="relative w-full h-0 z-10">
            <div
              className="w-full h-64 -translate-y-[52%] flex flex-col  justify-center"
              style={{
                background:
                  'linear-gradient(180deg, rgba(10, 9, 16, 0) 0%, #0E0E15 51.78%, #0E0E15 55.78%, rgba(7, 22, 45, 0) 100%)',
              }}
            >
              <div className="w-full  mx-auto max-w-[840px]">
                <Image src={Divider} alt="Divider" className="rotate-180" />
              </div>
            </div>
          </div>
          <Heroes />
          <div className="relative -z-10 -mt-20 pt-20 md:-mt-36 md:pt-36 bg-gray-900 ">
            <Image src={BGRune} alt="BG" className=" absolute w-full " fill />
            <div className="relative w-full h-0 z-10 -mt-36 ">
              <div
                className="w-full h-40 -translate-y-[52%]"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(12, 31, 55, 0) 0%, #082146 51.78%, rgba(4, 23, 48, 0) 100%)',
                }}
              />
            </div>
            <Runes />
            <Tokenomics />
            <Team />
            <Partner/>
            <Roadmap />
          </div>
        </div>
      </main>
      <div className="relative w-full h-0 ">
        <div
          className="w-full h-40 -translate-y-[50%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(12, 31, 55, 0) 0%, #0b111d 51.78%, 0b111d 100%)',
          }}
        />
      </div>
      <Footer />
    </Layout>
  )
}

export default Index
