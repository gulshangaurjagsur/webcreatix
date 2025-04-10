import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import commonData from "../../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import Technology from "@component/components/technology/Technology";
export default function WebDesignDevelopment() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>
          Website Design & Development Company in Delhi | WebCreatix
        </title>
        <meta
          name="description"
          content="Get high-performance websites tailored to your business. WebCreatix offers modern, responsive website design and development services in Delhi."
        />
        <meta
          name="keywords"
          content="website development Delhi, web design company Delhi, responsive website services, Delhi website developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={servicesData?.header} />
        <Banner compData={servicesData?.banner?.webDevelopment} />
        <Overview compData={servicesData?.overview?.webDevelopment} />
        <Technology compData={servicesData?.technology?.webDevelopment} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
