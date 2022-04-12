import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import Home from '../components/home'
import ImageNext from 'next/image'
import Layout from '../components/layout'

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
          {/* <Feature />
          <Tribe />
          <Token />
          <RoadMap /> */}
        </div>
      </main>

      <Footer />
    </Layout>
  )
}

export default Index
