import Head from "next/head";
import aboutData from "../assets/data/aboutPage.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import TextCard from "@component/components/textCard/textCard";
import Benefits from "@component/components/benefits/Benefits";
import WhyChoose from "@component/components/whyChoose/WhyChoose";
import Message from "@component/components/message/message";
export default function WhyWebCreatix() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>About WebCreatix - Delhi&rsquo;s Creative Tech & Digital Agency</title>
        <meta
          name="description"
          content="Learn more about WebCreatix, a Delhi-based technology and digital services company building innovative websites, apps, and marketing solutions."
        />
        <meta
          name="keywords"
          content="About WebCreatix, Delhi tech company, web agency in Delhi, digital team in Delhi NCR, website development experts Delhi"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={aboutData?.header} />
        <Banner compData={aboutData?.banner} />
        <Overview compData={aboutData?.overview} />
        <Benefits compData={aboutData?.benefits} />
        <WhyChoose compData={aboutData?.whyChoose} />
        <Message compData={aboutData?.message} />
        <Footer compData={aboutData?.footer} />
      </main>
    </>
  );
}
