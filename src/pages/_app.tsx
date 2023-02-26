import { ReactElement, ReactNode, useEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import ThemeBuilder from '@/ThemeBuilder'
import api from '@/api'

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
            api.getUserLocal(crd.latitude, crd.longitude)
        }
        navigator.geolocation.getCurrentPosition(success)
    }, [])
    const getLayout = Component.getLayout ?? ((page) => page)
    return <ThemeBuilder>{getLayout(<Component {...pageProps} />)}</ThemeBuilder>
}
