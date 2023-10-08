export type SummoryCategoryType = 'restaurant' | 'market' | 'transport' | 'leisure'

export type TrendType = 'down' | 'up'

export interface ISummary {
    value: number
    trend: TrendType
    diffPercentage: number
}

export type ISummaryData = Record<SummoryCategoryType, ISummary>
