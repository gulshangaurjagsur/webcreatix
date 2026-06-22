import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (GA4 + Google Ads) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GG1ZT4JF8Y"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // GA4
              gtag('config', 'G-GG1ZT4JF8Y');

              // Google Ads
              gtag('config', 'AW-17818948467');
            `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}