import React, { useEffect } from 'react'
import Link from 'next/link'
import { Alert, Box, Button, IconButton, SwipeableDrawer, Typography, useMediaQuery } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

import EditIcon from '@mui/icons-material/Edit'

import InfoCard from '@/components/InfoCard'
import InfoWrapper from '@/components/InfoWrapper'
import PriceRange from '@/components/PriceRange'
import { MobileDataDrawer } from '@/components/mobileMod'
import InfoAlert from './InfoAlert'

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

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
    },
    infoBlocks: {
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
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

export default function GeneralInfo({ locationName, categoryInfo }: any) {
    const { restaurants, market, transport } = categoryInfo
    const isMobileDevice = useMediaQuery('(max-width:600px)')

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
            <InfoAlert locationName={locationName} />
            <InfoWrapper>
                <Typography variant="h6">Магазины</Typography>
                {/* MOBILE VARIANT */}
                {isMobileDevice && <MobileDataDrawer rows={market} />}
                {/* DESCKTOP VARIANT */}
                {!isMobileDevice && (
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
                )}
            </InfoWrapper>
            <InfoWrapper>
                <Typography variant="h6">Рестораны</Typography>
                {isMobileDevice && <MobileDataDrawer rows={restaurants} />}
                {!isMobileDevice && (
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
                )}
            </InfoWrapper>
            <InfoWrapper>
                <Typography variant="h6">Транспорт</Typography>
                {isMobileDevice && <MobileDataDrawer rows={transport} />}
                {!isMobileDevice && (
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
                )}
            </InfoWrapper>
        </Box>
    )
}
