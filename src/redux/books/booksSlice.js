import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, book) => {
      state.value.push(book);
    },
    removeBook: (state, id) => {
      state.value = state.value.filter((x) => x.id !== id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
