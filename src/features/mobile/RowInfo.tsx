import React, { useRef, useState } from 'react'
import { Box, Collapse, Divider, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PriceRange from '@/entities/PriceRange'
import PricePosition from '@/entities/PricePosition'

const styles = {
    root: {
        height: '50px',
        width: '100%',
        bgcolor: 'warning.main',
        position: 'relative',
        zIndex: 1,
    },
    row: {
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        bgcolor: 'background.paper',
        animation: 'border 1s ease-in-out',
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
    const rowRef = useRef<HTMLDivElement | null>(null)
    let startX = 0
    let startY = 0
    let endX = 0

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const cRowRef = rowRef.current
        if (!cRowRef) {
            return
        }
        // if scroll
        if (Math.abs(e.changedTouches[0].clientY - startY) > 10) {
            return
        }
        const pathX = e.changedTouches[0].clientX - startX
        // disable right to left swipe
        if (pathX < 0) {
            return
        }

        cRowRef.style.borderRadius = '8px 0 0 8px'
        cRowRef.style.transitionProperty = 'border-radius'
        console.log('pathX', pathX)
        cRowRef.style.transform = `translateX(${pathX}px)`
        if (cRowRef.clientWidth / pathX < 2) {
            onEdit()
        }
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const cRowRef = rowRef.current
        if (!cRowRef) {
            return
        }
        startX = e.changedTouches[0].clientX
        startY = e.changedTouches[0].clientY
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const cRowRef = rowRef.current
        if (!cRowRef) {
            return
        }
        cRowRef.style.transition = 'transform .5s ease-in-out'
        cRowRef.style.transform = `translateX(0px)`
        cRowRef.style.borderRadius = '0'
    }
    return (
        <Box sx={styles.root}>
            <EditIcon fontSize="small" sx={{ position: 'absolute', zIndex: -1, top: '30%', left: '10%' }} />
            <Box
                sx={styles.row}
                ref={rowRef}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <Typography sx={styles.title}>{name}</Typography>
                <Divider sx={{ flexGrow: 3 }} variant="middle" />
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box sx={styles.price}>
                        <Typography>{price}₽</Typography>
                        {/* <PricePosition position={1} percent="30%" /> */}
                    </Box>
                    <Box sx={styles.price}>
                        <PricePosition position={2} percent="55%" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
