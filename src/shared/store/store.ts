import { StoreApi, useStore } from 'zustand'
import { createAppSlice } from './slices/appSlice'

// need type of store!
export const store = useStore<any>(() => ({
    appSlice: createAppSlice,
}))
