import React from 'react'
import { Box } from '@mui/material'

const styles = {
    root: {
        width: '100%',
        backgroundColor: '#272732',
        borderBottom: '#fff',
    },
}

export default function Header() {
    return <Box sx={styles.root}>Header</Box>
}
