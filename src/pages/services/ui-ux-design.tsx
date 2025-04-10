import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import Technology from "@component/components/technology/Technology";
export default function CRMSolution() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>UI/UX Design Services in Delhi | WebCreatix</title>
        <meta
          name="description"
          content="User-centric UI/UX design services that enhance user journeys and boost engagement. Work with WebCreatix for smart and elegant digital experiences."
        />
        <meta
          name="keywords"
          content="UI/UX design Delhi, user interface design, user experience design, Figma designer Delhi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={servicesData?.header} />
        <Banner compData={servicesData?.banner?.uiUxDesign} />
        <Overview compData={servicesData?.overview?.uiUxDesign} />
        <Technology compData={servicesData?.technology?.uiUxDesign} />
        <Footer compData={servicesData?.footer} />
      </main>
    </>
  );
}
