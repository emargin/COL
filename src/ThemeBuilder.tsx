import React, { useMemo, useState, useEffect, createContext } from 'react'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

const getDesignTokens = (mode: PaletteMode, isMobileDevice: boolean) => ({
    shape: { borderRadius: 8 },
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
                    margin: 0 /* <-- Apparently some margin are still there even though it's hidden */,
                },
                'input[type=number]': {
                    '-moz-appearance': 'textfield' /* Firefox */,
                },
                a: { color: 'inherit', textDecoration: 'none' },
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
