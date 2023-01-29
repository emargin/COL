import React from 'react'
import Link from 'next/link'
import { Box, Autocomplete, TextField, Typography } from '@mui/material'
import { contries } from '@/mock'
import { useRouter } from 'next/navigation'

const styles = {
    root: { width: '75%', margin: 'calc(50vh - 120px) auto auto auto' },
    title: {
        textAlign: 'left',
        marginBottom: '16px',
    },
    input: {
        width: '100%',
        color: '#fff',
        '.MuiInputBase-root': {
            borderRadius: '16px',
            height: '59px',
        },
        '.MuiOutlinedInput-notchedOutline': {
            // border: '2px solid red',
        },
    },
    info: { maxWidth: '215px', textAlign: 'right', margin: '16px 0 0 auto', color: 'rgba(0, 0, 0, 0.38)' },
}

export default function Search() {
    const router = useRouter()

    const handleCoyntryInfo = (_: unknown, value: any) => {
        console.log('value', value)
        router.push(`/countries/${value.id}`)
    }
    return (
        <Box sx={styles.root}>
            <Typography variant="h6" sx={styles.title}>
                Сравнивайте цены в разных странах мира
            </Typography>
            <Autocomplete
                autoSelect
                disablePortal
                freeSolo
                sx={styles.input}
                options={contries}
                onChange={handleCoyntryInfo}
                // getOptionLabel={(option: any) => option.name}
                getOptionLabel={(option: any) => (option.name ? option.name : option)}
                onKeyDown={(e) => e.key === 'Enter' && console.log('submit')}
                renderInput={(params) => <TextField autoFocus placeholder="Найти страну" {...params} />}
            />

            <Typography variant="body2" sx={styles.info}>
                <Link href="/countries/1">Куала-Лумпур</Link>
            </Typography>
        </Box>
    )
}
