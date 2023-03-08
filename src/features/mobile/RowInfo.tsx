import React, { useState } from 'react'
import { Box, Collapse, Divider, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PriceRange from '@/entities/PriceRange'
import PricePosition from '@/entities/PricePosition'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '50px',
        width: '100%',
        cursor: 'pointer',
    },
    title: {
        flexGrow: 1,
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
    const [extroInfoOpen, setExtroInfoOpen] = useState(false)
    return (
        <>
            <Box sx={styles.root} onClick={() => setExtroInfoOpen((prev) => !prev)}>
                {extroInfoOpen && <KeyboardArrowUpIcon />}
                {!extroInfoOpen && <KeyboardArrowDownIcon />}
                <Typography sx={styles.title}>{name}</Typography>
                <Divider sx={{ flexGrow: 3 }} variant="middle" />
                <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Box sx={styles.price}>
                        <Typography>{price}₽</Typography>
                        {/* <PricePosition position={1} percent="30%" /> */}
                    </Box>
                    <Box sx={styles.price}>
                        <PricePosition position={2} percent="55%" />
                    </Box>
                </Box>
            </Box>
            <Collapse in={extroInfoOpen}>
                <Box sx={{ display: 'flex', height: '210px' }}>
                    <PriceRange {...props} />
                </Box>
            </Collapse>
        </>
    )
}
