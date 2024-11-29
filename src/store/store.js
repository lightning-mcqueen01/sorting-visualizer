import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import appReducer from './app.slice';
import { configureStore } from '@reduxjs/toolkit';
import sortingVisualizerReducer from '@/store/sorting-visualizer.slice';
import storage from 'redux-persist/lib/storage';

export const store = configureStore({
  reducer: {
    app:
      ({
        key: 'app',
        storage,
      },
      appReducer),
    sortViz:
      ({
        key: 'sorting-viz',
        storage,
      },
      sortingVisualizerReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
