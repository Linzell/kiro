// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';

// Import store reducer:
import foldersReducer from './folder';
import pagesReducer from './page';
import tagsReducer from './tag';
import teamsReducer from './team';
import usersReducer from './user';

// Create Redux store:
const store = configureStore({
  reducer: {
    folderStore: foldersReducer,
    pageStore: pagesReducer,
    tagStore: tagsReducer,
    teamStore: teamsReducer,
    userStore: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
