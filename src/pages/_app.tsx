import { ReactElement, ReactNode, useEffect } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import ThemeBuilder from '@/ThemeBuilder'

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

            console.log('Your current position is:')
            console.log(`Latitude : ${crd.latitude}`)
            console.log(`Longitude: ${crd.longitude}`)
            console.log(`More or less ${crd.accuracy} meters.`)
        }

        function error(err: any) {
            console.warn(`ERROR(${err.code}): ${err.message}`)
        }
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        })
    }, [])
    const getLayout = Component.getLayout ?? ((page) => page)
    return <ThemeBuilder>{getLayout(<Component {...pageProps} />)}</ThemeBuilder>
}
