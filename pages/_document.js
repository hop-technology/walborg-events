import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='sv'>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.typekit.net/zfa2ryf.css'></link>
        <link rel='preload' href='https://use.typekit.net/zfa2ryf.css' as='font' crossOrigin ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
