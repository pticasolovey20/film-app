import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit"
import axios, {AxiosError} from 'axios'
import { ICategoryFilms } from "../../types/ICategoryFilms";

interface FilmByCategoryState { 
    loading: boolean;
    error: string;
    films: ICategoryFilms[];
}

export const fetchFilmsByCategory = createAsyncThunk('films/fetchFilmsByCategory',async (category: string | undefined,thunkAPI) => {
    try {
        const {data} = await axios.get<ICategoryFilms[]>(`https://api.tvmaze.com/search/shows?q=${category}`)
        return data
    } catch (error: unknown) {
        if(error instanceof AxiosError) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
})

const initialState = {
    loading: false,
    error: '',
    films: {},
} as FilmByCategoryState

const filmByCategorySlice = createSlice({
    name: 'filmsByCategory',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFilmsByCategory.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchFilmsByCategory.fulfilled.type]: (state, action: PayloadAction<ICategoryFilms[]>) => {
            state.loading = false;
            state.films = action.payload;
            state.error = '';
        },
        [fetchFilmsByCategory.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default filmByCategorySlice.reducer