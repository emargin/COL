import React, { ReactElement, useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Typography, Tabs, Tab, IconButton } from '@mui/material'
import { cities, citiesSlugs } from '@/mock'
import InfoWrapper from '@/shared/components/InfoWrapper'
import { TabPanel, allyProps } from '@/shared/components/tabs'

import { CityLayout } from '@/layouts'
import CityGeneralInfo from '@/widgets/CityGeneralInfo'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useLocale } from '@/shared/utils'
import { initializeStore } from '@/shared/store/store'
import { useRouter } from 'next/navigation'

type IContry = any

const TABS = [
    { label: 'general' },
    { label: 'products' },
    { label: 'housing' },
    { label: 'restaurants' },
    { label: 'transport' },
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
    placeLabel: {
        width: '100%',
        height: '2px',
    },
    tabs: {
        '& .MuiTabs-indicator': {
            display: 'none',
        },
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
        general: 'Oбщие',
        products: 'Продукты',
        housing: 'Жилье',
        restaurants: 'Рестараны',
        transport: 'Транспорт',
    },
    en: {
        general: 'General',
        products: 'Products',
        housing: 'Housing',
        restaurants: 'Restaurants',
        transport: 'Transport',
    },
}
export default function City({ placeFrom, placeTo, summery, city }: any) {
    const router = useRouter()
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
    const handleSwapLocations = () => {
        if (placeFrom?.name && placeTo?.name) {
            router.push(`/city/${placeTo.name.toLowerCase()}|${placeFrom.name.toLowerCase()}`)
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
                    <Typography variant="h5">
                        {placeFrom?.name || ''}
                        <Box sx={[styles.placeLabel, { bgcolor: 'other.hist1' }]} />
                    </Typography>
                    <IconButton sx={styles.swapButton} onClick={handleSwapLocations}>
                        <ArrowForwardIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="h5">
                        {placeTo?.name || ''}
                        <Box sx={[styles.placeLabel, { bgcolor: 'other.hist2' }]} />
                    </Typography>
                </Box>
                <Tabs value={tab} onChange={handleTabChange} variant="scrollable" sx={styles.tabs}>
                    {TABS.map((item: any, index: number) => (
                        <Tab key={index + item.label} label={t(item.label)} {...allyProps(index)} />
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
const getCitieSlugs = async () => ({
    data: citiesSlugs,
    message: 'its ok',
    error: null,
})

const getCity = async (slug: string) => ({
    data: cities.filter((city) => city.slug === slug)[0],
    message: 'its ok',
    error: null,
})

City.getLayout = function getLayout(page: ReactElement) {
    const { props } = page
    return (
        <CityLayout placeFrom={props.placeFrom.name} placeTo={props.placeTo.name}>
            {page}
        </CityLayout>
    )
}

export const getServerSideProps = async ({ params }: any) => {
    const zustandStore = initializeStore()
    const state = zustandStore.getState()
    const places = params.slug.split('|')

    const placeFrom = await state.getPlaceByName({ placeName: places[0], direction: 'placeFrom' })
    const placeTo = await state.getPlaceByName({ placeName: places[1], direction: 'placeTo' })
    let summeryResponse
    if (placeFrom?.id && placeTo?.id) {
        summeryResponse = await state.getSummary({ placeId: placeFrom.id, comparedPlaceId: placeTo.id })
    }
    const response = await getCity(params.slug)
    const city = response.data
    return {
        props: {
            city,
            placeFrom,
            placeTo,
            summery: summeryResponse,
        },
    }
}
