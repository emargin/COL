import React from 'react'

export default function Country() {
    return (
        <>sss</>
        // <InfoWrapper style={{paddingBottom: 0}}>
        //   <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        //     <img alt="country flag img" src={flagImg.src} style={{width: '24px', height: '24px'}}/>

        //     <Typography variant="h6">Великобретания</Typography>
        //   </Box>
        //     <Tabs value={tab} onChange={handleTabChange}>
        //         {TABS.map((item, index) => (
        //             <Tab key={index + item.label} label={item.label} {...allyProps(index)} />
        //         ))}
        //     </Tabs>
        //   </InfoWrapper>
        //   <TabPanel value={tab} index={0}>
        //     <Box sx={{display: 'flex', flexDirection: 'row', gap: '25px'}}>
        //       <InfoCard title="Средняя цена похода в ресторан" info="1255р"/>
        //       <InfoCard title="Средняя продуктовая корзина" info="950р"/>
        //       <InfoCard title="В среднем тратят на досуг" info='455р'/>
        //       <InfoCard title="Средняя поездка на такси" info="155р"/>
        //     </Box>

        //   </TabPanel>

        //   <TabPanel value={tab} index={1}>
        //       {/* <ThemesImport activeCompanyId={activeCompanyId as unknown as string} /> */}
        //   </TabPanel>
    )
}

export async function getStaticPaths() {
    const posts = await (await fetch('https://example.com/posts'))?.json()

    // обратите внимание на структуру возвращаемого массива
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }))

    // `fallback: false` означает, что для ошибки 404 используется другой маршрут
    return {
        paths,
        fallback: false,
    }
}
