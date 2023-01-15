import React from 'react'
import { Box,Typography } from '@mui/material'
import PageLayout from '../components/PageLayout'
import InfoWrapper from '../components/InfoWrapper'

const styles = {
  root: {
    height: '100vh',
    backgroundColor:'#32323e',
  },
  title: {
    fontSize: '3.8rem',
    fontWeight: 700,
    lineHeight: '1.2',  
    color: '#fff',
    maxWidth: 900
  },
  mainText: {
    backgroundColor: '#2AA5A0',
    backgroundImage: 'linear-gradient(90deg,#00aff5,#9a6afa)',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  }
}



export default function Main() {
  return (
    <PageLayout>
      <Typography  sx={styles.title} variant="h1">
        <Typography sx={styles.mainText} variant="span">
          Простой и удобный 
        </Typography> <br/>
        сравненивайте цены в разных странах мира
      </Typography>

      <InfoWrapper>
        dsads
      </InfoWrapper>
    </PageLayout>
  )
}
