import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import ThemeBuilder from '@/ThemeBuilder'
import { LocalesMap, useLocale } from '@/shared/utils'
import { useRouter } from 'next/router'

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

    return (
        <>
            <Head>
                <meta name="title" content={t('title')} />
                <meta name="description" content={t('description')} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Cost of living" />
                <link rel="icon" type="image/ico" href="/favicon.ico" />
            </Head>
            <ThemeBuilder>{getLayout(<Component {...pageProps} />)}</ThemeBuilder>
        </>
    )
}
