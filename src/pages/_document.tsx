import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import { Locales, LocalesMap } from '@/shared/utils'

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
                <title>{t('title')}</title>
                <meta name="description" content={t('description')} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Cost of living" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
