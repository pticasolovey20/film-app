import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit"
import axios, {AxiosError} from 'axios'
import { IFilms } from "../../types/IFilms"

interface FilmByIdState { 
    loading: boolean;
    error: string;
    films: IFilms;
}

export const fetchFilmsByID = createAsyncThunk('films/fetchFilmsById',async (id: string | undefined,thunkAPI) => {
    try {
        const {data} = await axios.get<IFilms[]>(`https://api.tvmaze.com/shows/${id}`)
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
} as FilmByIdState

const filmByIdSlice = createSlice({
    name: 'filmsById',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchFilmsByID.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchFilmsByID.fulfilled.type]: (state, action: PayloadAction<IFilms>) => {
            state.loading = false;
            state.films = action.payload;
            state.error = '';
        },
        [fetchFilmsByID.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload
        },
    }
})

export default filmByIdSlice.reducer