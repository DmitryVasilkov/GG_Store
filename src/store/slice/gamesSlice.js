// src/features/games/gamesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import allGames, { sales } from '../../data';

const initialState = {
  games: allGames,
  sales: sales,
  filter: '',
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    filterGames(state, action) {
      state.filter = action.payload;
      state.games = allGames.filter(game => 
        game.title.toLowerCase().includes(state.filter.toLowerCase())
      );
      state.sales = sales.filter(game => 
        game.title.toLowerCase().includes(state.filter.toLowerCase())
      );
    },
  },
});

export const { filterGames } = gamesSlice.actions;
export default gamesSlice.reducer;
