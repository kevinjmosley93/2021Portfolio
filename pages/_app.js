import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import * as ga from '../lib/ga'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../styles.css'
import Header from '@components/Header'
import { Footer } from '@components/Footer'

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
          Kevin J Mosley is a U.S. Navy veteran who got out of the military and
          found a successful career as a Software Engineer.
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://kevinjmosley.com" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          href="/sailor-152-273340.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/sailor-144-273340.png" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/sailor-152-273340.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/sailor-144-273340.png"
        />

        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/sailor-120-273340.png"
        />

        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/sailor-114-273340.png"
        />

        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/sailor-72-273340.png"
        />

        <link rel="apple-touch-icon-precomposed" href="/sailor-57-273340.png" />

        <link rel="icon" href="/sailor-32-273340.png" sizes="32x32" />
        <meta
          property="og:title"
          name="title"
          content="Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer."
        />
        <meta
          property="og:description"
          name="description"
          content="Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer."
        />
        <meta
          property="twitter:title"
          name="title"
          content="Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer."
        />
        <meta
          property="twitter:description"
          name="description"
          content="Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer."
        />
        <meta
          property="og:keywords"
          name="keywords"
          content="Getting Out Of The Military After 4 Years, Getting Out Of The Military Early, Getting Out Of The Navy, How To Get Out Of The Military And Be Successful, How To Get Out Of The Military Early, How To Get Out Of The Military Early With A Honorable Discharge, How To Get Out Of The Navy"
        />
        <meta property="og:author" name="author" content="MMGThemes" />
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
