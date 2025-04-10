import Head from "next/head";
import MainBanner from "@component/components/mainBanner/mainBanner";
import homeData from "../assets/data/homePage.json";
import Overview from "@component/components/overview/Overview";
import Services from "@component/components/services/services";
import Message from "@component/components/message/message";
import Portfolio from "@component/components/portfolio/portfolio";
import ChooseUs from "@component/components/chooseUs/chooseUs";
import Achievements from "@component/components/achievements/achievements";
import Footer from "@component/components/footer/footer";
import dynamic from "next/dynamic";
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
          Best Web Development & Digital Agency in Delhi | WebCreatix
        </title>
        <meta
          name="description"
          content="WebCreatix is a top-rated Delhi-based web design, development, and digital marketing company helping businesses grow online with smart, scalable solutions."
        />
        <meta
          name="keywords"
          content="Web development Delhi, Digital agency Delhi, SEO services Delhi, Web design company in Delhi NCR, Delhi website designers, WebCreatix"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={homeData?.header} />
        <MainBanner compData={homeData?.mainBanner} />
        <Overview compData={homeData?.overview} />
        <Services compData={homeData?.services} />
        <Message compData={homeData?.message} />
        <Portfolio compData={homeData?.portfolio} />
        <ChooseUs compData={homeData?.chooseUs} />
        <Achievements compData={homeData?.achievements} />
        <Footer
          compData={homeData?.footer}
          contactData={homeData?.achievements}
        />
        <Cookie compData={homeData?.cookie} />
      </main>
    </>
  );
}
