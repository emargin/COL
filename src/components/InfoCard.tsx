import React from 'react'
import { Typography } from '@mui/material'
import InfoWrapper from './InfoWrapper'

const styles = {
    root: {
        maxWidth: '100%',
        flexGrow: 1,
        flexBasis: 0,
    },
}

interface InfoCardProps {
    title: string
    info: string
    subInfo?: string
}

export default function InfoCard({ title, info, subInfo = '' }: InfoCardProps) {
    return (
        <InfoWrapper style={styles.root}>
            <Typography sx={{ color: '#adb5bd', fontSize: '16px' }}>{title}</Typography>
            <Typography sx={{ fontSize: '24px' }}>{info}</Typography>
            <Typography variant="body2">{subInfo}</Typography>
        </InfoWrapper>
    )
}
