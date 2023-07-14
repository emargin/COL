import React from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import RootLayout from './RootLayout'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'
import Content from '@/shared/components/Content'

export default function CityLayout({ children }: Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
    const city = 'Малайзия'
    return (
        <>
            <Head>
                <title>{`COL in ${city}`}</title>
            </Head>
            <RootLayout>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </RootLayout>
        </>
    )
}
