import { create } from 'zustand'
import api from '@/shared/api'

type SummoryCategoryType = 'restaurant' | 'market' | 'transport' | 'leisure'
type TrendType = 'down' | 'up'

interface ISummery {
    value: number
    trend: TrendType
    diffPercentage: number
}

interface DataSliceProps {
    summery: Record<SummoryCategoryType, ISummery> | null
}

export const dataSlice = create<DataSliceProps>((set) => ({
    summery: null,
    getSummery: async (query: any) => {
        const response = await api.getSummery(query)
        console.log('response', response)
    },
}))
