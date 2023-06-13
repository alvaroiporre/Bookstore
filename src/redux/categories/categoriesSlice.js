import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategory: (state) => {
      state.categories = 'Under construction';
    },
  },
});

export const { checkCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
