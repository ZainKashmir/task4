import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: [],
  },
  reducers: {
    setMovies(state, action) {
      state.data = action.payload;
    },
  },
});

export const {setMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
