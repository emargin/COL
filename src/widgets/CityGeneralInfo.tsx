import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import InfoCard from '@/entities/InfoCard'
import AddInfoAlert from '@/features/AddInfoAlert'
import CityCategoryInfo from './CityCategoryInfo'
import { CARDS } from '@/mock'
import Histogram from '@/features/Histogram'
import InfoWrapper from '@/shared/components/InfoWrapper'
import qr from '@/shared/assets/qrcode.png'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
    },
    infoBlocks: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
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
            <CityCategoryInfo title="Жилье" rows={transport} />
        </Box>
    )
}
