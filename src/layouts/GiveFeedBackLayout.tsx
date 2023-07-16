import React from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import RootLayout from './RootLayout'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'
import { LocalesMap, useLocale } from '@/shared/utils'
import Content from '@/shared/components/Content'

const styles = {}

const locales: LocalesMap = {
    ru: {
        title: 'COL - обратная связь',
    },
    en: {
        title: 'COL - feedback',
    },
}

export default function GiveFeedBackLayout({
    children,
}: Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
    const t = useLocale(locales)
    return (
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <RootLayout>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </RootLayout>
        </>
    )
}
