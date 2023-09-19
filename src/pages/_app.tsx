import { ReactElement, ReactNode, useEffect } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import ThemeBuilder from '@/ThemeBuilder'
import { LocalesMap, useLocale } from '@/shared/utils'
import { GA_TRACKING_ID } from '@/shared/lib/gtag'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '@/shared/lib/gtag'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const locales: LocalesMap = {
    ru: {
        title: 'COL - сравненивайте цены в разных странах мира',
        description: 'COL это приложение которое поможет узнать о ценах в рахных городах мира',
    },
    en: {
        title: 'COL - compare prices around the world',
        description: 'COL is app which helps get info about cost of living in cities around the world',
    },
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)
    const t = useLocale(locales)
    const router = useRouter()

    // useEffect(() => {
    //     const handleRouteChange = (url: string) => {
    //         gtag.pageview(url)
    //     }
    //     router.events.on('routeChangeComplete', handleRouteChange)
    //     return () => {
    //         router.events.off('routeChangeComplete', handleRouteChange)
    //     }
    // }, [router.events])
    return (
        <>
            <Head>
                <meta name="title" content={t('title')} />
                <meta name="description" content={t('description')} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Cost of living" />
                <link rel="icon" type="image/ico" href="/favicon.ico" />
                {/* <!-- Google Analitics counter --> */}
                {/* <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                <Script id="google-analytics">
                    {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
            
                          gtag('config', '${GA_TRACKING_ID}');
                        `}
                </Script> */}

                {/* <!-- Yandex.Metrika counter --> */}
                {/* <script type="text/javascript">
                    {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(94995296, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true
                    });`}
                </script> */}
            </Head>
            <ThemeBuilder>{getLayout(<Component {...pageProps} />)}</ThemeBuilder>
        </>
    )
}
