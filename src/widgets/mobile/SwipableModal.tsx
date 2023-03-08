import React, { useEffect, useRef } from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { IconButton, InputAdornment, TextField, Box } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'

const drawerBleeding = 32
const modalSize = 15

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}))

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 7,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: `calc(50% - 15px)`,
}))

const styles = {
    global: {
        '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(${modalSize}% - ${drawerBleeding}px)`,
            overflow: 'visible',
        },
    },
    modalContent: {
        px: 2,
        pb: 2,
        height: '100%',
        overflow: 'auto',
    },
    applyBtn: {
        width: 30,
        height: 30,
        backgroundColor: 'blue',
    },
}

export default function SwipeableEdgeDrawer({ open, onOpen, onClose }: any) {
    const inputRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (open) inputRef.current?.focus()
    }, [open])

    return (
        <Root>
            <Global styles={styles.global} />
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onOpen={onOpen}
                onClose={onClose}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: open ? -drawerBleeding : 0,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: open ? 'visible' : 'hidden',
                        right: 0,
                        left: 0,
                        height: drawerBleeding,
                    }}
                >
                    <Puller />
                </StyledBox>
                <StyledBox sx={styles.modalContent}>
                    <TextField
                        fullWidth
                        inputRef={inputRef}
                        type="number"
                        placeholder="Введите стоимость продукта"
                        InputProps={{
                            sx: { borderRadius: 2 },
                            startAdornment: <InputAdornment position="start">₽</InputAdornment>, // get from data
                            endAdornment: (
                                <IconButton sx={styles.applyBtn} aria-label="add price data">
                                    <DoneIcon fontSize="small" />
                                </IconButton>
                            ),
                        }}
                    />
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}
