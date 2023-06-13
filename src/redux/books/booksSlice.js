import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.value = [...state.value, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.value = state.value.filter((x) => x.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
