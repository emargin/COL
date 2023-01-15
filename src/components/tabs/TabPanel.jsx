/* eslint-disable react/require-default-props */
import React from 'react'
import { Box } from '@mui/material'


const styles = {
    root: {
        width: '100%',
        padding: '25px 0',
    },
}

export default function TabPanel(props) {
    const { children, value, index, style, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ ...styles.root, ...style }}>{children}</Box>}
        </div>
    )
}
