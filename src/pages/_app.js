import React from 'react'
import '@/styles/globals.css'
import ThemeBuilder from '@/ThemeBuilder'

export default function App({ Component, pageProps }) {
    return (
        <ThemeBuilder>
            <Component {...pageProps} />
        </ThemeBuilder>
    )
}
