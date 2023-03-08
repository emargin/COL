import React from 'react'
import { Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp' // TODO: FIND SVG ANR REMOVE MUI/ICONS LIB
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

export enum PricePositionEnum {
    UPPER = 1,
    LOWER = 2,
}

export default function PricePosition(props: any) {
    const { position, percent } = props
    return (
        <>
            {position === PricePositionEnum.LOWER ? (
                <Typography variant="body2" sx={{ color: 'success.main', display: 'flex', mr: 0.5 }}>
                    <ArrowDropDownIcon fontSize="small" /> {percent}
                </Typography>
            ) : (
                <Typography variant="body2" sx={{ color: 'error.main', display: 'flex', mr: 0.5 }}>
                    <ArrowDropUpIcon fontSize="small" /> {percent}
                </Typography>
            )}
        </>
    )
}
