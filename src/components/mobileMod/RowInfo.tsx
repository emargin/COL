import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import PriceRange from '../PriceRange'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
    },
    price: {
        position: 'relative',
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
}

export default function MobileRowInfo({ name, price, onEdit, ...props }: any) {
    return (
        <Box sx={styles.root}>
            <Typography>{name}</Typography>

            <Box>
                <Box sx={styles.price}>
                    <Typography>{price}₽</Typography>
                    <IconButton sx={{ position: 'absolute', right: 3 }} onClick={onEdit}>
                        <EditIcon sx={{ width: '12px' }} />
                    </IconButton>
                </Box>

                {/* TODO: IS IT TOO BIG ? */}
                <PriceRange {...props} />
            </Box>
        </Box>
    )
}
