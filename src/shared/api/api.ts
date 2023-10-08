import { instance } from './instance'
import type { IPlace, ISummaryData } from '@/shared/models'

interface UserLocaleResponse {
    city: IPlace | null
}

interface PlaceByNameResponse {
    place: IPlace | null
}

export const api = {
    getUserLocation(): Promise<UserLocaleResponse> {
        return instance('/nearest-city')
    },
    getPlaceByName(name: string): Promise<PlaceByNameResponse> {
        return instance('/place-by-name', {
            query: {
                place_name: name,
                place_type: 'city',
            },
        })
    },
    search(query: string) {
        return instance('/search', {
            query: {
                query,
            },
        })
    },
    getSummary(query: { placeId: number; comparedPlaceId: number }): Promise<ISummaryData> {
        const { placeId, comparedPlaceId } = query
        return instance('/summary', {
            query: {
                place_id: placeId,
                compared_place_id: comparedPlaceId,
                place_type: 'city',
            },
        })
    },
}
