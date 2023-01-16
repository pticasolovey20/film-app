import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit"
import axios, {AxiosError} from 'axios'
import { IFilms } from "../../types/IFilms"

interface FilmState { 
    loading: boolean;
    error: string;
    films: IFilms[];
}

export const fetchFilms = createAsyncThunk('films/fetchFilms',async (param,thunkAPI) => {
    try {
        const {data} = await axios.get<IFilms[]>('https://api.tvmaze.com/shows')
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
    films: [],
} as FilmState

const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFilms.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchFilms.fulfilled.type]: (state, action: PayloadAction<IFilms[]>) => {
            state.loading = false;
            state.films = action.payload;
            state.error = '';
        },
        [fetchFilms.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default filmSlice.reducer