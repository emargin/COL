import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import { Locales, LocalesMap } from '@/shared/utils'
import Script from 'next/script'

const locales: LocalesMap = {
    ru: {
        title: 'COL - сравненивайте цены в разных странах мира',
        description: '',
    },
    en: {
        title: 'COL - compare prices around the world',
        description: 'COL is app which helps get info about cost of living in cities around the world',
    },
}

export default function Document(props: DocumentProps) {
    const locale = props.locale || 'en'

    const t = (key: string) => locales[locale as Locales][key] || key
    return (
        <Html lang="en">
            <Head>
                <meta name="title" content="COL - compare prices around the world" />
                <meta name="description" content={t('description')} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Cost of living" />
                <link rel="icon" type="image/ico" href="/favicon.ico" />
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-57MFK2MWZM"></Script>
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-57MFK2MWZM');`,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
