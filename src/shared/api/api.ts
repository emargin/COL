import { UserLocale } from '../models'
import { instance } from './instance'

interface UserLocaleResponse {
    city: UserLocale
}

export const api = {
    getUserLocale(latitude: string, longitude: string): Promise<UserLocaleResponse> {
        return instance('/nearest-city', {
            query: {
                latitude,
                longitude,
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
}
