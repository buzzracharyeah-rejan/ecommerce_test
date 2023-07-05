import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    mode: 'light',
  },
  reducers: {
    setMode: (state, actions) => {
      state.mode = actions.payload;
    },
  },
});

export default globalSlice.reducer;

export const { setMode } = globalSlice.actions;
