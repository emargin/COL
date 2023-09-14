import React from 'react'
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'

import InfoWrapper from '@/shared/components/InfoWrapper'
import PricePosition from '@/entities/PricePosition'
import MobileDataDrawer from '@/widgets/mobile/MobileDataDrawer'
import Histogram from '@/features/Histogram'

const styles = {
    table: {
        height: '450px',
        border: 'none',
        '& .MuiDataGrid-columnHeaders': {
            fontSize: 12,
            border: 'none!important',
            minHeight: '23px!important',
        },
        '& .MuiDataGrid-columnHeader': {
            height: '23px!important',
        },
        '& .MuiDataGrid-row': {
            borderRadius: 1,
            borderColor: 'transparent',
        },
        '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            '&:focus': {
                outline: 'none',
            },
        },
        '& .MuiDataGrid-columnSeparator': {
            display: 'none',
        },
        '& .even': {
            bgcolor: 'background.default',
        },
    },
    priceCell: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        position: 'relative',
    },
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', hide: true },
    {
        field: 'name',
        headerName: 'Название',
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
                </Box>
            )
        },
    },
    {
        field: 'editPrice',
        headerName: '',
        maxWidth: 38,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <IconButton className="price-btn" sx={{ p: 0.5, display: 'none' }}>
                <EditIcon fontSize="small" />
            </IconButton>
        ),
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
                </Box>
            )
        },
    },
    {
        field: 'editPrice_1',
        headerName: '',
        maxWidth: 38,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <IconButton className="price-btn" sx={{ p: 0.5, display: 'none' }}>
                <EditIcon fontSize="small" />
            </IconButton>
        ),
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
    const { title, rows } = props
    const isMobileDevice = useMediaQuery('(max-width:600px)')

    return isMobileDevice ? (
        <InfoWrapper style={{ width: '100%' }}>
            <Typography variant="h6" component="h2">
                {title}
            </Typography>
            <MobileDataDrawer rows={rows} />
        </InfoWrapper>
    ) : (
        <>
            <Typography variant="h6" component="h2" sx={{ ml: 2 }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <InfoWrapper sx={{ width: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Histogram />
                </InfoWrapper>
                <InfoWrapper style={{ width: '100%' }}>
                    <DataGrid
                        sx={styles.table}
                        rows={rows}
                        columns={columns}
                        disableColumnMenu
                        disableSelectionOnClick
                        hideFooter
                        hideFooterPagination
                        hideFooterSelectedRowCount
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                        }
                    />
                </InfoWrapper>
            </Box>
        </>
    )
}
