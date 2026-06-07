import Head from "next/head";
import commonData from "../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import dynamic from "next/dynamic";
import portfolioData from "../assets/data/portfolioPage.json";

import TrustIndex from "@component/components/trustIndex/trustIndex";
import Achievements from "@component/components/achievements/achievements";
import homeData from "../assets/data/homePage.json";
import Customers from "@component/components/customers/customers";
import Banner from "@component/components/banner/banner";

export default function Portfolio() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Portfolio | Website Design, Development & eCommerce Projects | WebCreatix</title>

        <meta
          name="description"
          content="Browse our portfolio featuring modern business websites, eCommerce stores, landing pages, and custom web applications. Discover the quality, creativity, and performance behind every WebCreatix project."
        />

        <meta
          name="keywords"
          content="website portfolio, web development portfolio, ecommerce projects, responsive website examples, custom website design, web application development, WebCreatix projects, website design company Delhi"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.webcreatix.com/portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Banner compData={portfolioData?.banner} />
        <Customers compData={portfolioData?.customers} />
        <TrustIndex />
        <Achievements compData={homeData?.achievements} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
