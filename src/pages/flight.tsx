import Head from "next/head";
import dynamic from "next/dynamic";
import { Image } from "react-bootstrap";

export default function WhyWebCreatix() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>FlightVala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="bannerWrapper">
      <Image src="../../../images/tripify.png" className="img-fluid" alt="FlightVala" />
    </div>
      </main>
    </>
  );
}
