import { instance } from './index'

export const api = {
    getUserLocal(latitude: string, longitude: string) {
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
