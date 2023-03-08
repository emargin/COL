import React from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import RootLayout from './RootLayout'
import Header from '@/shared/components/Header'

const styles = {
    content: {
        maxWidth: '1290px',
        margin: 'auto',
    },
}

export default function CityLayout({ children }: Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
    const city = 'Малайзия'
    return (
        <>
            <Head>
                <title>{`COL in ${city}`}</title>
            </Head>
            <RootLayout>
                <Header />
                <Box sx={styles.content}>{children}</Box>
            </RootLayout>
        </>
    )
}
