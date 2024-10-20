import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rank: 1,
  percentile: 30,
  correctAnswers: 10,
  totalQuestions: 15,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    updateStatistics: (state, action) => {
      const { rank, percentile, correctAnswers } = action.payload;
      state.rank = rank;
      state.percentile = percentile;
      state.correctAnswers = correctAnswers;
    },
  },
});

export const { updateStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;
