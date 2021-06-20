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
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='icon'
          type='image/png'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFOUlEQVRYR6WXfUzUdRzHX9/fPcABJwjieDBxiIHiLES03NKMWg9rzhm26cS1ytbaephttbWZzFXmsCi3mqK2UnwIZETGKFexpsvS0PIBRT15kFPjWR7vuLvft/2OOLmD4w74/nO3+77fn89rn9/n+/n+TjDBJQ9nJKBXXgL5NJCGIApJH0LUgqxEFYXi+erGQOFFIIHvvgRBSebbCPKAcL9+iQ34kEvVH4k8VH+68QOUZO5E8HrQ4IKDXKje4A9iXADy6KK1IA8FnXxIKNks1lR/MJovaABZ9aie1m4LgpnjBkDaETJVPHeuwdcbPEBJRjZC+Xn8yT2OrSKnesskADLfRfCxO0CkGabHQIMVBhyg04HLBToFXH77rUrkVD82cYDSzM1IthJihNRkUBRQVWjrhHDT4KcGETMVunvAZgenC+z2IahzIqd64WQAXkPyBUmJMDVy9CehVcNo8N7ruDtYKeQfIufswxMHOPHkm7S2f8b8VBCCvh4Htn4n0bGmETB2m4uudjuxCWEgJdTeAMkZnv19iRDI4YagmlDKPAWLxUp7ZxzRUW7/zvfOUHe5k4KyJ0YAHCi4wKnjVvKLswk3G6CrZxAkImKZSC06MX6AuheicLk6hht3bDrFjZpOvvxRm8Tea++2vznz6y3yv81mSnTIvU0pN4o5RXvHD5CHQm5uE5L4IfNNS5e7zOlZsSMAmq29aPuZyzzyQY0il4nkCVRA88pruWsQfAVE+GbsvuPirtWJMUxh+lyfJvSI5V5Sil4RWjcMW0H1wJBeXl9fDmKlL0DDKTu3zw8QEqGQsS5cu658l4MwU5RIKOyb8ClwV8GS+xaSgtHP4Ji/nhQpBx4ZTTG+CtSsj8co6gB3Z/V3qISYBYreO0xPs4uIWN29Sihyo0j2br4hmHEBuKtwPfdz4A3t+8WyPrpuuYiYrqAPEaiuQaiBHpWsl80Yw9zhLcjWdDGn0j7pCrgBrrxoxuA8jZRpUoXOm0762lScdomih9ApClEz9RhM7uQDKPJx3873asK8qip9QkvvMy4pZut1il5IGbAqseFts2ZFNb0q/9caDToSY3SY5UUErqH4NqTIFXP2Hx2rO8TukopSJKujI6dg9J3jQXZbx90uTKGhrEh3EGv/GtWhapOvQDfv0KZAIcTu4grt3S1k+eIMQiYIcLX+JvVNt1mQlsICwwFCqUMxiHyRUvROEAA//AUiM5AwmP1pUyNZntZFjP0wx5sdt35pdXnegISkSwpOqE7nnh2ry5o9p6CwuGKThE+CSRBII4TgscVzOd/4Pqc7bN4j7565A1Vdu31V6U/aT2Lf4fIEp07XCELnL8H8+5OJmxbD9YYm6q23x+RIm51Ebf8xLO1n/esk/Qg1a/vK0kvujt9VXHFcwMh7FTDo9WQvXeQOpt2of/5zkU7tevWzIs3hxM1yUXltV4CCyfLtK4+uGgQ4cmyDUJRvRnMMB9D2G6x3uGypHzP40sx0Smq3YHeOGP0en0Ta+/W9kW6AffvKzU6zXqvtqP90Fj8wD+2Yasv6bwsXai1jAsxOSsSq/kZNy8kxdQM2ZniGzu4jFQdRWDeaIyLMRNaCuRgNBs5eukpLu9e7yQhLmCmUlNQwvrvy6ZgA0uG6zwOwq7jiKQGV/hw6RcFg0GOzDwQ6DO79JQ+mc+zGNnoG2v3qvQC0kRzf0qc93MSgMgQQJSXEET/DhM3Z66V0qg6q6vbTbW/DC0BTFRZ/v1yi2wOkaEd0MiDa41rx0EK02TB8aQBlNfm09DW6Af4DVq/6cr2TBMwAAAAASUVORK5CYII='
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
