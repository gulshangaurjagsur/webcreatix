import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import commonData from "../../assets/data/common.json";
import Header from "@component/components/header/header";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import Technology from "@component/components/technology/Technology";
export default function SeoServices() {
  return (
    <>
      <Head>
        <title>SEO Services in Delhi | Rank Higher with WebCreatix</title>
        <meta
          name="description"
          content="Boost your search engine rankings with data-driven SEO services in Delhi. WebCreatix delivers measurable results and increased organic traffic."
        />
        <meta
          name="keywords"
          content="SEO services Delhi, search engine optimization, SEO agency in Delhi, local SEO experts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Banner compData={servicesData?.banner?.seoServices} />
        <Overview compData={servicesData?.overview?.seoServices} />
        <Technology compData={servicesData?.technology?.seoServices} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
