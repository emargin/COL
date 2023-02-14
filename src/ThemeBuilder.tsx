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
                  // palette values for light mode
                  background: { default: '#ebeced', paper: '#fff' },
              }
            : {
                  // palette values for dark mode
                  background: { default: '#272731', paper: '#32323e' },
              }),
    },
    typography: {
        fontSize: isMobileDevice ? 12 : 14,
    },
})

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function ThemeBuilder({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const isMobileDevice = useMediaQuery('(max-width:425px)')
    const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

    const theme = useMemo(() => createTheme(getDesignTokens(mode, isMobileDevice)), [mode])
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    )

    useEffect(() => {
        setMode(prefersDarkMode ? 'dark' : 'light')
    }, [prefersDarkMode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
