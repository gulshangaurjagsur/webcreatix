import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import commonData from "../../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import Technology from "@component/components/technology/Technology";
export default function DataAnalytics() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Social Media Marketing Company in Delhi | WebCreatix</title>
        <meta
          name="description"
          content="Grow your brand’s presence on platforms like Instagram, Facebook, and LinkedIn. WebCreatix offers effective social media marketing in Delhi."
        />
        <meta
          name="keywords"
          content="social media marketing Delhi, SMM agency, Facebook marketing, Instagram marketing services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={servicesData?.header} />
        <Banner compData={servicesData?.banner?.socialMediaMarketing} />
        <Overview compData={servicesData?.overview?.socialMediaMarketing} />
        <Technology compData={servicesData?.technology?.socialMediaMarketing} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
