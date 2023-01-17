import React from 'react'
import { Typography } from '@mui/material'
import InfoWrapper from './InfoWrapper'

export default function InfoCard({ title, info, subInfo }) {
    return (
        <InfoWrapper style={{ maxWidth: '300px' }}>
            <Typography sx={{ color: '#adb5bd', fontSize: '16px' }}>{title}</Typography>
            <Typography sx={{ fontSize: '24px' }}>{info}</Typography>
            <Typography>{subInfo}</Typography>
        </InfoWrapper>
    )
}
