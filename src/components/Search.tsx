import React from 'react'
import Link from 'next/link'
import { Box, Autocomplete, TextField, Typography, Button, IconButton, useMediaQuery } from '@mui/material'
import { contries } from '@/mock'
import { useRouter } from 'next/navigation'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'

const styles = {
    root: { width: '78%', margin: 'calc(50vh - 140px) auto auto auto' },
    title: {
        textAlign: 'left',
        mb: 3,
    },
    searchWrapper: {
        bgcolor: 'background.paper',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '@media screen and (max-width:426px)': {
            flexWrap: 'wrap',
        },
    },
    input: {
        width: '100%',
        '.MuiInputBase-root': {
            borderRadius: 2,
            height: '59px',
        },
        '.MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: 'transparent',
        },
        '&:hover:not($disabled) fieldset': {
            borderColor: 'primary.main',
        },
    },
    info: { maxWidth: '215px', textAlign: 'right', margin: '16px 0 0 auto', color: 'rgba(0, 0, 0, 0.38)' },
}

export default function Search() {
    const isMobileDevice = useMediaQuery('(max-width:426px)')
    const router = useRouter()
    const [filter, setFilter] = React.useState('')
    const avalibleCountries = React.useMemo(
        () => contries.filter((contry) => contry.name.toLowerCase().includes(filter.toLowerCase())),
        [filter],
    )

    const redirectToCountryInfo = (_: unknown, value: any) => {
        router.push(`/countries/${value.id}`)
    }

    return (
        <Box sx={styles.root}>
            <Typography variant="h5" component="h1" sx={styles.title}>
                Сравнивайте цены по всему миру
            </Typography>
            <Box sx={styles.searchWrapper}>
                <Autocomplete
                    autoSelect
                    disablePortal
                    freeSolo
                    sx={styles.input}
                    options={avalibleCountries}
                    onInputChange={(_, value) => setFilter(value)}
                    onChange={redirectToCountryInfo}
                    getOptionLabel={(option: any) => (option.name ? option.name : option)}
                    onKeyDown={(e) => e.key === 'Enter' && console.log('submit')}
                    renderInput={(params) => <TextField autoFocus placeholder="Откуда" {...params} />}
                />
                <IconButton sx={{ height: '35px', width: '35px' }}>
                    <SwapHorizIcon
                        fontSize="small"
                        sx={isMobileDevice ? { transform: 'rotate(90deg)' } : undefined}
                    />
                </IconButton>
                <Autocomplete
                    autoSelect
                    disablePortal
                    freeSolo
                    sx={styles.input}
                    options={avalibleCountries}
                    onInputChange={(_, value) => setFilter(value)}
                    onChange={redirectToCountryInfo}
                    getOptionLabel={(option: any) => (option.name ? option.name : option)}
                    onKeyDown={(e) => e.key === 'Enter' && console.log('submit')}
                    renderInput={(params) => <TextField placeholder="Куда" {...params} />}
                />
            </Box>

            {/* <Typography variant="body2" sx={styles.info}>
                <Link href="/countries/1">Куала-Лумпур</Link>
            </Typography> */}
        </Box>
    )
}
