import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Home from '../components/home'
import ImageNext from 'next/image'
import Layout from '../components/layout'
import { Trailer } from '../components/trailer'

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
          {/* <Feature />
          <Tribe />
          <Token />
          <RoadMap /> */}
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
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

export default Index
