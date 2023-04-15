import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Autocomplete, Box, Button, Divider, IconButton, TextField, useMediaQuery } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import api from '@/shared/api'

const styles = {
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
        <Box sx={styles.searchWrapper}>
            <Autocomplete
                autoSelect
                disablePortal
                freeSolo
                sx={styles.input}
                options={searchCities}
                onInputChange={(_: unknown, value: string) => handleSearch(value)}
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
                onInputChange={(_: unknown, value: string) => handleSearch(value)}
                onChange={redirectToCountryInfo}
                getOptionLabel={(option: any) => (option.name ? option.name : option)}
                onKeyDown={(e) => e.key === 'Enter' && console.log('submit')}
                renderInput={(params) => <TextField placeholder="Куда" {...params} />}
            />
            <Button variant="contained">Найти</Button>
        </Box>
    )
}
