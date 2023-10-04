import { create } from 'zustand'
import { IPlace } from '@/shared/models'
import api from '@/shared/api'

interface CreateLocationsState {
    placeFrom: IPlace
    placeTo: IPlace
    setPlaceTo: (place: IPlace) => void
    setPlaceFrom: (place: IPlace) => void
    swapLocations: () => void
    getUserLocation: () => void
}

export const useLocationsStore = create<CreateLocationsState>((set) => ({
    placeFrom: {} as IPlace,
    placeTo: {} as IPlace,
    setPlaceTo: (place) => set({ placeTo: place }),
    setPlaceFrom: (place) => set({ placeFrom: place }),
    swapLocations: () => {
        set((state) => {
            const oldFrom = state.placeFrom
            const oldTo = state.placeTo
            return { placeFrom: oldTo, placeTo: oldFrom }
        })
    },
    getUserLocation: async () => {
        const response = await api.getUserLocation()
        console.log('response', response)
        set(() => ({ placeFrom: response.city }))
    },
}))
