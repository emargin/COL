import React from 'react'
import { Autocomplete, TextField } from '@mui/material'

const styles = {
    input: {
        width: '100%',
        borderRadius: '6px',
        borderColor: 'red',
        color: '#fff',
    },
}

export default function Search() {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[]}
            sx={styles.input}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Поиск"
                    InputProps={{
                        className: styles.input,
                    }}
                />
            )}
        />
    )
}
