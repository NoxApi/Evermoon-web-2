import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Home from '../components/home'
import Feature from '../components/about_game/Feature'
import ImageNext from 'next/image'
import BG from '../assets/bg.jpg'
import Layout from '../components/layout'
import Tribe from '../components/about_game/Tribe'
import Token from '../components/about_game/Token'
import RoadMap from '../components/road_map'

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
        <div className="relative bg">
          {/* <div className="absolute inset-0">
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
          <Feature />
          <Tribe />
          <Token />
          <RoadMap />
        </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default Index
