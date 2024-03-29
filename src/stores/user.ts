// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserStore, getCurrentUser } from '%/importDataStorage';
import type { RootState } from '$/index';
import type User from '#/user';

/**
 * Interface for Redux store
 * @interface userStoreInterface
 * @property {Array<User>} users - Collection of users
 * @property {User} currentUser - Current user
 * @property {string} privateKey - Private key for current user
 */
interface userStoreInterface {
  users: Array<User>;
  currentUser: User;
  privateKey: string;
}

/**
 * Initial state for Redux store
 * @type {userStoreInterface}
 */
const initialState: userStoreInterface = {
  users: getUserStore(),
  currentUser: getCurrentUser(),
  privateKey: '456',
};

/**
 * Slice for Redux store
 */
const usersSlice = createSlice({
  name: 'userStore',
  initialState, // Define initial state
  reducers: {
    /**
     * Add a user to the collection
     */
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      localStorage.setItem('userStore', JSON.stringify(state.users));
    },
    /**
     * Remove a user from the collection
     */
    removeUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      localStorage.setItem('userStore', JSON.stringify(state.users));
    },
    /**
     * Update a user in the collection
     */
    updateUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
      localStorage.setItem('userStore', JSON.stringify(state.users));
    },
    /**
     * Add current user to the collection
     */
    addCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser.toJSON));
    },
    /**
     * Remove current user from the collection
     */
    removeCurrentUser: (state) => {
      state.currentUser = {} as User;
    },
    /**
     * Update current user in the collection
     */
    updateCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser.toJSON));
    },
    /**
     * Set private key for current user
     */
    setPrivateKey: (state, action: PayloadAction<string>) => {
      state.privateKey = action.payload;
    },
    /**
     * Load private key for current user
     */
    loadPrivateKey: (state) => {
      state.privateKey = localStorage.getItem('privateKey') ?? '';
    },
  },
});

// Export actions generated by "createSlice()":
export const {
  addUser,
  removeUser,
  updateUser,
  addCurrentUser,
  removeCurrentUser,
  updateCurrentUser,
  setPrivateKey,
  loadPrivateKey,
} = usersSlice.actions;

// Export selectors generated by "createSlice()":
export const selectUsers = (state: RootState) => state.userStore.users;
export const selectCurrentUser = (state: RootState) => state.userStore.currentUser;
export const selectPrivateKey = (state: RootState) => state.userStore.privateKey;

// Export reducer generated by "createSlice()":
export default usersSlice.reducer;
