import { createSlice } from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'timer',
  initialState: { dateNow: Date.now(), loading: true, timeLimit: [] },
  reducers: {
    setTimeLimit: (state, action) => {
      state.timeLimit = [...state.timeLimit, { ...action.payload }];
      state.loading = false;
    },
    updateTime: (state) => {
      state.dateNow = Date.now();
    },
  },
});

export const { setTimeLimit, setCountDown, updateTime } = timerSlice.actions;

export default timerSlice.reducer;
