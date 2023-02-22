import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Paper } from '@mui/material'
import ThemeSwitchBtn from './ThemeSwitchBtn'
import CurrensySelect from './CurrensySelect'

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

export default function Header() {
    return (
        <Box sx={styles.root} component="header">
            <Box sx={styles.content}>
                <Link href="/">
                    <Image src="" alt="LOGO" width={24} height={24} />
                </Link>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <ThemeSwitchBtn />
                    <CurrensySelect />
                </Box>
            </Box>
        </Box>
    )
}
