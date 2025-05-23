import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { pokemonApi } from '../services/pokemonApi'
import favoritesReducer from '../slices/favoritePokemons/favoritePokemonsSlice'
import comparisonReducer from '../slices/comparison/comparisonSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  favorites: favoritesReducer,
  comparison: comparisonReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
