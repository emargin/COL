import React from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'
import RootLayout from './RootLayout'
import { LocalesMap, useLocale } from '@/shared/utils'
import Content from '@/shared/components/Content'

const locales: LocalesMap = {
    ru: {
        title: 'COL - сравненивайте цены в разных странах мира',
    },
    en: {
        title: 'COL - compare prices around the world',
    },
}

export default function PageLayout({ children }: Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
    const t = useLocale(locales)
    return (
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <RootLayout>
                <Content>{children}</Content>
            </RootLayout>
        </>
    )
}
