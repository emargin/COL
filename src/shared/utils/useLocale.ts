import { useRouter } from 'next/router'

export type Locales = 'ru' | 'en'
type Tab = {
    label: string
}
export type LocalesMap = {
    [locale in Locales]: { [key: string]: string }
}

export function useLocale(locales: LocalesMap) {
    const router = useRouter()
    const t = (key: string) => locales[(router.locale || 'en') as Locales][key] || key

    return t
}
