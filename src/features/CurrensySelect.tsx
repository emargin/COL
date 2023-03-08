import React from 'react'
import { Select, MenuItem } from '@mui/material'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const CURRENCIES = [
    { id: 1, label: 'RUB', value: 1, icon: <></> },
    { id: 2, label: 'USD', value: 2, icon: <></> },
    { id: 3, label: 'EUR', value: 3, icon: <></> },
]

const styles = {
    root: {
        boxShadow: 'none',
        p: 0,
        '& .MuiOutlinedInput-notchedOutline': {
            border: 0,
        },
    },
}
export default function CurrensySelect() {
    return (
        <Select
            size="small"
            sx={styles.root}
            defaultValue={1}
            // IconComponent={() => <KeyboardArrowDownIcon fontSize="small" />}
        >
            {CURRENCIES.map((currensy) => (
                <MenuItem key={currensy.id} value={currensy.value}>
                    {currensy.label}
                </MenuItem>
            ))}
        </Select>
    )
}
