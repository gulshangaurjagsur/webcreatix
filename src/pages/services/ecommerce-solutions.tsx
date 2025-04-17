import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import Header from "@component/components/header/header";
import commonData from "../../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import Technology from "@component/components/technology/Technology";
export default function EcommerceSolution() {
  return (
    <>
      <Head>
        <title>E-Commerce Website Development in Delhi | WebCreatix</title>
        <meta
          name="description"
          content="Launch and manage your online store with scalable e-commerce solutions by WebCreatix. Shopify, WooCommerce, and custom platforms available."
        />
        <meta
          name="keywords"
          content="ecommerce development Delhi, online store design, Shopify developer, ecommerce website Delhi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Banner compData={servicesData?.banner?.eCommerce} />
        <Overview compData={servicesData?.overview?.eCommerce} />
        <Technology compData={servicesData?.technology?.eCommerce} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
