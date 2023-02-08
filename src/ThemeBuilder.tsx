import React, { useEffect } from 'react'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

const getDesignTokens = (mode: PaletteMode) => ({
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
})

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

export default function ThemeBuilder({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [mode, setMode] = React.useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
    const colorMode = React.useMemo(
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
