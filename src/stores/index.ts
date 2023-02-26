// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';

// Import store reducer:
import foldersReducer from './folder';

// Create Redux store:
const store = configureStore({
  reducer: {
    foldersReducer,
  },
});

export default store;
