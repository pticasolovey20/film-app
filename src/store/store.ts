import {combineReducers, configureStore} from '@reduxjs/toolkit'
import filmSlice from './slices/filmSlice'
import {categoryAPI} from '../services/CategoryService'

const rootReducer = combineReducers({
    filmSlice,
    [categoryAPI.reducerPath]: categoryAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(categoryAPI.middleware)
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;