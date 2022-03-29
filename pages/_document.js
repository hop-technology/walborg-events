import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang='sv'>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.typekit.net/zfa2ryf.css'></link>
          <meta property="og:image" content="https://walborgevent.com/walborg-event-thumbnail.png"/>
          <meta property="og:image:type" content="image/png"/>
          <meta property="twitter:image:src" content="https://walborgevent.com/walborg-event-thumbnail.png"></meta>
      </Head>
      <body>
    
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
