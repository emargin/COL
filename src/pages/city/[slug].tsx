import React, { ReactElement, useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Typography, Tabs, Tab, IconButton } from '@mui/material'
import { cities } from '@/mock'
import InfoWrapper from '@/components/InfoWrapper'
import InfoCard from '@/components/InfoCard'
import { TabPanel, allyProps } from '@/components/tabs'
import flagImg from '@/assets/united-kingdom.png'

import { CityLayout } from '@/layouts'
import { GeneralInfo } from '@/components/city'

import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

type IContry = any

const TABS = [
    { label: 'Общие' },
    { label: 'Магазины' },
    { label: 'Жилье' },
    { label: 'Рестараны' },
    { label: 'Транспорт' },
]

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        p: 2,
    },
    country: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
    },
}

export default function City({ city }: IContry) {
    const [tab, setTab] = useState<number>(0)
    let startX = 0
    let endX = 0

    const handleTabChange = (_: unknown, newTab: number) => {
        setTab(newTab)
    }

    const checkDirection = () => {
        const swipeSize = Math.abs(endX - startX)
        if (swipeSize < 80) return
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
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography variant="h6">
                            {/* Из */}
                            <Image
                                alt="country flag img"
                                style={{ margin: '0 8px' }}
                                src={flagImg.src}
                                width={16}
                                height={16}
                            />
                            {city?.name || ''}
                        </Typography>
                        <ArrowRightAltIcon fontSize="small" sx={{ color: 'text.secondary', m: '0 10px' }} />
                        <Typography variant="h6">
                            <Image
                                alt="country flag img"
                                style={{ margin: '0 8px' }}
                                src={flagImg.src}
                                width={16}
                                height={16}
                            />
                            Малайзиа
                        </Typography>
                        <IconButton sx={{ height: '35px', width: '35px', textAlign: 'center' }}>
                            <SwapHorizIcon fontSize="small" />
                        </IconButton>

                        {/* <Typography variant="h6">{`Из ${city?.name || ''} в ${city?.name || ''}`}</Typography> */}
                        {/* <Box sx={{ height: '1px', background: 'black', m: 2, width: 30 }} /> */}
                        {/* <Typography variant="h6">{city?.name || ''}</Typography> */}
                    </Box>
                </Box>
                <Tabs value={tab} onChange={handleTabChange} variant="scrollable">
                    {TABS.map((item, index) => (
                        <Tab key={index + item.label} label={item.label} {...allyProps(index)} />
                    ))}
                </Tabs>
            </InfoWrapper>
            <TabPanel value={tab} index={0} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                <GeneralInfo locationName={city.name} categoryInfo={city.info.statistic} />
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
