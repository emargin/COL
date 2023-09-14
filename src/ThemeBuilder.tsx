import React, { useMemo, useState, useEffect, createContext } from 'react'
import { createTheme, PaletteMode, Theme, ThemeProvider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'
import { Manrope } from '@next/font/google'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

const getDesignTokens = (mode: PaletteMode, isMobileDevice: boolean) => ({
    shape: {
        borderRadius: 16,
    },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  background: {
                      default: '#eceff1',
                      paper: '#fafafa',
                  },
                  other: {
                      announcement1: '#fff1ea',
                      announcement2: '#e6f45d',
                  },
              }
            : {
                  background: {
                      default: '#161617',
                      paper: '#2f2f32',
                  },
                  other: {
                      announcement1: '#a66a4c',
                      announcement2: '#929f1e',
                  },
              }),
    },
    typography: {
        fontSize: isMobileDevice ? 12 : 14,
        fontFamily: manrope.style.fontFamily,
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
                    // backgroundColor: mode === 'light' ? '#fff' : '#32323e',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    margin: 'auto 4px',
                    borderRadius: theme.shape.borderRadius,
                }),
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
