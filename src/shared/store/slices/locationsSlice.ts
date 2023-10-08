import { create } from 'zustand'
import { IPlace } from '@/shared/models'
import api from '@/shared/api'

export interface LocationsState {
    placeFrom: IPlace | null
    placeTo: IPlace | null
    setPlaceTo: (place: IPlace) => void
    setPlaceFrom: (place: IPlace) => void
    swapLocations: () => void
    getUserLocation: () => void
    getPlaceByName: (placeName: string) => any
}

export const useLocationsStore = create<LocationsState>((set) => ({
    placeFrom: null,
    placeTo: null,
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
        try {
            const response = await api.getUserLocation()
            console.log('response', response)
            set({ placeFrom: response.city })
        } catch (e) {
            console.log('e', e)
        }
    },
    getPlaceByName: async (placeName: string) => {
        try {
            const response = await api.getPlaceByName(placeName)
            console.log('response', response)
            return response.place
        } catch (e) {
            console.log('e', e)
        }
    },
}))
