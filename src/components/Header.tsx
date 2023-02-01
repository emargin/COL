import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box } from '@mui/material'
import ThemeSwitchBtn from './ThemeSwitchBtn'
import CurrensySelect from './CurrensySelect'

const styles = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 25px',
    },
}

export default function Header() {
    return (
        <Box sx={styles.root} component="header">
            <Link href="/">
                <Image alt="LOGO" width={24} height={24} />
            </Link>
            <Box>
                <ThemeSwitchBtn />
                <CurrensySelect />
            </Box>
        </Box>
    )
}
