import React from 'react'
import { Box, Typography } from '@mui/material'
import PriceRange from './PriceRange'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
    },
}

export default function MobileRowInfo({ name, price, ...props }: any) {
    return (
        <Box sx={styles.root}>
            <Typography>{name}</Typography>
            <Box sx={{ textAlign: 'center' }}>
                <Typography>{price}₽</Typography>
                {/* TODO: IS IT TOO BIG ? */}
                <PriceRange {...props} />
            </Box>
        </Box>
    )
}
