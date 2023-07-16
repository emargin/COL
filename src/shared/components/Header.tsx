import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import CurrensySelect from '@/features/CurrensySelect'
import ThemeSwitchBtn from '@/features/ThemeSwitchBtn'

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
}

export default function Header({ hideCurrent = false }: { hideCurrent?: boolean }) {
    return (
        <Box sx={styles.root} component="header">
            <Box sx={styles.content}>
                <Link href="/" style={{ marginLeft: '8px' }}>
                    {/* <Image src={logo} alt="LOGO" width={120} height={50} /> */}
                    <Typography fontSize={24} fontWeight={800} sx={{ height: '22px' }}>
                        COL
                    </Typography>
                    <Typography variant="caption" color="primary.main" fontWeight={600}>
                        cost of living
                    </Typography>
                </Link>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <ThemeSwitchBtn />
                    {!hideCurrent && <CurrensySelect />}
                </Box>
            </Box>
        </Box>
    )
}
