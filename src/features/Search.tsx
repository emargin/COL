import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Autocomplete, Box, Button, Divider, IconButton, TextField, useMediaQuery } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import api from '@/shared/api'

const styles = {
    searchWrapper: {
        bgcolor: 'background.paper',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        '@media screen and (max-width:426px)': {
            flexWrap: 'wrap',
            padding: '16px',
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
    swapButton: {
        height: '35px',
        width: '35px',
        textAlign: 'center',
        transitionDuration: '0.3s',
        transitionProperty: 'transform',
        '&: hover': {
            transform: 'rotate(180deg)',
        },
    },
    button: {
        margin: 'auto',
        borderRadius: '12px',
        mr: '4px',

        width: '115px',
        '@media screen and (max-width:426px)': {
            flexWrap: 'wrap',
            width: '100%',
            height: '48px',
            m: 0,
        },
    },
}

export default function Search({ sx }: any) {
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
        <Box sx={{ ...styles.searchWrapper, ...sx }}>
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
                // <Divider sx={{ width: '90%' }} variant="middle"></Divider>
                <IconButton sx={styles.swapButton}>
                    <ArrowDownwardIcon fontSize="small" />
                </IconButton>
            )}
            {!isMobileDevice && (
                <IconButton sx={styles.swapButton}>
                    <ArrowForwardIcon fontSize="small" />
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
            <Button sx={styles.button} variant="contained">
                Найти
            </Button>
        </Box>
    )
}
