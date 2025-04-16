import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import commonData from "../../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import Technology from "@component/components/technology/Technology";
export default function CustomSoftwareDevelopment() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Custom Software Development Company in Delhi | WebCreatix</title>
        <meta
          name="description"
          content="Tailored software solutions to automate your business. WebCreatix develops secure, scalable software for startups and enterprises in Delhi."
        />
        <meta
          name="keywords"
          content="software development Delhi, custom software Delhi, ERP systems, business automation tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Banner compData={servicesData?.banner?.customSoftwareDevelopment} />
        <Overview
          compData={servicesData?.overview?.customSoftwareDevelopment}
        />
        <Technology
          compData={servicesData?.technology?.customSoftwareDevelopment}
        />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
