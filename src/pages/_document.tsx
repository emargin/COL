import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import Script from 'next/script'
import { GA_TRACKING_ID } from '@/shared/lib/gtag'

export default function Document(props: DocumentProps) {
    return (
        <Html lang="en">
            <Head>
                <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
            
                          gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                          });
                        `,
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
