import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/fontAwesome.css";
import "../styles/style.css";
import "../styles/common.scss";
import "../scripts/layout.js";
import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GG1ZT4JF8Y"
      />

      <Script id="ga4">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());

          gtag('config', 'G-GG1ZT4JF8Y');
          gtag('config', 'AW-17818948467');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}