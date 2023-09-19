import { UserLocale } from '../models'
import { instance } from './instance'

interface UserLocaleResponse {
    city: UserLocale
}

export const api = {
    getUserLocation(): Promise<UserLocaleResponse> {
        return instance('/nearest-city')
    },
    search(query: string) {
        return instance('/search', {
            query: {
                query,
            },
        })
    },
    getSummery(query: { placeId: string; comparedPlaceId: string }) {
        const { placeId, comparedPlaceId } = query
        return instance('/summery', {
            query: {
                place_id: placeId,
                compared_place_id: comparedPlaceId,
                place_type: 'city',
            },
        })
    },
}
