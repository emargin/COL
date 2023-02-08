import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import InfoCard from '../InfoCard'
import InfoWrapper from '../InfoWrapper'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import PriceRange from '../PriceRange'
import EditIcon from '@mui/icons-material/Edit'
import Link from 'next/link'

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    infoBlocks: {
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        flexWrap: 'wrap',
    },
    table: {
        '& .MuiDataGrid-row': {
            '&: hover': {
                '.price-btn': {
                    display: 'block',
                },
            },
        },
        '& .MuiDataGrid-cell:focus': {
            outline: 'none',
        },
    },
    priceCell: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
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
    {
        field: 'name',
        headerName: 'Название',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {params.row.name}
            </Typography>
        ),
    },
    {
        field: 'price',
        headerName: 'Цена',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            const { price } = params.row
            return (
                <Box sx={styles.priceCell}>
                    <Typography>{price}</Typography>
                    <IconButton sx={{ display: 'none' }} className="price-btn">
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Box>
            )
        },
    },
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

export default function GeneralInfo({ countryName, categoryInfo }: any) {
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
            <InfoWrapper sx={{ bgcolor: 'warning.main' }}>
                Помогите другим пушествиникам узнать цены в {countryName}!{' '}
                <Link href="">Заполните чек лист</Link> или{' '}
                <Link href="">отправьте нам фото вашего чека</Link>
            </InfoWrapper>
            <InfoWrapper>
                <Typography variant="h6">Магазины</Typography>
                <DataGrid
                    sx={styles.table}
                    autoHeight
                    rows={market}
                    columns={columns}
                    disableColumnMenu
                    disableSelectionOnClick
                    hideFooterPagination
                    hideFooterSelectedRowCount
                />
            </InfoWrapper>
            <InfoWrapper>
                <Typography variant="h6">Рестораны</Typography>
                <DataGrid
                    sx={styles.table}
                    autoHeight
                    rows={restaurants}
                    columns={columns}
                    disableColumnMenu
                    disableSelectionOnClick
                    hideFooterPagination
                    hideFooterSelectedRowCount
                />
            </InfoWrapper>
            <InfoWrapper>
                <Typography variant="h6">Транспорт</Typography>
                <DataGrid
                    sx={styles.table}
                    autoHeight
                    rows={transport}
                    columns={columns}
                    disableColumnMenu
                    disableSelectionOnClick
                    hideFooterPagination
                    hideFooterSelectedRowCount
                />
            </InfoWrapper>
        </Box>
    )
}
