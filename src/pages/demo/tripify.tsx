// pages/tripify.tsx

import Head from 'next/head';


export default function TripifyPage() {
  return (
    <>
      <Head>
        <title>Tripify</title>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>

      <div style={{ margin: 0 }}>
        <img src="/images/tripify.png" alt="Tripify" />
      </div>
    </>
  );
}
