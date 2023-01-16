import {combineReducers, configureStore} from '@reduxjs/toolkit'
import filmSlice from './slices/filmSlice'
import filmByIdSlice from './slices/filmByIdSlice'
import filmByCategorySlice from './slices/filmByCategorySlice'

const rootReducer = combineReducers({
    filmSlice,
    filmByIdSlice,
    filmByCategorySlice,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;