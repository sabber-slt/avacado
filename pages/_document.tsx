import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa-IR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="application-name" content="Avacado" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/icon-72x72.png"
          />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/icon.png" />

          <link rel="mask-icon" href="/icon.png" color="#5AAC46" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#5AAC46" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="msapplication-tap-highlight" content="no" />

          <link rel="apple-touch-startup-image" href="/icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
