import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit"
import axios from 'axios'
import { IFilms } from "../../types/IFilms"

interface FilmState { 
    loading: boolean;
    error: null | string;
    films: null | IFilms[]
}

export const fetchFilms = createAsyncThunk('films/fetchFilms',async (param,thunkAPI) => {
    try {
        console.log(param)
        const response = await axios.get<IFilms[]>('https://api.tvmaze.com/shows')
        return response.data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const initialState = {
    loading: false,
    error:null,
    films: null,
} as FilmState

const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms(state, action) {
            state.films = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFilms.fulfilled, (state, action: PayloadAction<IFilms[]>) => {
                state.loading = false;
                state.films = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default filmSlice.reducer