import React, { useEffect, useState, useMemo } from 'react'
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
    Theme,
} from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import api from '@/shared/api'
import { useLocale } from '@/shared/utils'
import { IPlace } from '@/shared/models'
import { useLocationsStore } from '@/shared/store'

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
            position: 'relative',
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
        '& .MuiAutocomplete-clearIndicator': {
            display: 'none',
        },
        '& .MuiAutocomplete-popupIndicator': {
            p: 0,
        },

        '&:hover .MuiOutlinedInput-notchedOutline': {
            pointerEvents: 'none!important',
        },
    },
    paperBox: {
        p: 0.5,
    },
    paper: {
        '& .MuiAutocomplete-option[aria-selected="true"], .Mui-focused': {
            borderRadius: (theme: Theme) => theme.shape.borderRadius,
        },
    },
    swapButton: {
        bgcolor: (theme: Theme) => (theme.palette.mode === 'light' ? 'grey.100' : 'grey.800'),
        height: '30px',
        width: '30px',
        transitionDuration: '0.3s',
        transitionProperty: 'transform',
        '&: hover': {
            transform: 'rotate(180deg)',
        },
        '@media screen and (max-width:426px)': {
            zIndex: 10,
            height: '40px',
            width: '40px',
            padding: '26px',
            position: 'absolute',
            right: '10%',
            top: '25%',
            transform: 'rotate(90deg)',
            '&:not(.disable):hover ': {
                transform: 'rotate(90deg)',
            },
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
    const [searchCities, setSearchCities] = useState([])
    const placeFrom = useLocationsStore((state) => state.placeFrom)
    const placeTo = useLocationsStore((state) => state.placeTo)
    const setPlaceTo = useLocationsStore((state) => state.setPlaceTo)
    const setPlaceFrom = useLocationsStore((state) => state.setPlaceFrom)
    const swapLocations = useLocationsStore((state) => state.swapLocations)
    const getUserLocation = useLocationsStore((state) => state.getUserLocation)

    const isReadyToSearch = useMemo(() => placeFrom && placeTo, [placeFrom, placeTo])

    const handlePlaceChange = async (query: string) => {
        if (query.length < 2) {
            return
        }
        const response = await api.search(query)
        setSearchCities(response.cities_results)
    }

    const handleSearch = () => {
        if (isReadyToSearch && placeFrom?.name && placeTo?.name) {
            router.push(`/city/${placeFrom.name.toLowerCase()}|${placeTo.name.toLowerCase()}`)
        }
    }

    const renderOptionLabel = (option: IPlace) => {
        if (Object.keys(option).length === 0) {
            return ''
        }
        return `${option.name}, ${option.country_name}`
    }

    useEffect(() => {
        getUserLocation()
    }, [])

    return (
        <Box sx={[styles.searchWrapper, sx]}>
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
                renderInput={(params) => <TextField placeholder="Откуда" {...params} />}
                PaperComponent={({ children: childrens }) => (
                    <Paper sx={styles.paper}>
                        <Box sx={styles.paperBox}>{childrens}</Box>
                    </Paper>
                )}
                popupIcon={''}
            />

            <IconButton sx={styles.swapButton} onClick={swapLocations}>
                <SwapHorizIcon fontSize="small" />
            </IconButton>

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
