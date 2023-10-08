import { create } from 'zustand'
import api from '@/shared/api'
import type { ISummaryData } from '@/shared/models'

export interface DataState {
    summery: ISummaryData
    getSummary: (request: { placeId: number; comparedPlaceId: number }) => Promise<ISummaryData | undefined>
}

export const useDataStore = create<DataState>(() => ({
    summery: {} as ISummaryData,
    getSummary: async (query) => {
        try {
            const response = await api.getSummary(query)
            console.log('response', response)
            return response
        } catch (e) {
            console.log('e', e)
        }
    },
}))
