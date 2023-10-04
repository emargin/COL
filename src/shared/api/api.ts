import { instance } from './instance'
import { IPlace } from '@/shared/models'

interface UserLocaleResponse {
    city: IPlace
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
