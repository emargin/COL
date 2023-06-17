import React from 'react'
import { Paper, PaperProps } from '@mui/material'

const styles = {
    root: {
        width: '100%',
        color: 'text.primary',
        padding: 2.5,
        '@media (max-width: 600px)': {
            p: 1.5,
        },
    },
}

export default function InfoWrapper({ children, sx = {}, ...props }: PaperProps) {
    return (
        <Paper sx={{ ...styles.root, ...sx }} elevation={0} {...props}>
            {children}
        </Paper>
    )
}
