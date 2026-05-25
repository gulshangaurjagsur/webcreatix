import Head from "next/head";
import MainBanner from "@component/components/mainBanner/mainBanner";
import cityData from "../data/cities.json"
import homeData from "../assets/data/homePage.json";
import commonData from "../assets/data/common.json";
import Overview from "@component/components/overview/Overview";
import Services from "@component/components/services/services";
import Message from "@component/components/message/message";
import Portfolio from "@component/components/portfolio/portfolio";
import ChooseUs from "@component/components/chooseUs/chooseUs";
import Achievements from "@component/components/achievements/achievements";
import Footer from "@component/components/footer/footer";
import dynamic from "next/dynamic";
import PanIndiaServices from "@component/components/panIndiaServices/PanIndiaServices";
export default function Home() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  const Cookie = dynamic(
    () => import("@component/components/modal/cookie/cookie"),
    {
      ssr: false,
    }
  );
  return (
    <>
      <Head>
        <title>
          Web Design & Development Company in Uttam Nagar, Delhi | WebCreatix
        </title>

        <meta
          name="description"
          content="WebCreatix is a professional web design and development company in Uttam Nagar, Delhi offering responsive websites, e-commerce solutions, landing pages, SEO-friendly development, and digital services for businesses and startups."
        />

        <meta
          name="keywords"
          content="web design company in Uttam Nagar, web development company Delhi, website designer near me, ecommerce website development Delhi, responsive website design Delhi, WebCreatix"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msvalidate.01" content="17BCDA0DB4C568BD36728FD7EECE8ABF" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.webcreatix.com" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <MainBanner compData={homeData?.mainBanner} />
        <Overview compData={homeData?.overview} />
        <Services compData={homeData?.services} />
        <Message compData={homeData?.message} />
        <Portfolio compData={homeData?.portfolio} />
        <ChooseUs compData={homeData?.chooseUs} />
        <Achievements compData={homeData?.achievements} />
        <PanIndiaServices data={cityData} />
        <Footer
          compData={commonData?.footer}
        />
        {/* <Cookie compData={homeData?.cookie} /> */}
      </main>
    </>
  );
}
