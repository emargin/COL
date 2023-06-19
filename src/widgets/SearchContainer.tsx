import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'

import Search from '@/features/Search'
import { useLocale, LocalesMap } from '@/shared/utils'

const locales: LocalesMap = {
    ru: {
        title: 'Сравнивайте цены по всему миру',
    },
    en: {
        title: 'Compare prices around the world',
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

    info: {
        maxWidth: '215px',
        textAlign: 'right',
        margin: '16px 0 0 auto',
        color: 'rgba(0, 0, 0, 0.38)',
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
        </Box>
    )
}
