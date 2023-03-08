import React from 'react'
import { Box } from '@mui/material'
import InfoCard from '@/entities/InfoCard'
import CityCategoryInfo from '@/features/CityCategoryInfo'
import AddInfoAlert from '@/features/AddInfoAlert'

const CARDS = [
    {
        id: 1,
        title: 'Поход в ресторан',
        price: '1255',
        pricePosition: {
            position: 1,
            percent: '13%',
        },
    },
    {
        id: 2,
        title: 'Продуктовая корзина',
        price: '950',
        pricePosition: {
            position: 1,
            percent: '48%',
        },
    },
    {
        id: 3,
        title: 'Тратят на досуг',
        price: '455',
        pricePosition: {
            position: 2,
            percent: '62%',
        },
    },
    {
        id: 4,
        title: 'Поездка на такси',
        price: '155',
        pricePosition: {
            position: 2,
            percent: '74%',
        },
    },
]

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    infoBlocks: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        flexWrap: 'wrap',
    },
}

export default function GeneralInfo({ locationName, categoryInfo }: any) {
    const { restaurants, market, transport } = categoryInfo

    return (
        <Box sx={styles.root}>
            <Box sx={styles.infoBlocks}>
                {CARDS.map((card) => (
                    <InfoCard
                        key={`${card.id}-${card.title}`}
                        title={card.title}
                        price={card.price}
                        pricePosition={card.pricePosition}
                    />
                ))}
            </Box>
            <AddInfoAlert locationName={locationName} />
            <CityCategoryInfo title="Магазины" rows={market} />
            <CityCategoryInfo title="Рестораны" rows={restaurants} />
            <CityCategoryInfo title="Магазины" rows={transport} />
        </Box>
    )
}
