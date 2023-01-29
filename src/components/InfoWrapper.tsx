import React from 'react'
import { Paper } from '@mui/material'

const styles = {
    root: {
        width: '100%',
        borderRadius: '8px',
        color: 'text.primary',
        padding: '28px 31px',
    },
}

export default function InfoWrapper({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Paper sx={styles.root} elevation={0} {...props}>
            {children}
        </Paper>
    )
}
