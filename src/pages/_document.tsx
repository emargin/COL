import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import Script from 'next/script'
import { GA_TRACKING_ID } from '@/shared/lib/gtag'

export default function Document(props: DocumentProps) {
    return (
        <Html lang="en">
            <Head>
                {/* <!-- Yandex.Metrika counter --> */}
                <script
                    id="ya-metrics"
                    dangerouslySetInnerHTML={{
                        __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(94995296, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
              });`,
                    }}
                ></script>
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/94995296"
                            style={{ position: 'absolute', left: '-9999px' }}
                            alt=""
                        />
                    </div>
                </noscript>
                {/* <!-- /Yandex.Metrika counter --> */}
                {/* <!-- /Yandex.Metrika counter --> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
