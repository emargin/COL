/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Typography } from '@mui/material'
const styles = {
    root: {
        width: '100%',
        padding: '18px',
    },
    emptyMessage: {
        minHeight: '450px',
        height: 'auto',
        color: 'rgba(0, 0, 0, 0.38)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}


export default function TabContent({
    style,
    empty = false,
    emptyMessage,
    children,
}) {
    return (
        <Card sx={styles.root}>
            {empty ? (
                <Typography sx={styles.emptyMessage} paragraph>
                    {emptyMessage}
                </Typography>
            ) : (
                children
            )}
        </Card>
    )
}
