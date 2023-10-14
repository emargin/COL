import React from 'react'
import Head from 'next/head'
import RootLayout from './RootLayout'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'
import Content from '@/shared/components/Content'

interface CityLayoutProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    placeFrom: string
    placeTo: string
}

export default function CityLayout({ placeFrom, placeTo, children }: CityLayoutProps) {
    const city = 'Малайзия'
    return (
        <>
            <Head>
                <title>{`COL between ${placeFrom} and ${placeTo}`}</title>
            </Head>
            <RootLayout>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </RootLayout>
        </>
    )
}
