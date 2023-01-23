import React from 'react'
import { Box } from '@mui/material'

const styles = {
    root: {
        width: '100%',
        background: '#32323e', // take from theme
        // background: '#fff', // white
        // background: 'background.default',
        borderRadius: '8px',
        color: 'text.primary',
        padding: '28px 31px',
    },
}

export default function InfoWrapper({ children, ...props }) {
    return (
        <Box sx={styles.root} {...props}>
            {children}
        </Box>
    )
}
