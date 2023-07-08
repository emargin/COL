import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

import Search from '@/features/Search'
import { useLocale, LocalesMap } from '@/shared/utils'

const locales: LocalesMap = {
    ru: {
        title: 'Сравнивайте цены по всему миру',
        message: '',
    },
    en: {
        title: 'Compare prices around the world',
        message: 'cost of living',
    },
}

const styles = {
    root: {
        width: '78%',
        margin: 'calc(50vh - 170px) auto auto auto',
    },
    title: {
        textAlign: 'left',
        mb: 3,
    },
}

export default function SearchContainer() {
    const t = useLocale(locales)
    return (
        <Box sx={styles.root}>
            <Typography variant="h5" component="h1" sx={styles.title}>
                {t('title')}
            </Typography>
            <Search />
            <Typography variant="body2" sx={{ textAlign: 'right', color: 'text.secondary', mt: 1.5 }}>
                {t('message')}
            </Typography>
        </Box>
    )
}
