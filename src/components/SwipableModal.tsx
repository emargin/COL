import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { IconButton, InputAdornment, TextField, Box, Button } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'

const drawerBleeding = 32
const modalSize = 35

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window
}

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}))

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}))

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: `calc(50% - 15px)`,
}))

export default function SwipeableEdgeDrawer(props: Props) {
    const { window } = props
    const inputRef = React.useRef<HTMLDivElement | null>(null)
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined

    React.useEffect(() => {
        if (open) inputRef.current?.focus()
    }, [open])
    return (
        <Root>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(${modalSize}% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Box sx={{ textAlign: 'center', pt: 1 }}>
                <Button onClick={toggleDrawer(true)}>Open</Button>
            </Box>
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                // ModalProps={{
                //     keepMounted: true,
                // }}
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
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <TextField
                        fullWidth
                        inputRef={inputRef}
                        size="small"
                        type="number"
                        placeholder="Введите стоимость продукта"
                        InputProps={{
                            sx: { borderRadius: 3 },
                            startAdornment: <InputAdornment position="start">₽</InputAdornment>,
                            endAdornment: (
                                <IconButton
                                    sx={{
                                        width: 30,
                                        height: 30,
                                        '&:hover, &.Mui-focusVisible': { backgroundColor: 'blue' },
                                    }}
                                    aria-label="add price data"
                                >
                                    <DoneIcon sx={{}} fontSize="small" />
                                </IconButton>
                            ),
                        }}
                    />
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}
