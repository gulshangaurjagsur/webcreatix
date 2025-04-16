import Head from "next/head";
import contactData from "../assets/data/contactPage.json";
import commonData from "../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
export default function Contact() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>
          Contact WebCreatix | Website Development & SEO Experts Delhi
        </title>
        <meta
          name="description"
          content="Get in touch with WebCreatix – your local Delhi web development and SEO partner. Let’s build something amazing together."
        />
        <meta
          name="keywords"
          content="Contact web agency Delhi, Talk to web developers Delhi, SEO agency contact Delhi, WebCreatix contact form, Delhi web consultants"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commonData?.header} />
        <Banner compData={contactData?.banner} />
        <Overview compData={contactData?.overview} />
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
