import React from 'react'

import { Box } from '@mui/material'

const styles = {
    root: {
        height: '100vh',

        // backgroundColor: '#272732',
        margin: '0 auto',
        overflowX: 'auto',
    },
    content: {
        maxWidth: '1290px',
        margin: 'auto',
    },
}

export default function PageLayout({ children }) {
    return (
        <Box sx={styles.root} variant="section">
            <Box sx={styles.content}>{children}</Box>
        </Box>
    )
}
