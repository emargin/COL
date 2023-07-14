import React from 'react'
import { Box } from '@mui/material'

const styles = {
    root: {
        height: '100vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    },
}

export default function RootLayout({ children }: Pick<React.HTMLAttributes<HTMLDivElement>, 'children'>) {
    return (
        <Box sx={styles.root} component="section">
            {children}
        </Box>
    )
}
