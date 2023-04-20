import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    Autocomplete,
    Box,
    Button,
    Divider,
    IconButton,
    Paper,
    TextField,
    Typography,
    useMediaQuery,
} from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import api from '@/shared/api'
const SWAP_BTN_SIZE = '30px'
const styles = {
    searchWrapper: {
        position: 'relative',
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
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
        '&:hover:not($disabled) fieldset': {
            borderColor: 'primary.main',
        },
        '& .MuiAutocomplete-clearIndicator': {
            display: 'none',
        },
        '& .MuiAutocomplete-popupIndicator': {
            p: 0,
        },
        '& .MuiAutocomplete-endAdornment': {
            top: 'calc(50% - 12px)',
            '&.MuiAutocomplete-endAdornment': {
                right: '12px',
            },
        },
        '& .MuiOutlinedInput-root': {
            pr: '48px !important',
        },
    },
    paperBox: {
        p: 0.5,
    },
    paper: {
        '& .MuiAutocomplete-option[aria-selected="true"]': {
            background: 'rgba(78, 19, 207, 0.04)',
        },
        '& .MuiAutocomplete-option[aria-selected="true"], .Mui-focused': {
            borderRadius: '6px',
        },
    },
    swapButton: {
        position: 'absolute',
        left: `calc(45.5% - (${SWAP_BTN_SIZE}/2))`,
        bgcolor: 'grey',
        margin: 'auto',
        zIndex: 100,
        height: SWAP_BTN_SIZE,
        width: SWAP_BTN_SIZE,
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
    const [comparablePlace, setComparablePlace] = useState<{
        from: string
        to: string
    }>({
        from: '',
        to: '',
    })

    const handleSearch = async (query: string) => {
        if (query.length < 2) return
        const response = await api.search(query)
        setSearchCities(response.cities_results)
    }
    React.useEffect(() => {
        console.log('comparablePlace', comparablePlace)
    }, [comparablePlace])
    return (
        <Box sx={{ ...styles.searchWrapper, ...sx }}>
            <Autocomplete
                sx={styles.input}
                options={searchCities}
                onInputChange={(_: unknown, value: string) => handleSearch(value)}
                getOptionLabel={(option: any) => `${option.name}, ${option.country_name}`}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        <Typography>{`${option.name},`}</Typography>
                        <Typography
                            sx={{ color: 'text.secondary', ml: 0.5 }}
                        >{`${option.country_name}`}</Typography>
                    </Box>
                )}
                renderInput={(params) => <TextField autoFocus placeholder="Откуда" {...params} />}
                PaperComponent={({ children: childrens }) => (
                    <Paper sx={styles.paper}>
                        <Box sx={styles.paperBox}>{childrens}</Box>
                    </Paper>
                )}
                popupIcon={''}
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
                sx={styles.input}
                options={searchCities}
                onInputChange={(_: unknown, value: string) => handleSearch(value)}
                getOptionLabel={(option: any) => `${option.name}, ${option.country_name}`}
                renderInput={(params) => <TextField placeholder="Куда" {...params} />}
                popupIcon={''}
            />
            <Button sx={styles.button} variant="contained">
                Найти
            </Button>
        </Box>
    )
}
