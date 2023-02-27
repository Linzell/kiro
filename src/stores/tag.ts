// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '$/index';
import Tag from '#/tag';

/**
 * Interface for Redux store
 * @interface tagtoreInterface
 * @property {Map<string, Tag>} tags- Collection of tags
 */
interface tagStoreInterface {
  tags: Map<string, Tag>;
}

/**
 * Initial state for Redux store
 * @type {tagStoreInterface}
 */
const initialState: tagStoreInterface = {
  tags: new Map(),
};

/**
 * Slice for Redux store
 */
const tagsSlice = createSlice({
  name: 'tagStore',
  initialState, // Define initial state
  reducers: {
    /**
     * Add a tag to the collection
     */
    addTag: (state, action: PayloadAction<Tag>) => {
      state.tags.set(action.payload.id, action.payload);
    },
    /**
     * Remove a tag from the collection
     */
    removeTag: (state, action: PayloadAction<Tag>) => {
      state.tags.delete(action.payload.id);
    },
    /**
     * Update a tag in the collection
     */
    updateTag: (state, action: PayloadAction<Tag>) => {
      state.tags.set(action.payload.id, action.payload);
    },
  },
});

// Export actions generated by "createSlice()":
export const { addTag, removeTag, updateTag } = tagsSlice.actions;

// Export selector generated by "createSlice()":
export const selectTags = (state: RootState) => state.tagStore.tags;

// Export reducer generated by "createSlice()":
export default tagsSlice.reducer;
