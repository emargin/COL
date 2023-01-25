import React from 'react'

import { Box } from '@mui/material'
import Header from './Header'

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

export default function PageLayout({ children }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Box sx={styles.root} component="section">
            <Header />
            <Box sx={styles.content}>{children}</Box>
        </Box>
    )
}
