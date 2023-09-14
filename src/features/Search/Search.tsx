import React, { useEffect, useState } from 'react'
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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import api from '@/shared/api'
import { useLocale } from '@/shared/utils'
import { UserLocale } from '@/shared/models'

const locales = {
    ru: {
        button: 'Найти',
    },
    en: {
        button: 'Search',
    },
}

const styles = {
    searchWrapper: {
        bgcolor: 'background.paper',
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1.5,
        '@media screen and (max-width:426px)': {
            flexWrap: 'wrap',
            p: 2,
        },
    },

    input: {
        width: '100%',
        '.MuiInputBase-root': {
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
        bgcolor: 'action.hover',
        height: '30px',
        width: '30px',
        transitionDuration: '0.3s',
        transitionProperty: 'transform',
        '&: hover': {
            transform: 'rotate(180deg)',
        },
    },
    button: {
        minWidth: '120px',
        mr: 0.5,
        textTransform: 'none',
        fontSize: '18px',
        fontWeight: 500,
        boxShadow: 'none',
        '@media screen and (max-width:426px)': {
            flexWrap: 'wrap',
            width: '100%',
            height: '48px',
            m: 0,
        },
    },
}

export default function Search({ sx }: any) {
    const t = useLocale(locales)
    const router = useRouter()
    const isMobileDevice = useMediaQuery('(max-width:600px)')
    const [searchCities, setSearchCities] = useState([])
    const [placeFrom, setPlaceFrom] = useState<UserLocale>({} as UserLocale)
    const [placeTo, setPlaceTo] = useState<UserLocale>({} as UserLocale)

    const handlePlaceChange = async (query: string) => {
        if (query.length < 2) {
            return
        }
        const response = await api.search(query)
        setSearchCities(response.cities_results)
    }

    const handleSwapPlaces = () => {
        const oldFrom = placeFrom
        const oldTo = placeTo
        setPlaceFrom(oldTo)
        setPlaceTo(oldFrom)
    }

    const handleSearch = () => {
        router.push('/city/russia')
    }

    const renderOptionLabel = (option: UserLocale) => {
        if (Object.keys(option).length === 0) {
            return ''
        }
        return `${option.name}, ${option.country_name}`
    }

    useEffect(() => {
        const getUserData = async () => {
            const response = await api.getUserLocation()
            setPlaceFrom(response.city)
        }
        getUserData()
    }, [])

    return (
        <Box sx={{ ...styles.searchWrapper, ...sx }}>
            <Autocomplete
                sx={styles.input}
                value={placeFrom}
                options={searchCities}
                onInputChange={(_: unknown, value: string) => handlePlaceChange(value)}
                onChange={(_: unknown, value) => value && setPlaceFrom(value)}
                getOptionLabel={(option) => renderOptionLabel(option)}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        <Typography>{`${option.name},`}</Typography>
                        <Typography sx={{ color: 'text.secondary', ml: 0.5 }}>
                            {option.country_name}
                        </Typography>
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

            {/* {isMobileDevice && (
                // <Divider sx={{ width: '90%' }} variant="middle"></Divider>
                <IconButton sx={styles.swapButton}>
                    <ArrowDownwardIcon fontSize="small" />
                </IconButton>
            )}
        */}
            {!isMobileDevice && (
                <IconButton sx={styles.swapButton} onClick={handleSwapPlaces}>
                    <SwapHorizIcon fontSize="small" />
                </IconButton>
            )}

            <Autocomplete
                sx={styles.input}
                value={placeTo}
                options={searchCities}
                onInputChange={(_: unknown, value: string) => handlePlaceChange(value)}
                onChange={(_: unknown, value) => value && setPlaceTo(value)}
                getOptionLabel={(option) => renderOptionLabel(option)}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        <Typography>{`${option.name},`}</Typography>
                        <Typography sx={{ color: 'text.secondary', ml: 0.5 }}>
                            {option.country_name}
                        </Typography>
                    </Box>
                )}
                renderInput={(params) => <TextField autoFocus placeholder="Куда" {...params} />}
                PaperComponent={({ children: childrens }) => (
                    <Paper sx={styles.paper}>
                        <Box sx={styles.paperBox}>{childrens}</Box>
                    </Paper>
                )}
                popupIcon={''}
            />
            <Button sx={styles.button} variant="contained" onClick={handleSearch}>
                {t('button')}
            </Button>
        </Box>
    )
}
