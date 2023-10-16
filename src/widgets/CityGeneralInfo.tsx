import React, { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import InfoCard from '@/entities/InfoCard'
import CityCategoryInfo from './CityCategoryInfo'
import { CARDS } from '@/mock'
import InfoBanner from '@/features/InfoBanner'
import MobileEditDataModal from './mobile/MobileEditDataModal'
import EditDataModal from './EditDataModal'

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
    const isMobileDevice = useMediaQuery('(max-width:600px)')
    const [editOpen, setEditOpen] = useState<boolean>(true)

    const handleEditOpen = () => {
        setEditOpen(true)
    }
    const handleEditClose = () => {
        setEditOpen(false)
    }

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
            <InfoBanner locationName={locationName} />
            <CityCategoryInfo title="Магазины" rows={market} />
            <CityCategoryInfo title="Рестораны" rows={restaurants} />
            <CityCategoryInfo title="Жилье" rows={transport} />
            {isMobileDevice ? (
                <MobileEditDataModal open={editOpen} onOpen={handleEditOpen} onClose={handleEditClose} />
            ) : (
                <EditDataModal open={editOpen} onClose={handleEditClose} />
            )}
        </Box>
    )
}
