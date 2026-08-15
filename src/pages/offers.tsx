import Head from "next/head";
import commonData from "../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import dynamic from "next/dynamic";
import Offers from "@component/components/offers/Offers";
import TrustIndex from "@component/components/trustIndex/trustIndex";
import Achievements from "@component/components/achievements/achievements";

export default function DiscountOffers() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
  {/* Primary SEO */}
  <title>
    Affordable Website Design Packages in Delhi Starting ₹3,999 | WebCreatix
  </title>

  <meta
    name="description"
    content="Get a professional responsive website for your business starting at ₹3,999. Explore affordable website design, business website and e-commerce packages by WebCreatix in Delhi."
  />

  <meta
    name="robots"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.webcreatix.com/offers"
  />

  <link rel="icon" href="/favicon.ico" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />

  <meta
    property="og:title"
    content="Website Design Packages Starting at ₹3,999 | WebCreatix"
  />

  <meta
    property="og:description"
    content="Affordable professional websites for businesses. Choose from Starter, Business and E-Commerce website packages starting at ₹3,999."
  />

  <meta
    property="og:url"
    content="https://www.webcreatix.com/offers"
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
    content="Website Design Packages Starting at ₹3,999 | WebCreatix"
  />

  <meta
    name="twitter:description"
    content="Professional business websites, e-commerce stores and landing pages at affordable prices."
  />

  {/* Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.webcreatix.com/offers/#service",
        "name": "Website Design Packages",
        "url": "https://www.webcreatix.com/offers",
        "description":
          "Affordable website design packages for businesses including starter websites, business websites and e-commerce websites.",
        "provider": {
          "@type": "ProfessionalService",
          "@id": "https://www.webcreatix.com/#business",
          "name": "WebCreatix",
          "url": "https://www.webcreatix.com/",
          "telephone": "+91-9625791723",
          "logo": "https://www.webcreatix.com/images/logo-webcreatix.svg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi",
            "addressCountry": "IN"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": "Delhi"
        },
        "serviceType": [
          "Website Design",
          "Business Website Development",
          "E-commerce Website Development",
          "Landing Page Design"
        ]
      })
    }}
  />
</Head>
      <main>
        <Header compData={commonData?.header} />
        <Offers />
        <TrustIndex />
        
        <Footer compData={commonData?.footer} />
      </main>
    </>
  );
}
