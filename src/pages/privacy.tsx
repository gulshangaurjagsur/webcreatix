import Head from "next/head";
import privacyData from "../assets/data/privacyPage.json";
import commonData from "../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";

export default function Privacy() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Privacy Policy | WebCreatix - Delhi Web Solutions</title>
        <meta
          name="description"
          content="Read WebCreatix's privacy policy. We are committed to protecting the privacy of our clients and website users across Delhi and beyond."
        />
        <meta
          name="keywords"
          content="Privacy policy, WebCreatix privacy, data protection Delhi, website privacy policy, Delhi web company policy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={privacyData?.header} />
        <Banner compData={privacyData?.banner} />
        <Overview compData={privacyData?.overview} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
