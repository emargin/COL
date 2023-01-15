import React from 'react'
import { Box } from '@mui/material'


const styles = {
    root: {
        background: '#32323e',
        borderRadius: '8px',
        color: '#fff',
    }
}

export default function InfoWrapper({children}) {
  return (
    <Box sx={styles.root}>{children}</Box>
  )
}