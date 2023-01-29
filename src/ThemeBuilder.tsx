import React from 'react'
import { createTheme, PaletteMode } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider } from '@mui/material'

const getDesignTokens = (mode: PaletteMode) => ({
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
})

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeBuilder({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light')
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [prefersDarkMode, mode])
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}