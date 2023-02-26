import { ofetch } from 'ofetch'

export const instance = ofetch.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
    },
})

export { api as default } from './api'
