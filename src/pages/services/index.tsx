import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import commonData from "../../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import IndustriesCard from "@component/components/industriesCard/industries";
import Overview from "@component/components/overview/Overview";
import Technology from "@component/components/technology/Technology";

export default function Industries() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>
          Industries We Serve | Web Development for Delhi-Based Businesses
        </title>
        <meta
          name="description"
          content="WebCreatix provides web development, app solutions, and digital marketing for real estate, healthcare, e-commerce, education & more — tailored for Delhi businesses."
        />
        <meta
          name="keywords"
          content="Industry specific web services Delhi, web design for real estate Delhi, e-commerce websites Delhi, healthcare tech Delhi, education tech Delhi"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Banner compData={servicesData?.banner?.ourServices} />
        <Overview compData={servicesData?.overview?.main} />
        <IndustriesCard compData={servicesData?.card} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
