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
        Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer.
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:type' content='website' />
        <link rel='canonical' href='https://kevinjmosley.com' />

        <meta
          property='og:title'
          name='title'
          content='Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer.'
        />
        <meta
          property='og:description'
          name='description'
          content='Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer.'
        />
        <meta
          property='twitter:title'
          name='title'
          content='Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer.'
        />
        <meta
          property='twitter:description'
          name='description'
          content='Kevin J Mosley is a U.S. Navy veteran who got out of the military and found a successful career as a Software Engineer.'
        />
        <meta
          property='og:keywords'
          name='keywords'
          content='Getting Out Of The Military After 4 Years, Getting Out Of The Military Early, Getting Out Of The Navy, How To Get Out Of The Military And Be Successful, How To Get Out Of The Military Early, How To Get Out Of The Military Early With A Honorable Discharge, How To Get Out Of The Navy'
        />
        <meta property='og:author' name='author' content='MMGThemes' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
