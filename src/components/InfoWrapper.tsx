import React from 'react'
import { Paper, PaperProps } from '@mui/material'

const styles = {
    root: {
        width: '100%',
        color: 'text.primary',
        padding: '28px 31px',
    },
}

export default function InfoWrapper({ children, sx, ...props }: PaperProps) {
    return (
        <Paper sx={[styles.root, sx]} elevation={0} {...props}>
            {children}
        </Paper>
    )
}
