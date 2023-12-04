import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Artwork} from './types';

interface FavoritesState {
  favorites: Artwork[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Artwork>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<Artwork>) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.title !== action.payload.title, // change to id
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;

export default favoritesSlice.reducer;
