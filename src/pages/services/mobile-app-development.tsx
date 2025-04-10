import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import Technology from "@component/components/technology/Technology";
export default function MobileAppDevelopment() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>
          Mobile App Development Company in Delhi | Android & iOS Apps
        </title>
        <meta
          name="description"
          content="Custom Android and iOS app development services by WebCreatix in Delhi. Build scalable, user-friendly mobile apps for your business growth."
        />
        <meta
          name="keywords"
          content="mobile app development Delhi, android app developers, iOS app company, mobile apps Delhi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={servicesData?.header} />
        <Banner compData={servicesData?.banner?.mobileAppDevelopment} />
        <Overview compData={servicesData?.overview?.mobileAppDevelopment} />
        <Technology compData={servicesData?.technology?.mobileAppDevelopment} />
        <Footer compData={servicesData?.footer} />
      </main>
    </>
  );
}
