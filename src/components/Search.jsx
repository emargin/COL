import React from 'react'
import { Box, Autocomplete, TextField, Typography } from '@mui/material'

const styles = {
    root: { width: '60%', margin: 'auto' },
    title: {
        textAlign: 'left',
        marginBottom: '16px',
    },
    input: {
        width: '100%',

        borderColor: 'red',
        color: '#fff',
        '.MuiInputBase-root': {
            borderRadius: '16px',
        },
    },
    info: { maxWidth: '215px', textAlign: 'right', margin: '16px 0 0 auto', color: 'rgba(0, 0, 0, 0.38)' },
}

export default function Search() {
    return (
        <Box sx={styles.root}>
            <Typography variant="body1" sx={styles.title}>
                Сравнивайте цены в разных странах мира
            </Typography>
            <Autocomplete
                disablePortal
                freeSolo
                id="combo-box-demo"
                options={[]}
                sx={styles.input}
                renderInput={(params) => <TextField autoFocus placeholder="Найти страну" {...params} />}
            />
            <Typography variant="body2" sx={styles.info}>
                Куала-Лумпур
            </Typography>
        </Box>
    )
}
