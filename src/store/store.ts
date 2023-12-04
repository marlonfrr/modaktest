import {combineReducers, configureStore} from '@reduxjs/toolkit';
import galleryReducer from './slices/gallerySlice';
import favoritesReducer from './slices/favoritesSlice';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['gallery'],
};

const rootReducer = combineReducers({
  gallery: galleryReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
