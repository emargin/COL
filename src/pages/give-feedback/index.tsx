import React, { ReactElement, useState } from 'react'
import Image from 'next/image'
import { Box, Button, Chip, Paper, Stack, Tab, Tabs, TextField, Theme, Typography } from '@mui/material'
import { TabPanel, allyProps } from '@/shared/components/tabs'
import { GiveFeedBackLayout } from '@/layouts'
import InfoWrapper from '@/shared/components/InfoWrapper'
import { useLocale } from '@/shared/utils'
import { CATEGORIES, MARKET_POSITIONS, TRANSPORT_POSITIONS } from '@/mock'
import qr from '@/shared/assets/qrcode.png'

const styles = {
    root: {
        p: '0 16px',
    },
    form: {
        maxWidth: {
            lg: '100%',
            xl: '850px',
        },
    },
    tabs: {
        width: '100%',
        minHeight: '32px',
        '.MuiButtonBase-root': {
            textTransform: 'none',
            bgcolor: 'action.selected',
        },
        '.MuiTabs-flexContainer': {
            gap: 1,
        },
        '.MuiTabs-scrollButtons.Mui-disabled': {
            opacity: 0.3,
        },
        '.MuiTabs-indicator': {
            display: 'none',
        },
        '.MuiButtonBase-root.MuiTab-root.Mui-selected': {
            color: 'primary.contrastText',
            backgroundColor: 'primary.main',
        },
    },
    tab: {
        fontSize: '13px',
        color: 'text.primary',
        borderRadius: 2,
        p: (theme: Theme) => theme.spacing(0, 1.25),
        minHeight: '32px',
    },
}

const locales = {
    ru: {
        formTitle: 'Заполните форму',
        infoTitle: 'Расскажите друзьям о нас',
        info: '',
    },
    en: {
        formTitle: 'Fill the form',
        infoTitle: 'Tell your friends about us',
        info: '',
    },
}

export default function GiveFeedback() {
    const t = useLocale(locales)
    const [tab, setTab] = useState<number>(0)

    const handleTabChange = (_: unknown, newTab: number) => {
        setTab(newTab)
    }

    const handleNextTab = () => {
        if (tab + 1 >= CATEGORIES.length) {
            return
        }
        setTab((prev) => prev + 1)
    }
    const handlePrevTab = () => {
        if (tab - 1 < 0) {
            return
        }
        setTab((prev) => prev - 1)
    }

    return (
        <Stack direction="row" gap={3} padding="0 16px" flexWrap="wrap">
            <InfoWrapper sx={styles.form}>
                <Typography sx={{ mb: 2 }} fontWeight={800} component="h3" fontSize={24}>
                    Заполните форму
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Tabs value={tab} onChange={handleTabChange} variant="scrollable" sx={styles.tabs}>
                        {CATEGORIES.map((item, index) => (
                            <Tab
                                key={index + item.label}
                                label={item.label}
                                {...allyProps(index)}
                                sx={styles.tab}
                            />
                        ))}
                    </Tabs>
                </Stack>
                {/* <Stack spacing={1} gap={1} marginTop={2} sx={{ maxHeight: '550px', overflowY: 'auto', p: 1 }}> */}
                <TabPanel value={tab} index={0}>
                    {MARKET_POSITIONS.map((position) => (
                        <TextField label={position} size="small" />
                    ))}
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    {TRANSPORT_POSITIONS.map((position) => (
                        <TextField label={position} size="small" />
                    ))}
                </TabPanel>
                {/* </Stack> */}

                <Stack mt={1} direction="row" justifyContent="flex-end">
                    <Button onClick={handlePrevTab}>Назад</Button>
                    <Button variant="contained" onClick={handleNextTab}>
                        Далее
                    </Button>
                </Stack>
            </InfoWrapper>
            <Stack gap={3}>
                <InfoWrapper sx={{ bgcolor: '#fff1ea', maxWidth: '370px', height: 'auto' }}>
                    <Typography sx={{ mb: 2 }} fontWeight={800} component="h3" fontSize={24}>
                        Помогите нам стать лучше
                    </Typography>
                    <Typography fontWeight={600}>
                        Мы будем очень благодарны если вы поможите нам сделать информацию о стоимости жизни в
                        разных странах мира более полной и точной. Спасибо.
                    </Typography>
                </InfoWrapper>
                <InfoWrapper sx={{ bgcolor: '#e6f45d', maxWidth: '370px', height: 'auto' }}>
                    <Typography sx={{ mb: 2 }} fontWeight={800} component="h3" fontSize={24}>
                        Расскажите друзьям о нас
                    </Typography>
                    <Typography fontWeight={600}>
                        Принципы нашей команды, основанны на заботе и содействии людям, и мы хотим, чтобы это
                        постигло и других. Мы будем очень благодарны если Вы поделитесь нашим приложение с
                        друзьями.
                    </Typography>
                    <Image src={qr} width={150} height={150} alt="qr code" />
                    {/* <InfoWrapper sx={{ m: -2.5, mt: 5, width: '370px' }}>s</InfoWrapper> */}
                </InfoWrapper>
            </Stack>
        </Stack>
    )
}

GiveFeedback.getLayout = function getLayout(page: ReactElement) {
    return <GiveFeedBackLayout>{page}</GiveFeedBackLayout>
}
