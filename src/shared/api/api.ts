import { instance } from './instance'
import { IPlace } from '@/shared/models'

interface UserLocaleResponse {
    city: IPlace | null
}

interface PlaceByNameResponse {
    place: Pick<IPlace, 'id' | 'name'> | null
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
    getSummary(query: { placeId: number; comparedPlaceId: number }) {
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
