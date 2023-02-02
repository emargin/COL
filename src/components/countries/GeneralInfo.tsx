import React from 'react'
import { Box, Typography } from '@mui/material'
import InfoCard from '../InfoCard'
import InfoWrapper from '../InfoWrapper'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import PriceRange from '../PriceRange'

const styles = {
    root: {},
    infoBlocks: {
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        flexWrap: 'wrap',
        mb: 3,
    },
    infoTables: {
        display: 'flex',
        gap: '24px',

        flexDirection: 'column',
    },
}

export enum PricePosition {
    UPPER = 1,
    LOWER = 2,
}

const CARDS = [
    {
        id: 1,
        title: 'Похода в ресторан',
        price: '1255р',
        pricePosition: {
            position: 1,
            percent: '13%',
        },
    },
    {
        id: 2,
        title: 'Продуктовая корзина',
        price: '950р',
        pricePosition: {
            position: 1,
            percent: '48%',
        },
    },
    {
        id: 3,
        title: 'Тратят на досуг',
        price: '455р',
        pricePosition: {
            position: 2,
            percent: '62%',
        },
    },
    {
        id: 4,
        title: 'Поездка на такси',
        price: '155р',
        pricePosition: {
            position: 2,
            percent: '74%',
        },
    },
]

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'name', headerName: 'Название', flex: 1 },
    { field: 'price', headerName: 'Цена', flex: 1 },
    {
        field: 'priceRange',
        headerName: 'Диапозон цен',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            const { min, max } = params.row.priceRange
            const currentPrice = params.row.price
            return <PriceRange min={min} max={max} current={currentPrice} />
        },
    },
]

export default function GeneralInfo({ categoryInfo }: any) {
    const { restaurants, market, transport } = categoryInfo
    return (
        <Box sx={styles.root}>
            <Box sx={styles.infoBlocks}>
                {CARDS.map((card) => (
                    <InfoCard
                        key={`${card.id}-${card.title}`}
                        title={card.title}
                        price={card.price}
                        pricePosition={card.pricePosition}
                    />
                ))}
            </Box>
            <Box sx={styles.infoTables}>
                <InfoWrapper>
                    <Typography variant="h6">Магазины</Typography>
                    <DataGrid autoHeight rows={market} columns={columns} />
                </InfoWrapper>
                <InfoWrapper>
                    <Typography variant="h6">Рестораны</Typography>
                    <DataGrid autoHeight rows={restaurants} columns={columns} />
                </InfoWrapper>
                <InfoWrapper>
                    <Typography variant="h6">Транспорт</Typography>
                    <DataGrid autoHeight rows={transport} columns={columns} />
                </InfoWrapper>
            </Box>
        </Box>
    )
}
