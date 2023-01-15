import React from 'react'


import { Box } from '@mui/material'

const styles = {
    root: {
      height: '100vh',
      backgroundColor:'#272732',
    },
}

export default function PageLayout({children}) {
  return (    
    <Box sx={styles.root} variant="main">{children}</Box>
  )
}
