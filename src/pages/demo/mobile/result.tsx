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
      <div style={{ margin: "auto", width: "480px", border: "1px solid #ccc" }}>
        <a href="overview" style={{ border: "none" }}><img src="/images/temp/m2.png" alt="demo" style={{ maxWidth: "100%", height: "auto" }}  /></a>
      </div>
    </>
  );
}
