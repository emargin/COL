import React from 'react'
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import { MobileDataDrawer } from '@/shared/components/mobileMod'
import InfoWrapper from '@/shared/components/InfoWrapper'
import PricePosition from '@/entities/PricePosition'

const styles = {
    table: {
        '& .customHeader': {
            fontWeight: 600,
        },
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
        gap: '8px',
    },
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    {
        field: 'name',
        headerName: 'Название',
        headerClassName: 'customHeader',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => (
            <Typography variant="body2">{params.row.name}</Typography>
        ),
    },
    {
        field: 'price',
        headerName: 'Цена',
        type: 'number',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            const { price } = params.row
            return (
                <Box sx={styles.priceCell}>
                    <Typography variant="body2">{price}₽</Typography>
                    <IconButton sx={{ display: 'none' }} className="price-btn">
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Box>
            )
        },
    },
    {
        field: 'price_1',
        headerName: 'Цена_1',
        type: 'number',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
            const { price } = params.row
            return (
                <Box sx={styles.priceCell}>
                    <Typography variant="body2">{price}₽</Typography>
                    <IconButton className="price-btn" sx={{ display: 'none' }}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Box>
            )
        },
    },
    {
        field: 'priceRange',
        headerName: 'Разница в цене',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        renderCell: (params: GridRenderCellParams) => (
            <PricePosition variant="body2" position={1} percent="20%" />
        ),
    },
]

export default function CityCategoryInfo(props: any) {
    const { rows } = props
    const isMobileDevice = useMediaQuery('(max-width:600px)')
    return (
        <InfoWrapper>
            <Typography variant="h6" component="h2">
                Магазины
            </Typography>
            {isMobileDevice && <MobileDataDrawer rows={rows} />}
            {!isMobileDevice && (
                <DataGrid
                    sx={styles.table}
                    autoHeight
                    rows={rows}
                    columns={columns}
                    disableColumnMenu
                    disableSelectionOnClick
                    hideFooterPagination
                    hideFooterSelectedRowCount
                />
            )}
        </InfoWrapper>
    )
}
