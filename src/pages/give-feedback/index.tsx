import React, { ReactElement } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import { GiveFeedBackLayout } from '@/layouts'
import InfoWrapper from '@/shared/components/InfoWrapper'
import { useLocale } from '@/shared/utils'

const styles = {}

const locales = {
    ru: {
        formTitle: 'Заполните форму',
        infoTitle: 'Расскажите друзьям о нас',
        info: '',
    },
    en: {
        formTitle: 'Search',
        infoTitle: '',
        info: '',
    },
}

export default function GiveFeedback() {
    const t = useLocale(locales)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <InfoWrapper sx={{}}>
                <Typography sx={{ mb: 2 }} fontWeight={800} component="h3" fontSize={24}>
                    Заполните форму
                </Typography>
                <Box>
                    <Chip label="Магазины" />
                    <Chip label="Магазины" />
                    <Chip label="Магазины" />
                    <Chip label="Магазины" />
                </Box>
            </InfoWrapper>
            <InfoWrapper sx={{ bgcolor: '#fff1ea', width: '40%' }}>
                <Typography sx={{ mb: 2 }} fontWeight={800} component="h3" fontSize={24}>
                    Расскажите друзьям о нас
                </Typography>
                <Typography fontWeight={600}>
                    Принципы нашей команды, основанны на заботе и содействии людям, и мы хотим, чтобы это
                    постигло и других. Мы будем очень благодарны если Вы поделитесь нашим приложение с
                    друзьями.
                </Typography>
            </InfoWrapper>
        </Box>
    )
}

GiveFeedback.getLayout = function getLayout(page: ReactElement) {
    return <GiveFeedBackLayout>{page}</GiveFeedBackLayout>
}
