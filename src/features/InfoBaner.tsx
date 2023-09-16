import React, { useState } from 'react'
import Link from 'next/link'
import { Box, Collapse, IconButton, Link as MuiLink, Typography, useTheme, Theme } from '@mui/material'
import { useLocale } from '@/shared/utils'
import CloseIcon from '@mui/icons-material/Close'
import imgDarkDark from '../shared/img/infoBanerBig.jpg'
import imgLightBig from '../shared/img/infoBaner_light.jpg'

const createLocales = (locationName: string) => {
    return {
        ru: {
            helpFindPrice: `Помогите другим путешественникам узнать цены в ${locationName}! `,
            checkList: 'Заполните чек лист',
        },
        en: {
            helpFindPrice: `Help other travelers find prices in ${locationName}! `,
            checkList: 'Fill out our checklist',
        },
    }
}

const styles = {
    root: {
        width: '100%',
        height: '64px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundRepeat: 'no-repeat',
        borderRadius: 2,
        p: (theme: Theme) => theme.spacing(1, 8),
        '@media screen and (max-width:426px)': {
            flexWrap: 'wrap',
            p: (theme: Theme) => theme.spacing(1, 1.5),
        },
    },
    title: {
        '@media screen and (max-width:600px)': {
            fontSize: 14,
        },
        '@media screen and (max-width:426px)': {
            fontSize: 12,
            fontWeight: 500,
        },
    },
    light: {
        backgroundSize: 'auto',
        backgroundPosition: 'center 42%',
        backgroundImage: `url(${imgLightBig.src})`,
        '@media screen and (max-width:600px)': {
            backgroundPosition: '35% 40%',
        },
    },
    dark: {
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        backgroundImage: `url(${imgDarkDark.src})`,
    },
}

interface InfoBannerWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    colorMode: 'light' | 'dark'
}

const InfoBannerWrapper = ({ colorMode, children }: InfoBannerWrapperProps) => (
    <Box sx={[styles.root, styles[colorMode]]}>{children}</Box>
)

export default function InfoBaner({ locationName }: { locationName: string }) {
    const t = useLocale(createLocales(locationName))
    const theme = useTheme()
    const [open, setOpen] = useState<boolean>(true)

    return (
        <Collapse in={open} unmountOnExit>
            <InfoBannerWrapper colorMode={theme.palette.mode}>
                <Box>
                    <Typography sx={styles.title} variant="h6" fontWeight={500}>
                        {t('helpFindPrice')}
                    </Typography>
                    <Typography variant="body2">{t('checkList')}</Typography>
                </Box>
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false)
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            </InfoBannerWrapper>
        </Collapse>
    )
}
