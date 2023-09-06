import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import Script from 'next/script'

export default function Document(props: DocumentProps) {
    return (
        <Html lang="en">
            <Head>
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
