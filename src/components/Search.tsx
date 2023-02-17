import React from 'react'
import Link from 'next/link'
import { Box, Autocomplete, TextField, Typography } from '@mui/material'
import { contries } from '@/mock'
import { useRouter } from 'next/navigation'

const styles = {
    root: { width: '78%', margin: 'calc(50vh - 150px) auto auto auto' },
    title: {
        textAlign: 'left',
        mb: 2,
    },
    input: {
        width: '100%',
        '.MuiInputBase-root': {
            borderRadius: 2,
            height: '59px',
        },
        '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: 'primary.main',
        },
        '&:hover:not($disabled) fieldset': {
            borderColor: 'primary.main',
        },
    },
    info: { maxWidth: '215px', textAlign: 'right', margin: '16px 0 0 auto', color: 'rgba(0, 0, 0, 0.38)' },
}

export default function Search() {
    const router = useRouter()

    const redirectToCountryInfo = (_: unknown, value: any) => {
        router.push(`/countries/${value.id}`)
    }

    return (
        <Box sx={styles.root}>
            <Typography variant="h5" component="h1" sx={styles.title}>
                Сравнивайте цены в разных странах мира
            </Typography>
            <Autocomplete
                autoSelect
                disablePortal
                freeSolo
                sx={styles.input}
                options={contries}
                onChange={redirectToCountryInfo}
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
