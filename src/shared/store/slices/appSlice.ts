import { create } from 'zustand'

interface AppState {
    activeCurrency: 'RUB' | 'USD' | 'EUR'
    increase: (by: number) => void
}

export const createAppSlice = create<AppState>((set) => ({
    activeCurrency: 'USD',
    increase: () => set((state) => ({ activeCurrency: state.activeCurrency })),
}))
