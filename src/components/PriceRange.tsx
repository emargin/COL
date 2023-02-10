import React from 'react'
import { Box, Tooltip, Typography } from '@mui/material'

interface PriceRangeProps {
    max: number
    min: number
    current: number
}

const styles = {
    root: {
        width: '60px',
        borderRadius: '6px',
        padding: '3px 10px',
        fontSize: '12px',
        position: 'relative',
        color: '#619E64',
        border: '1px solid #619E64',
    },
    bg: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        top: 0,
        right: 0,
        width: '100%',
        backgroundColor: 'rgba(46, 125, 50, 0.12)',
    },
    position: {
        width: '1px',
        height: '100%',
        border: '1px solid #619E64',
    },
}

const Range = ({ position }: { position: number }) => (
    <Box sx={styles.root}>
        <Box sx={styles.bg} />
        <Box
            sx={{
                width: '1px',
                height: '100%',
                border: '1px solid #619E64',
                marginLeft: `${position}%`,
            }}
        />
    </Box>
)

export default function PriceRange({ max, min, current }: PriceRangeProps) {
    console.log('current/max', (current / max) * 10)
    return (
        <Tooltip title={`Средняя цена ${current}`} disableInteractive>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '8px',
                    height: '5px',
                }}
            >
                <Typography variant="caption" sx={{ color: 'GrayText' }}>
                    {' '}
                    {min}
                </Typography>
                <Range position={(current / max) * 100} />
                <Typography variant="caption" sx={{ color: 'GrayText' }}>
                    {' '}
                    {max}
                </Typography>
            </Box>
        </Tooltip>
    )
}
