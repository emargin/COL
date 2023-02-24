import React, { ReactElement, useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Typography, Tabs, Tab } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { cities } from '@/mock'
import PageLayout from '@/layouts/PageLayout'
import InfoWrapper from '@/components/InfoWrapper'
import InfoCard from '@/components/InfoCard'
import { TabPanel, allyProps } from '@/components/tabs'
import flagImg from '@/assets/united-kingdom.png'
import GeneralInfo from '@/components/GeneralInfo'
import CityLayout from '@/layouts/CityLayout'

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

    const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
        setTab(newTab)
    }

    return (
        <Box sx={styles.root}>
            <InfoWrapper style={{ paddingBottom: 0 }}>
                <Box sx={styles.country}>
                    <Image alt="country flag img" src={flagImg.src} width={24} height={24} />
                    <Typography variant="h6">{city?.name || ''}</Typography>
                </Box>
                <Tabs value={tab} onChange={handleTabChange}>
                    {TABS.map((item, index) => (
                        <Tab key={index + item.label} label={item.label} {...allyProps(index)} />
                    ))}
                </Tabs>
            </InfoWrapper>
            <TabPanel value={tab} index={0} style={{ padding: 0 }}>
                <GeneralInfo countryName={city.name} categoryInfo={city.info.statistic} />
            </TabPanel>

            <TabPanel value={tab} index={1}>
                <>В разработке....</>
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
