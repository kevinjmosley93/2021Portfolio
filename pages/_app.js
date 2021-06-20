import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'

import 'font-awesome/css/font-awesome.min.css'
import '../styles.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kevin J Mosley | Software Engineer </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Kevin J Mosley is a U.S. Navy veteran/Software Engineer with a knack for leadership and attention to detail in everything he does. '
        />
        <meta
          name='keywords'
          content='Tech, Software, Coding, Portfolio, Frontend Developer, Backend Developer, Shopify App Development'
        />
        <meta name='author' content='MMGThemes' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='icon'
          type='image/png'
          href='https://img.icons8.com/clouds/344/code.png'
        />
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
