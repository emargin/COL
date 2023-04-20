import React, { useMemo, useState, useEffect, createContext } from 'react'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

const WHITE_GRADIENT = 'linear-gradient(rgb(248, 250, 253) 0%, rgba(248, 250, 253, 0) 413px)'

const getDesignTokens = (mode: PaletteMode, isMobileDevice: boolean) => ({
    shape: {
        borderRadius: 8,
    },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  background: { default: '#f5f5f5', paper: '#fff' },
              }
            : {
                  background: { default: '#272731', paper: '#32323e' },
              }),
    },
    typography: {
        fontSize: isMobileDevice ? 12 : 14,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0,
                },
                'input[type=number]': {
                    '-moz-appearance': 'textfield' /* Firefox */,
                },
                a: {
                    color: 'inherit',
                    textDecoration: 'none',
                },
                '&::-webkit-scrollbar ': {
                    width: '8px',
                    height: '7px',
                    cursor: 'pointer',
                },
                '&::-webkit-scrollbar-track': {
                    '-webkit-border-radius': '4px',
                    borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    ' -webkit-border-radius': '4px',
                    background: 'rgb(193, 193, 193)',
                    borderRadius: '4px',
                    width: '5px',
                    height: '5px',
                },

                '&::-webkit-scrollbar-thumb:hover': {
                    background: 'rgba(193, 193, 193, 0.7)',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    backgroundColor: mode === 'light' ? '#fff' : '#32323e',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    margin: 'auto 4px',
                    borderRadius: 8,
                },
            },
        },
    },
})

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function ThemeBuilder({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
    const isMobileDevice = useMediaQuery('(max-width:600px)')
    const [mode, setMode] = useState<'light' | 'dark'>(prefersLightMode ? 'light' : 'dark')

    const theme = useMemo(() => createTheme(getDesignTokens(mode, isMobileDevice)), [mode, isMobileDevice])
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    )
    // Мерцание
    useEffect(() => {
        setMode(prefersLightMode ? 'light' : 'dark')
    }, [])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
