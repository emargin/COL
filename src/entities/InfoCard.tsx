import React, { useEffect, useState } from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'

import PricePosition from './PricePosition'
import InfoWrapper from '@/shared/components/InfoWrapper'

// EXPORT TO @TYPES

interface InfoCardProps {
    title: string
    price: string
    pricePosition: any
}

const styles = {
    root: {
        maxWidth: '100%',
        flexGrow: 1,
        flexBasis: 0,
    },

    subTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'cetner',
    },
    priceWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    price: { fontSize: 24 },
}

const userCounry = 'Малайзии'

const MobileCard = ({ title, price, pricePosition }: InfoCardProps) => (
    <InfoWrapper sx={styles.root}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {title}
        </Typography>
        <Box sx={styles.priceWrapper}>
            <Typography sx={styles.price}>{price}₽</Typography>
            <PricePosition position={pricePosition.position} percent={pricePosition.percent} />
        </Box>
    </InfoWrapper>
)

const DesktopCard = ({ title, price, pricePosition }: InfoCardProps) => (
    <InfoWrapper sx={styles.root}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {title}
        </Typography>
        <Typography sx={styles.price}>{price}₽</Typography>
        <Box sx={styles.subTitle}>
            <Typography variant="body2">На</Typography>
            <PricePosition position={pricePosition.position} percent={pricePosition.percent} />
            <Typography variant="body2">{`чем в ${userCounry}`}</Typography>
        </Box>
    </InfoWrapper>
)

export default function InfoCard(props: InfoCardProps) {
    const isMobileDevice = useMediaQuery('(max-width:600px)')
    const [hideOnMobile, setHideOnMobile] = useState(false)

    // TODO: ADD SSR CHECKING USER GADGET
    useEffect(() => {
        setHideOnMobile(isMobileDevice)
    }, [isMobileDevice])
    // TODO: REWORK APP TO MOBILE FIRST
    return hideOnMobile ? <MobileCard {...props} /> : <DesktopCard {...props} />
}
