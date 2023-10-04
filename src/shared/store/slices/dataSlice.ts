import { create } from 'zustand'
import api from '@/shared/api'

type SummoryCategoryType = 'restaurant' | 'market' | 'transport' | 'leisure'
type TrendType = 'down' | 'up'

interface ISummery {
    value: number
    trend: TrendType
    diffPercentage: number
}

interface DataState {
    summery: Record<SummoryCategoryType, ISummery> | null
}

export const createDataSlice = create<DataState>((set) => ({
    summery: null,
    getSummery: async (query: any) => {
        const response = await api.getSummery(query)
        console.log('response', response)
    },
}))
