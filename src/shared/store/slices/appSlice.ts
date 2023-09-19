import { create } from 'zustand'

interface AppStore {
    placeId: number | null
    comparedPlaceId: number | null
    activeCurrency: 'RUB' | 'USD' | 'EUR'
    increase: (by: number) => void
}

export const createAppSlice = create<AppStore>((set) => ({
    placeId: null,
    comparedPlaceId: null,
    activeCurrency: 'USD',
    increase: () => set((state) => ({ comparedPlaceId: state.comparedPlaceId })),
}))
