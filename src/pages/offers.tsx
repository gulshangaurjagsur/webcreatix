import Head from "next/head";
import commonData from "../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import dynamic from "next/dynamic";
import Offers from "@component/components/offers/Offers";

export default function DiscountOffers() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Website Design Packages Starting ₹3,999 | WebCreatix Delhi</title>
        <meta
          name="description"
          content="Get a professional responsive website starting at just ₹3,999. Choose from Starter, Business, and E-Commerce packages by WebCreatix. Limited-time offers available. Trusted web design company in Delhi."
        />
        <meta
          name="keywords"
          content="website design cost Delhi, website packages India, low cost website design, professional web designer Delhi, ecommerce website cost India, WebCreatix web services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.webcreatix.com/offers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Offers />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
