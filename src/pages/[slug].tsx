import fs from "fs";
import path from "path";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";  // <-- ADD THIS
import commonData from "../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import ContactForm from "@component/components/form/contact";
import CityBanner from "@component/components/cityBanner/cityBanner";
import dynamic from "next/dynamic";
import Breadcrumb from "@component/components/breadcrumb/breadcrumb";

const Header = dynamic(() => import("@component/components/header/header"), {
  ssr: false,
});

interface CityData {
  name: string;
  title: string;
  meta: string;
  description: string;
  banner: string;
  heading1: string;
  heading2: string;
}

interface Props {
  cityData: CityData;
}

export default function WebDesignPage({ cityData }: Props) {
  const router = useRouter(); // ✅ get slug dynamically
  const canonicalUrl = `https://www.webcreatix.com${router.asPath.split("?")[0]}`;

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
              <h2>{cityData.heading2}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: cityData.description,
                }}
              />
            </div>
            <div className="commonContact col-sm-4 col-md-6 col-lg-4">
              <ContactForm />
            </div>
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

  return {
    props: {
      cityData,
    },
  };
};
