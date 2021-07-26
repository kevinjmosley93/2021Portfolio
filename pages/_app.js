import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import * as ga from '../lib/ga'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>
          Kevin J Mosley is a U.S. Navy veteran/Software Engineer with a knack
          for leadership and attention to detail in everything he does.
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        <link rel='icon' href='/favicon.ico' />

        <link rel='icon' href='/favicon-32x32.png' sizes='32x32' />
        <link rel='icon' href='/android-chrome-192x192.png' sizes='192x192' />
        <link rel='icon' href='/android-chrome-512x512.png' sizes='512x512' />

        <link
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
          sizes='180x180'
        />
        <link rel='canonical' href='https://kevinjmosley.com' />

        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          name='title'
          content='Kevin J Mosley is a U.S. Navy veteran/Software Engineer with a knack for leadership and attention to detail in everything he does.'
        />
        <meta
          property='og:description'
          name='description'
          content='Kevin J Mosley is a U.S. Navy veteran/Software Engineer with a knack for leadership and attention to detail in everything he does. '
        />
        <meta
          property='og:image'
          itemProp='image'
          name='image'
          content='/favicon.ico'
        />
        <meta
          property='og:keywords'
          name='keywords'
          content='Tech, Software, Coding, Portfolio, Frontend Developer, Backend Developer, Shopify App Development'
        />
        <meta property='og:author' name='author' content='MMGThemes' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
