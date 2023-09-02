import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script src="//js.paystack.co/v1/inline.js"></script> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'use-credentials'} />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
