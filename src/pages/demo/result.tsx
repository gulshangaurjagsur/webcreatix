import Head from 'next/head';
export default function FlightResultPage() {
  return (
    <>
      <Head>
        <title>flight Result</title>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>

      <div style={{ margin: 0 }}>
        <a href="overview" style={{ border: "none" }}><img src="/images/temp/2.png" alt="demo" /></a>
      </div>
    </>
  );
}
