import { ReactElement, ReactNode, useEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import ThemeBuilder from '@/ThemeBuilder'
import { api } from '@/api'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    useEffect(() => {
        function success(pos: any) {
            const crd = pos.coords
            // const result = api('/nearest-city', {
            //     query: {
            //         latitude: crd.latitude,
            //         longitude: crd.longitude,
            //     },
            // }).then((props) => {
            //     console.log('props', props)
            // })
            // console.log('result', result)
        }
        navigator.geolocation.getCurrentPosition(success)
    }, [])
    const getLayout = Component.getLayout ?? ((page) => page)
    return <ThemeBuilder>{getLayout(<Component {...pageProps} />)}</ThemeBuilder>
}
