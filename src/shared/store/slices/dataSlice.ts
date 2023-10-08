import { create } from 'zustand'
import api from '@/shared/api'

type SummoryCategoryType = 'restaurant' | 'market' | 'transport' | 'leisure'
type TrendType = 'down' | 'up'

interface ISummery {
    value: number
    trend: TrendType
    diffPercentage: number
}

export interface DataState {
    summery: Record<SummoryCategoryType, ISummery> | null
    getSummary: (request: { placeId: number; comparedPlaceId: number }) => void
}

export const useDataStore = create<DataState>(() => ({
    summery: null,
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
