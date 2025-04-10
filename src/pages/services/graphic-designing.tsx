import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import Technology from "@component/components/technology/Technology";
export default function GraphicDesigning() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Graphic Design Services in Delhi | Branding, Logos & More</title>
        <meta
          name="description"
          content="From logo design to branding kits, WebCreatix delivers eye-catching graphics that connect with your audience. Affordable graphic design in Delhi."
        />
        <meta
          name="keywords"
          content="graphic designing Delhi, logo design, brochure design, branding services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={servicesData?.header} />
        <Banner compData={servicesData?.banner?.graphicDesign} />
        <Overview compData={servicesData?.overview?.graphicDesign} />
        <Technology compData={servicesData?.technology?.graphicDesign} />
        <Footer compData={servicesData?.footer} />
      </main>
    </>
  );
}
