import React, { useState } from 'react'
import Link from 'next/link'
import {
    Box,
    Collapse,
    IconButton,
    Link as MuiLink,
    Typography,
    useTheme,
    Theme,
    useMediaQuery,
    Button,
} from '@mui/material'
import { useLocale } from '@/shared/utils'
import imgDarkDark from '../shared/img/infoBanerBig.jpg'
import imgLightBig from '../shared/img/infoBaner_light.jpg'

const createLocales = (locationName: string) => {
    return {
        ru: {
            helpFindPrice: `Помогите другим путешественникам узнать цены в ${locationName}! `,
            helpFindPriceShort: 'Помогите другим путешественникам!',
            checkList: 'Заполните чек лист',
            btn: 'Заполнить',
        },
        en: {
            helpFindPrice: `Help other travelers find prices in ${locationName}! `,
            helpFindPriceShort: 'Help other travelers!',
            checkList: 'Fill out a checklist',
            btn: 'Fill out',
        },
    }
}

const styles = {
    root: {
        width: '100%',
        display: 'flex',
        minHeight: '72px',
        justifyContent: 'space-between',
        backgroundRepeat: 'no-repeat',
        borderRadius: 2,
        p: (theme: Theme) => theme.spacing(1, 6),
        '@media screen and (max-width:600px)': {
            flexWrap: 'wrap',
            p: (theme: Theme) => theme.spacing(0.5, 3),
        },
    },
    title: {
        fontWeight: 500,
        '@media screen and (max-width:600px)': {
            fontSize: 14,
        },
        '@media screen and (max-width:426px)': {
            fontSize: 14,
        },
    },
    light: {
        backgroundSize: 'auto',
        backgroundPosition: '30% 42%',
        backgroundImage: `url(${imgLightBig.src})`,
        '@media screen and (max-width:600px)': {
            backgroundPosition: '36.6% 40%',
        },
    },
    dark: {
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        backgroundImage: `url(${imgDarkDark.src})`,
    },
    button: {
        maxWidth: '75px',
        minWidth: '75px',
        textTransform: 'none',
        color: 'text.primary',
        bgcolor: 'rgba(0, 0, 0, 0.04)',
        height: '20%',
        m: 'auto 0',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
            bgcolor: 'transparent',
        },
    },
}

interface InfoBannerWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    colorMode: 'light' | 'dark'
}

const InfoBannerWrapper = ({ colorMode, children }: InfoBannerWrapperProps) => (
    <Link href="/give-feedback">
        <Box sx={[styles.root, styles[colorMode]]}>{children}</Box>
    </Link>
)

export default function InfoBanner({ locationName }: { locationName: string }) {
    const isMobileDevice = useMediaQuery('(max-width:600px)')
    const t = useLocale(createLocales(locationName))
    const theme = useTheme()
    const [open, setOpen] = useState<boolean>(true)

    return (
        <Collapse in={open} unmountOnExit>
            <InfoBannerWrapper colorMode={theme.palette.mode}>
                <Box sx={{ m: 'auto 0' }}>
                    <Typography sx={styles.title} variant="h6" fontWeight={500}>
                        {isMobileDevice ? t('helpFindPriceShort') : t('helpFindPrice')}
                    </Typography>
                    <Typography variant="body2">{t('checkList')}</Typography>
                </Box>
                <Button variant="contained" sx={styles.button}>
                    {t('btn')}
                </Button>
            </InfoBannerWrapper>
        </Collapse>
    )
}
