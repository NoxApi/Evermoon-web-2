import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Evermoon</title>
        <meta name="description" content="Evermoon's NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative  bg-white h-screen w-full">
          <video
            className="inset-0 h-screen w-full object-cover"
            loop
            autoPlay
            muted
          >
            <source src="/bg-video.webm" type="video/webm" />
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 black-gradient" />
          <div className="absolute inset-0">
            <Header />
          </div>
        </div>
      </main>

      <Footer />
    </Layout>
  );
};

export default Home;
