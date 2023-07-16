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
}
