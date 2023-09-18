import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import Script from 'next/script'
import { GA_TRACKING_ID } from '@/shared/lib/gtag'

export default function Document(props: DocumentProps) {
    return (
        <Html lang="en">
            <Head></Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
