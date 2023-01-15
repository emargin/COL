import React, {useState} from 'react'
import { Box,Typography, Tabs, Tab } from '@mui/material'
import PageLayout from '../components/PageLayout'
import InfoWrapper from '../components/InfoWrapper'
import {TabPanel, allyProps} from '../components/tabs'

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

const TABS = [{ label: 'Магазины' }, { label: 'Жилье'}, { label: 'Рестараны'}, { label: 'Транспорт'}]

export default function Main() {

  const [tab, setTab] = useState(0)
  const handleTabChange = (event, newTab) => {
    setTab(newTab)
}
  return (
    <PageLayout>
      <Typography  sx={styles.title} variant="h1">
        <Typography sx={styles.mainText} variant="span">
          Простой и удобный 
        </Typography> <br/>
        сравненивайте цены в разных странах мира
      </Typography>
      <Tabs value={tab} onChange={handleTabChange}>
          {TABS.map((item, index) => (
              <Tab key={index + item.label} label={item.label} {...allyProps(index)} />
          ))}
      </Tabs>

      <InfoWrapper>
      <TabPanel value={tab} index={0}>
                    {/* <ThemesEdit activeCompanyId={activeCompanyId as unknown as string} /> */}
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    {/* <ThemesImport activeCompanyId={activeCompanyId as unknown as string} /> */}
                </TabPanel>
      </InfoWrapper>
    </PageLayout>
  )
}
