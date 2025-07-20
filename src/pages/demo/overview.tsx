import Head from 'next/head';
export default function FlightOverviewPage() {
  return (
    <>
      <Head>
        <title>Overview</title>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>

      <div style={{ margin: 0 }}>
        <a href="demo/payment" style={{ border: "none" }}><img src="/images/temp/3.png" alt="demo" /></a>
      </div>
    </>
  );
}
