import Head from "next/head";
import aboutData from "../assets/data/aboutPage.json";
import commonData from "../assets/data/common.json";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import dynamic from "next/dynamic";
import Benefits from "@component/components/benefits/Benefits";
import WhyChoose from "@component/components/whyChoose/WhyChoose";
import Message from "@component/components/message/message";
// import Image from "next/image";
import { Image } from "react-bootstrap";

export default function WhyWebCreatix() {
  const Header = dynamic(() => import("@component/components/header/header"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Tripify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="bannerWrapper">
      <Image src="../../../images/tripify.png" className="img-fluid" alt="qwdqwd" />
    </div>
      </main>
    </>
  );
}
