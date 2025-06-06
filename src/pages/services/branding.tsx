import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import commonData from "../../assets/data/common.json";
import Header from "@component/components/header/header";
import Overview from "@component/components/overview/Overview";
import Footer from "@component/components/footer/footer";
import Banner from "@component/components/banner/banner";
import Technology from "@component/components/technology/Technology";
export default function Branding() {
  return (
    <>
      <Head>
        <title>
          Branding Agency in Delhi | Build Your Brand with WebCreatix
        </title>
        <meta
          name="description"
          content="Craft a strong and memorable brand identity with WebCreatix. We offer logo design, color palettes, typography, and complete brand strategy in Delhi."
        />
        <meta
          name="keywords"
          content="branding agency Delhi, logo and identity, brand design Delhi, creative branding company"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Banner compData={servicesData?.banner?.branding} />
        <Overview compData={servicesData?.overview?.branding} />
        <Technology compData={servicesData?.technology?.branding} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
