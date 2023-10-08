import { createContext, useContext } from 'react'
import { createStore, useStore as useZustandStore } from 'zustand'
import { useDataStore, DataState, useLocationsStore, LocationsState } from './slices'

const getDefaultInitialState = () => ({
    lastUpdate: Date.now(),
    light: false,
    count: 0,
})

export type StoreType = ReturnType<typeof initializeStore>

const zustandContext = createContext<StoreType | null>(null)

export const Provider = zustandContext.Provider

export const useStore = <T>(selector: (state: IStore) => T) => {
    const store = useContext(zustandContext)

    if (!store) throw new Error('Store is missing the provider')

    return useZustandStore(store, selector)
}

interface IStore {
    lastUpdate: number
    light: boolean
    count: number
}

type AllSlices = IStore & DataState & LocationsState

export const initializeStore = (preloadedState: Partial<IStore> = {}) => {
    return createStore<AllSlices>((...a) => ({
        ...getDefaultInitialState(),
        ...preloadedState,
        ...useDataStore.getState(),
        ...useLocationsStore.getState(),
    }))
}
