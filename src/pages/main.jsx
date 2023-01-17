import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Typography, Tabs, Tab } from '@mui/material'
import PageLayout from '../components/PageLayout'
import InfoWrapper from '../components/InfoWrapper'
import InfoCard from '../components/InfoCard'
import { TabPanel, allyProps } from '../components/tabs'
import flagImg from '../assets/united-kingdom.png'

const TABS = [{ label: 'Магазины' }, { label: 'Жилье' }, { label: 'Рестараны' }, { label: 'Транспорт' }]

export default function Main() {
    console.log('flagImg', flagImg)

    const [tab, setTab] = useState(0)
    const handleTabChange = (event, newTab) => {
        setTab(newTab)
    }
    return (
        <PageLayout>
            <InfoWrapper style={{ paddingBottom: 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image alt="country flag img" src={flagImg.src} width={24} height={24} />

                    <Typography variant="h6">Великобретания</Typography>
                </Box>
                <Tabs value={tab} onChange={handleTabChange}>
                    {TABS.map((item, index) => (
                        <Tab key={index + item.label} label={item.label} {...allyProps(index)} />
                    ))}
                </Tabs>
            </InfoWrapper>
            <TabPanel value={tab} index={0}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '25px' }}>
                    <InfoCard title="Средняя цена похода в ресторан" info="1255р" />
                    <InfoCard title="Средняя продуктовая корзина" info="950р" />
                    <InfoCard title="В среднем тратят на досуг" info="455р" />
                    <InfoCard title="Средняя поездка на такси" info="155р" />
                </Box>
            </TabPanel>

            <TabPanel value={tab} index={1}>
                <>sss</>
            </TabPanel>
        </PageLayout>
    )
}
