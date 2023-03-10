import React, { useState } from 'react'
import Link from 'next/link'
import {
    Box,
    Autocomplete,
    TextField,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    Divider,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import api from '@/shared/api'
import { debounce } from '@/shared/utils'

const styles = {
    root: { width: '78%', margin: 'calc(50vh - 170px) auto auto auto' },
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
        '.MuiAutocomplete-popper': {
            bgcolor: 'red',
        },
        '&:hover:not($disabled) fieldset': {
            borderColor: 'primary.main',
        },
    },
    info: {
        maxWidth: '215px',
        textAlign: 'right',
        margin: '16px 0 0 auto',
        color: 'rgba(0, 0, 0, 0.38)',
    },
}

export default function Search() {
    const isMobileDevice = useMediaQuery('(max-width:600px)')
    const router = useRouter()
    const [searchCities, setSearchCities] = useState([])

    const redirectToCountryInfo = (_: unknown, value: any) => {
        // router.push(`/city/${value.slug}`)
    }

    const handleSearch = async (query: string) => {
        if (query.length < 2) return
        const response = await api.search(query)
        setSearchCities(response.search_results)
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
                    options={searchCities}
                    onInputChange={debounce((_: unknown, value: string) => handleSearch(value))}
                    onChange={redirectToCountryInfo}
                    getOptionLabel={(option: any) => (option.name ? option.name : option)}
                    onKeyDown={(e) => e.key === 'Enter' && console.log('submit')}
                    renderInput={(params) => <TextField autoFocus placeholder="Откуда" {...params} />}
                />

                {isMobileDevice && (
                    <Divider sx={{ width: '90%' }} variant="middle">
                        <IconButton sx={{ height: '35px', width: '35px', textAlign: 'center' }}>
                            <SwapHorizIcon
                                fontSize="small"
                                sx={isMobileDevice ? { transform: 'rotate(90deg)' } : undefined}
                            />
                        </IconButton>
                    </Divider>
                )}
                {!isMobileDevice && (
                    <IconButton sx={{ height: '35px', width: '35px', textAlign: 'center' }}>
                        <SwapHorizIcon
                            fontSize="small"
                            sx={isMobileDevice ? { transform: 'rotate(90deg)' } : undefined}
                        />
                    </IconButton>
                )}

                <Autocomplete
                    autoSelect
                    disablePortal
                    freeSolo
                    sx={styles.input}
                    options={searchCities}
                    onInputChange={debounce((_: unknown, value: string) => handleSearch(value))}
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
