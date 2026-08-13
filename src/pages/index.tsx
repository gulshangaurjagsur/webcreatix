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
import TrustIndex from "@component/components/trustIndex/trustIndex";
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
  {/* Primary SEO */}
  <title>
    Web Design Company in Uttam Nagar, Delhi | Website Development | WebCreatix
  </title>

  <meta
    name="description"
    content="WebCreatix is a web design and website development company in Uttam Nagar, Delhi. We create responsive business websites, e-commerce websites, landing pages and SEO-friendly web solutions."
  />

  <meta
    name="robots"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  <meta
    name="msvalidate.01"
    content="17BCDA0DB4C568BD36728FD7EECE8ABF"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.webcreatix.com/"
  />

  <link rel="icon" href="/favicon.ico" />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:title"
    content="Web Design & Website Development Company in Delhi | WebCreatix"
  />

  <meta
    property="og:description"
    content="Professional web design and website development services in Delhi. Business websites, e-commerce stores, landing pages and SEO-friendly web solutions."
  />

  <meta
    property="og:url"
    content="https://www.webcreatix.com/"
  />

  <meta
    property="og:site_name"
    content="WebCreatix"
  />

  <meta
    property="og:locale"
    content="en_IN"
  />

  {/* Twitter */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Web Design & Website Development Company in Delhi | WebCreatix"
  />

  <meta
    name="twitter:description"
    content="Professional web design, website development, e-commerce and landing page development services in Delhi."
  />

  {/* Organization + Local Business Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ProfessionalService",
            "@id": "https://www.webcreatix.com/#business",
            "name": "WebCreatix",
            "url": "https://www.webcreatix.com/",
            "logo": "https://www.webcreatix.com/images/logo-webcreatix.svg",
            "image": "https://www.webcreatix.com/images/logo-webcreatix.svg",
            "description":
              "WebCreatix is a professional web design and website development company in Delhi offering responsive websites, e-commerce development, landing pages and digital solutions.",
            "telephone": "+91-9625791723",
            "email": "info@webcreatix.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Uttam Nagar",
              "addressRegion": "Delhi",
              "addressCountry": "IN"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Delhi"
              },
              {
                "@type": "Place",
                "name": "Delhi NCR"
              }
            ],
            "priceRange": "₹₹",
            "serviceType": [
              "Web Design",
              "Website Development",
              "E-commerce Website Development",
              "Landing Page Design",
              "SEO-Friendly Website Development",
              "Digital Marketing"
            ],
            "sameAs": []
          },

          {
            "@type": "WebSite",
            "@id": "https://www.webcreatix.com/#website",
            "url": "https://www.webcreatix.com/",
            "name": "WebCreatix",
            "publisher": {
              "@id": "https://www.webcreatix.com/#business"
            },
            "inLanguage": "en-IN"
          },

          {
            "@type": "WebPage",
            "@id": "https://www.webcreatix.com/#webpage",
            "url": "https://www.webcreatix.com/",
            "name": "Web Design Company in Uttam Nagar, Delhi | WebCreatix",
            "isPartOf": {
              "@id": "https://www.webcreatix.com/#website"
            },
            "about": {
              "@id": "https://www.webcreatix.com/#business"
            },
            "inLanguage": "en-IN"
          }
        ]
      })
    }}
  />
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
        <TrustIndex />
        <PanIndiaServices data={cityData} />
        <Footer
          compData={commonData?.footer}
        />
        {/* <Cookie compData={homeData?.cookie} /> */}
      </main>
    </>
  );
}
