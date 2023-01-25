import type { AppProps } from 'next/app'
import ThemeBuilder from '@/ThemeBuilder'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeBuilder>
            <Component {...pageProps} />
        </ThemeBuilder>
    )
}
