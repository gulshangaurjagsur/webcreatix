import fs from "fs";
import path from "path";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import commonData from "../assets/data/common.json";
import citiesData from "../data/cities.json";
import Footer from "@component/components/footer/footer";
import ContactForm from "@component/components/form/contact";
import CityBanner from "@component/components/cityBanner/cityBanner";
import dynamic from "next/dynamic";
import Breadcrumb from "@component/components/breadcrumb/breadcrumb";
import locationClusters from "../data/location-clusters.json";
import TrustIndex from "@component/components/trustIndex/trustIndex";
import PanIndiaServices from "@component/components/panIndiaServices/PanIndiaServices";
const Header = dynamic(() => import("@component/components/header/header"), {
  ssr: false,
});

interface CityData {
  slug?: string;
  city?: string;
  name?: string;
  title: string;
  meta: string;
  description: string;
  banner?: string;
  imageSource?: string;
  imageAlt?: string;
  heading1: string;
  heading2: string;
}

interface Props {
  cityData: CityData;
}

export default function WebDesignPage({ cityData }: Props) {
  const router = useRouter();
  const canonicalUrl = `https://www.webcreatix.com${(router.asPath || "").split("?")[0]}`;
  const citySlug = cityData.city
    ? `/website-designing-company-in-${cityData.city.toLowerCase()}`
    : "/";
  const areas = cityData.city
    ? locationClusters[cityData.city as keyof typeof locationClusters]
    : [];

  return (
    <>
      <Head>
        <title>{cityData.title}</title>
        <meta name="description" content={cityData.meta} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Header compData={commonData?.header} />
      <CityBanner compData={cityData} />
      <Breadcrumb compData={cityData} />

      <div className="cityPages">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-6 col-lg-8">
              <h1>{cityData.heading1}</h1>
              {cityData.city && (
                <div className="mb-4">
                  <Link href={citySlug}>
                    ← View All Services in {cityData.city}
                  </Link>
                </div>
              )}
              <h2>{cityData.heading2}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: cityData.description,
                }}
              />
              {areas?.length > 0 && (
                <div className="mt-5">
                  <h2>Areas We Serve in {cityData.city}</h2>

                  <ul>
                    {areas.map((area) => (
                      <li key={area.slug}>
                        <Link href={`/${area.slug}`}>
                          Website Designing Company in {area.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="col-sm-4 col-md-6 col-lg-4 cityRightCol">
              <div className="commonContact"><ContactForm /></div>
              <div className="panIndiaWrapper"><PanIndiaServices data={citiesData} /></div>
              
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <TrustIndex />
          </div>
        </div>
      </div>

      <Footer compData={commonData?.footer} showContactSection={false} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "src", "data", "cities.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const cities = JSON.parse(jsonData);

  const paths = Object.keys(cities).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), "src", "data", "cities.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const cities = JSON.parse(jsonData);

  const slug = params?.slug as string;
  const cityData = cities[slug];

  if (!cityData) {
    return {
      notFound: true,
    };
  }

  let enhancedCityData: CityData = {
    ...cityData,
    slug,
  };

  if (!enhancedCityData.name) {
    for (const [parentCity, areas] of Object.entries(
      locationClusters
    ) as [string, { name: string; slug: string }[]][]) {
      const matchedArea = areas.find((area) => area.slug === slug);
      if (matchedArea) {
        enhancedCityData = {
          ...enhancedCityData,
          name: matchedArea.name,
          city: parentCity,
        };
        break;
      }
    }
  }

  return {
    props: {
      cityData: enhancedCityData,
    },
  };
};
