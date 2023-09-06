import React, { ReactElement, useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Typography, Tabs, Tab, IconButton } from '@mui/material'
import { cities } from '@/mock'
import InfoWrapper from '@/shared/components/InfoWrapper'
import { TabPanel, allyProps } from '@/shared/components/tabs'
import flagImg from '@/shared/assets/united-kingdom.png'

import { CityLayout } from '@/layouts'
import CityGeneralInfo from '@/widgets/CityGeneralInfo'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLocale } from '@/shared/utils'

type IContry = any

const TABS = [
    { label: 'Общие' },
    { label: 'Магазины' },
    { label: 'Жилье' },
    { label: 'Рестараны' },
    { label: 'Транспорт' },
]
const EN_TABS = [{ label: 'General' }]

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
        p: '0 16px',
        mb: 3,
    },
    country: {
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        justifyContent: {
            xs: 'center',
            sm: 'flex-start',
        },
        alignItems: 'center',
        mb: 1,
    },
    swapButton: {
        height: 30,
        width: 30,
        textAlign: 'center',
        transitionDuration: '0.3s',
        transitionProperty: 'transform',
        '&: hover': {
            transform: 'rotate(180deg)',
        },
    },
}

const locales = {
    ru: {
        tabs: '',
    },
    en: {
        tabs: '',
    },
}
export default function City({ city }: IContry) {
    const t = useLocale(locales)
    const [tab, setTab] = useState<number>(0)
    let startX = 0
    let endX = 0

    const handleTabChange = (_: unknown, newTab: number) => {
        setTab(newTab)
    }

    const checkDirection = () => {
        const swipeSize = Math.abs(endX - startX)
        if (swipeSize < 80) {
            return
        }
        if (endX < startX && tab + 1 < TABS.length) {
            setTab((prev) => prev + 1)
        }
        if (endX > startX && tab !== 0) {
            setTab((prev) => prev - 1)
        }
    }

    const handleTouchStart = (e: any) => {
        startX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e: any) => {
        endX = e.changedTouches[0].screenX
        checkDirection()
    }

    return (
        <Box sx={styles.root}>
            <InfoWrapper style={{ paddingBottom: 0 }}>
                <Box sx={styles.country}>
                    <Typography variant="h6" sx={{ opacity: 0.1 }}>
                        <Image
                            alt="country flag img"
                            style={{ margin: '0 8px' }}
                            src={flagImg.src}
                            width={16}
                            height={16}
                        />
                        Malaysia
                    </Typography>
                    <IconButton sx={styles.swapButton}>
                        <ArrowForwardIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="h5">
                        <Image
                            alt="country flag img"
                            style={{ margin: '0 8px' }}
                            src={flagImg.src}
                            width={16}
                            height={16}
                        />
                        {city?.name || ''}
                    </Typography>
                </Box>
                <Tabs value={tab} onChange={handleTabChange} variant="scrollable">
                    {TABS.map((item: any, index: number) => (
                        <Tab key={index + item.label} label={item.label} {...allyProps(index)} />
                    ))}
                </Tabs>
            </InfoWrapper>
            <TabPanel value={tab} index={0} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <CityGeneralInfo locationName={city.name} categoryInfo={city.info.statistic} />
            </TabPanel>

            <TabPanel value={tab} index={1} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <Box sx={{ height: '100vh' }}>В разработке...</Box>
            </TabPanel>
            <TabPanel value={tab} index={2} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <Box sx={{ height: '100vh' }}>В разработке...</Box>
            </TabPanel>
            <TabPanel value={tab} index={3} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <Box sx={{ height: '100vh' }}>В разработке...</Box>
            </TabPanel>
        </Box>
    )
}
const getCities = async () => ({
    data: cities,
    message: 'its ok',
    error: null,
})

const getCity = async (slug: string) => ({
    data: cities.filter((city) => city.slug === slug)[0],
    message: 'its ok',
    error: null,
})

City.getLayout = function getLayout(page: ReactElement) {
    return <CityLayout>{page}</CityLayout>
}

export async function getStaticProps({ params }: any) {
    const response = await getCity(params.slug)
    const city = response.data
    return {
        props: {
            city,
        },
    }
}

export async function getStaticPaths() {
    const contries = await getCities()

    const paths = contries.data.map((path) => ({
        params: { slug: path.slug },
    }))

    return {
        paths,
        fallback: false,
    }
}
