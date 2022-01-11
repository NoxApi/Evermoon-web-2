import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Home from "../components/home";
import Feature from "../components/about_game/Feature";

import Layout from "../components/layout";

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
        <Feature />
      </main>

      <Footer />
    </Layout>
  );
};

export default Index;
