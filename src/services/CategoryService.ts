import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { ICategoryFilms } from '../types/ICategoryFilms'

export const categoryAPI = createApi({
    reducerPath:'categoryAPI',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.tvmaze.com'}),
    endpoints:(build) => ({
        fetchCategory: build.query<ICategoryFilms[],string>({
            query: (category) => (  {
                url:'/search/shows',
                params: {
                    q:category
                }
            })
        })
    })
})