import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => {
            return (props) => {
              return sheet.collectStyles(<App {...props} />);
            };
          }
        });
      };

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>young & nauseous</title>
          <link
            rel="icon"
            href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/black-heart_1f5a4.png"
          />

          {/* Primary Meta Tags */}
          <meta name="title" content="young and nauseous" />
          <meta
            name="description"
            content="young and nauseous is a creative multimedia project with an emphasis on music, software and art."
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.youngandnauseo.us/" />
          <meta property="og:title" content="young and nauseous" />
          <meta
            property="og:description"
            content="young and nauseous is a creative multimedia project with an emphasis on music, software and art."
          />
          <meta
            property="og:image"
            content="https://www.youngandnauseo.us/images/meta.jpg"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.youngandnauseo.us/"
          />
          <meta property="twitter:title" content="young and nauseous" />
          <meta
            property="twitter:description"
            content="young and nauseous is a creative multimedia project with an emphasis on music, software and art."
          />
          <meta
            property="twitter:image"
            content="https://www.youngandnauseo.us/images/meta.jpg"
          />
          <link href="/fonts/fonts.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript>
            {/* Global site tag (gtag.js) - Google Analytics  */}
            {/* <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.googleAnalytics}`}
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.googleAnalytics}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            /> */}
          </NextScript>
        </body>
      </Html>
    );
  }
}
