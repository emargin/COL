import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp' // TODO: FIND SVG ANR REMOVE MUI/ICONS LIB
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import InfoWrapper from './InfoWrapper'
import { PricePosition } from './city/GeneralInfo'
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

    subTitle: { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'cetner' },
    priceWrapper: { display: 'flex', alignItems: 'center' },
    price: { fontSize: 24 },
}

const userCounry = 'Малайзии'

const MobileCard = ({ title, price, pricePosition }: InfoCardProps) => (
    <InfoWrapper sx={styles.root}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {title}
        </Typography>
        <Box sx={styles.priceWrapper}>
            <Typography sx={styles.price}>{price}</Typography>
            {pricePosition.position === PricePosition.LOWER ? (
                <Typography variant="body2" sx={{ color: 'error.main', display: 'flex', mr: 0.5 }}>
                    <ArrowDropDownIcon fontSize="small" /> {pricePosition.percent}
                </Typography>
            ) : (
                <Typography variant="body2" sx={{ color: 'success.main', display: 'flex', mr: 0.5 }}>
                    <ArrowDropUpIcon fontSize="small" /> {pricePosition.percent}
                </Typography>
            )}
        </Box>
    </InfoWrapper>
)

const DesktopCard = ({ title, price, pricePosition }: InfoCardProps) => (
    <InfoWrapper sx={styles.root}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {title}
        </Typography>
        <Typography sx={styles.price}>{price}</Typography>
        <Box sx={styles.subTitle}>
            <Typography variant="body2">На</Typography>

            {pricePosition.position === PricePosition.LOWER ? (
                <Typography variant="body2" sx={{ color: 'error.main', display: 'flex', mr: 0.5 }}>
                    <ArrowDropDownIcon fontSize="small" /> {pricePosition.percent}
                </Typography>
            ) : (
                <Typography variant="body2" sx={{ color: 'success.main', display: 'flex', mr: 0.5 }}>
                    <ArrowDropUpIcon fontSize="small" /> {pricePosition.percent}
                </Typography>
            )}
            <Typography variant="body2">{`чем в ${userCounry}`}</Typography>
        </Box>
    </InfoWrapper>
)

export default function InfoCard(props: InfoCardProps) {
    const isMobileDevice = useMediaQuery('(max-width:600px)')
    return isMobileDevice ? <MobileCard {...props} /> : <DesktopCard {...props} />
}
