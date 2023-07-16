import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography, useTheme } from '@mui/material'
import CurrensySelect from '@/features/CurrensySelect'
import ThemeSwitchBtn from '@/features/ThemeSwitchBtn'
import logo from '@/shared/assets/logo.svg'

const styles = {
    root: {
        width: '100%',
    },
    content: {
        margin: 'auto',
        maxWidth: '1290px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
    },
    linkContainer: {
        marginLeft: '8px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    rect: {
        zIndex: -1,
        position: 'absolute',
        borderRadius: 0.5,
    },
}

export default function Header({ hideCurrent = false }: { hideCurrent?: boolean }) {
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'
    return (
        <Box sx={styles.root} component="header">
            <Box sx={styles.content}>
                <Link href="/">
                    <Box sx={styles.linkContainer}>
                        <Image
                            alt="logo img"
                            src={logo}
                            width={36}
                            height={36}
                            style={{
                                zIndex: -1,
                                position: 'absolute',
                                borderRadius: 0.5,
                            }}
                        />
                        <Box sx={{ ml: 3.1 }}>
                            <Typography fontSize={24} fontWeight={800} sx={{ height: '22px' }}>
                                COL
                            </Typography>
                            <Typography sx={{ ml: '-4px' }} variant="caption" fontWeight={600}>
                                cost of living
                            </Typography>
                        </Box>
                    </Box>
                </Link>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <ThemeSwitchBtn />
                    {!hideCurrent && <CurrensySelect />}
                </Box>
            </Box>
        </Box>
    )
}
