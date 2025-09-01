import Head from 'next/head';
export default function FlightPaymentPage() {
  return (
    <>
      <Head>
        <title>Payment</title>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>
      <div style={{ margin: "auto", width: "480px", border: "1px solid #ccc" }}>
        <a href="confirmation" style={{ border: "none" }}><img src="/images/temp/m4.png" alt="demo" style={{ maxWidth: "100%", height: "auto" }}  /></a>
      </div>
    </>
  );
}
