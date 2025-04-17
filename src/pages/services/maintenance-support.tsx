import Head from "next/head";
import servicesData from "../../assets/data/services.json";
import commonData from "../../assets/data/common.json";
import Header from "@component/components/header/header";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import Technology from "@component/components/technology/Technology";
export default function MaintenanceSupport() {
  return (
    <>
      <Head>
        <title>
          Website Maintenance & Support Services in Delhi | WebCreatix
        </title>
        <meta
          name="description"
          content="Reliable website maintenance, backups, and support services to keep your digital assets secure and up-to-date. Trusted by Delhi businesses."
        />
        <meta
          name="keywords"
          content="website maintenance Delhi, support services, web support company, site updates"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Banner compData={servicesData?.banner?.maintenance} />
        <Overview compData={servicesData?.overview?.maintenance} />
        <Technology compData={servicesData?.technology?.maintenance} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
