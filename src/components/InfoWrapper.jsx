import React from 'react'
import { Box } from '@mui/material'


const styles = {
    root: {
        background: '#32323e',
        borderRadius: '8px',
        color: '#fff',
        padding: '28px 31px'
    }
}

export default function InfoWrapper({children, ...props}) {
  return (
    <Box sx={styles.root} {...props}>{children}</Box>
  )
}
