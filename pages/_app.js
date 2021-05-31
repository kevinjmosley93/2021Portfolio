import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import './styles.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kevin J Mosley | Full Stack Web Developer </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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
