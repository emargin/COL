import React, { useEffect, useRef, useState } from 'react'
import { Box, Collapse, Divider, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import PricePosition from '@/entities/PricePosition'
import { truncate } from 'fs'

const styles = {
    root: {
        height: '50px',
        width: '100%',
        bgcolor: 'warning.main',
        position: 'relative',
        zIndex: 1,
        transition: 'opacity .3s',
    },
    icon: {
        position: 'absolute',
        zIndex: -1,
        top: '30%',
        left: '10%',
    },
    row: {
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        bgcolor: 'background.paper',
        transiton: 'transform .5s ease-in-out',
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

export default function MobileRowInfo({ name, price, onEdit, isFirst, ...props }: any) {
    const [extroInfoOpen, setExtroInfoOpen] = useState(false)
    const bgRowRef = useRef<HTMLDivElement | null>(null)
    const rowRef = useRef<HTMLDivElement | null>(null)
    const isReadyToEdit = useRef<boolean>(false)
    let startX = 0
    let startY = 0

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const cRowRef = rowRef.current
        const cBgRowRef = bgRowRef.current
        if (!cRowRef || !cBgRowRef) {
            return
        }
        // disable while scroll
        if (Math.abs(e.changedTouches[0].clientY - startY) > 12) {
            return
        }
        const pathX = e.changedTouches[0].clientX - startX
        const pathToEdit = cRowRef.clientWidth / pathX < 3
        const maxPathX = cRowRef.clientWidth / pathX < 2

        // disable right to left swipe
        if (pathX < 0) {
            return
        }

        cRowRef.style.borderRadius = '8px 0 0 8px'
        cRowRef.style.transitionProperty = 'border-radius'
        if (!maxPathX) {
            cRowRef.style.transform = `translateX(${pathX}px)`
        }
        if (pathToEdit) {
            cBgRowRef.style.opacity = '0.8'
            isReadyToEdit.current = true
        } else {
            cBgRowRef.style.opacity = '1'
            isReadyToEdit.current = false
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
        if (isReadyToEdit.current) {
            onEdit()
        }
        setExtroInfoOpen(false)
        cRowRef.style.transition = 'transform .5s ease-in-out'
        cRowRef.style.transform = `translateX(0px)`
        cRowRef.style.borderRadius = '0'
    }

    const showOnbording = () => {
        const cRowRef = rowRef.current
        if (!cRowRef || !isFirst) {
            return
        }
        cRowRef.style.transition = 'transform .5s ease-in-out'
        cRowRef.style.transform = `translateX(80px)`
        setTimeout(() => {
            cRowRef.style.transform = `translateX(0px)`
        }, 400)
    }

    useEffect(() => {
        setInterval(() => {
            requestAnimationFrame(() => {
                showOnbording()
            })
        }, 7000)
    }, [])

    return (
        <Box sx={styles.root} ref={bgRowRef}>
            <EditIcon fontSize="small" sx={styles.icon} />
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
