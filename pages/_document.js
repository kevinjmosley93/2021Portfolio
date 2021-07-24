import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
          />

          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap'
            rel='stylesheet'
          />

          <link rel='icon' href='/favicon.png' />
          <link
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css'
            rel='stylesheet'
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          {/* LinkedIn Insight Tag*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `
               _linkedin_partner_id = ${process.env.NEXT_PUBLIC_LINKEDIN_TAG}; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); 
          `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(){var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})();  
          `
            }}
          />
          <noscript>
            {' '}
            <img
              height='1'
              width='1'
              style={{ display: 'none', zIndex: '-1234' }}
              alt='LinkedIn Tag Image'
              src='https://px.ads.linkedin.com/collect/?pid=3705769&fmt=gif'
            />{' '}
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
