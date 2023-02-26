import React from 'react'
import { Box, Typography } from '@mui/material'
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
}

const userCounry = 'Малайзии'

export default function InfoCard({ title, price, pricePosition }: InfoCardProps) {
    return (
        <InfoWrapper style={styles.root}>
            {/* TODO: get color from theme */}
            <Typography sx={{ color: '#adb5bd', fontSize: '16px' }}>{title}</Typography>
            <Typography sx={{ fontSize: '24px' }}>{price}</Typography>
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
}
