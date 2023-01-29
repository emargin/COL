import React from 'react'
import { Box, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp' // TODO: FIND SVG ANR REMOVE MUI/ICONS LIB
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import InfoWrapper from './InfoWrapper'
import { PricePosition } from './countries/GeneralInfo'

const styles = {
    root: {
        maxWidth: '100%',
        flexGrow: 1,
        flexBasis: 0,
    },
}

interface InfoCardProps {
    title: string
    price: string
    pricePosition: any
}

const userCounry = 'Малайзии'

export default function InfoCard({ title, price, pricePosition }: InfoCardProps) {
    return (
        <InfoWrapper style={styles.root}>
            {/* TODO: get color from theme */}
            <Typography sx={{ color: '#adb5bd', fontSize: '16px' }}>{title}</Typography>
            <Typography sx={{ fontSize: '24px' }}>{price}</Typography>
            {/* <Box
                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'cetner' }}
            >
                <Typography variant="body2">На</Typography>

                {pricePosition.position === PricePosition.LOWER ? (
                    <Typography variant="body2" sx={{ color: 'red', mt: 'auto', mb: 'auto' }}>
                        <ArrowDropDownIcon /> {pricePosition.percent}
                    </Typography>
                ) : (
                    <Typography variant="body2" sx={{ color: 'green' }}>
                        <ArrowDropUpIcon /> {pricePosition.percent}{' '}
                    </Typography>
                )}
                <Typography variant="body2">{`чем в ${userCounry}`}</Typography>
            </Box> */}
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                На
                {pricePosition.position === PricePosition.LOWER ? (
                    <>
                        <ArrowDropDownIcon sx={{ color: 'red' }} /> {pricePosition.percent}
                    </>
                ) : (
                    <>
                        <ArrowDropUpIcon sx={{ color: 'green' }} /> {pricePosition.percent}
                    </>
                )}
                {` чем в ${userCounry}`}
            </Typography>
        </InfoWrapper>
    )
}
