import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Artwork} from './types';

interface GalleryState {
  artworks: Artwork[];
  loading: boolean;
  loadingMore: boolean;
  error: boolean;
  listEndError: boolean;
}

const initialState: GalleryState = {
  artworks: [],
  loading: true,
  loadingMore: false,
  error: false,
  listEndError: false,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    getArtworksRequest: (state, action: PayloadAction<number>) => {
      if (action.payload === 1) {
        state.loading = true;
      } else {
        state.loadingMore = true;
      }
    },
    getArtworksSuccess: (state, action: PayloadAction<Artwork[]>) => {
      state.artworks = [...state.artworks, ...action.payload];
      state.loadingMore = false;
      state.loading = false;
      state.listEndError = false;
      state.error = false;
    },
    getArtworksError: state => {
      state.loadingMore = false;
      state.loading = false;
      state.error = true;
      if (state.artworks.length !== 0) {
        state.listEndError = true;
      }
    },
  },
});

export const {getArtworksSuccess, getArtworksError, getArtworksRequest} =
  gallerySlice.actions;

export default gallerySlice.reducer;
