import React from 'react'
import Link from 'next/link'
import { Box, Autocomplete, TextField, Typography } from '@mui/material'

const styles = {
    root: { width: '60%', margin: 'calc(50vh - 120px) auto auto auto' },
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
        '.MuiOutlinedInput-notchedOutline': {
            border: '2px solid red',
        },
    },
    info: { maxWidth: '215px', textAlign: 'right', margin: '16px 0 0 auto', color: 'rgba(0, 0, 0, 0.38)' },
}

export default function Search() {
    return (
        <Box sx={styles.root}>
            <Typography variant="h6" sx={styles.title}>
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
                <Link href="/">Куала-Лумпур</Link>
            </Typography>
        </Box>
    )
}
