import React, {useState} from 'react'
import { Box,Typography, Tabs, Tab } from '@mui/material'
import PageLayout from '../components/PageLayout'
import InfoWrapper from '../components/InfoWrapper'
import InfoCard from '../components/InfoCard'
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


      <InfoWrapper style={{paddingBottom: 0}}>      
      <Tabs value={tab} onChange={handleTabChange}>
          {TABS.map((item, index) => (
              <Tab key={index + item.label} label={item.label} {...allyProps(index)} />
          ))}
      </Tabs>
      </InfoWrapper>
      <TabPanel value={tab} index={0}>
        <Box sx={{display: 'flex', flexDirection: 'row', gap: '25px'}}>
          <InfoCard title="Средняя цена похода в ресторан" info="1255р"/>
          <InfoCard title="Средняя продуктовая корзина" info="950р"/>
          <InfoCard title="В среднем тратят на досуг" info='455р'/>
          <InfoCard title="Средняя поездка на такси" info="155р"/>
        </Box>
      
      </TabPanel>


      
      <TabPanel value={tab} index={1}>
          {/* <ThemesImport activeCompanyId={activeCompanyId as unknown as string} /> */}
      </TabPanel>
      
    </PageLayout>
  )
}
