import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import formatObject from '../../tools/formatObject.js';

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooks: (state, action) => {
      state.value = action.payload;
    },
    addBook: (state, action) => {
      const newBook = action.payload;
      state.value = [...state.value, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.value = state.value.filter((x) => x.item_id !== bookId);
    },
  },
});

export const { getBooks, addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

export const fetchBooks = () => (dispatch) => {
  axios
    .get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZRWdjTtEajZlG1AM3x6j/books')
    .then((response) => {
      dispatch(getBooks(formatObject(response.data)));
    })
    .catch((error) => console.error(error));
};

export const fetchRemoveBook = (bookId) => (dispatch) => {
  axios
    .delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZRWdjTtEajZlG1AM3x6j/books/${bookId}`)
    .then((response) => {
      if (response.data === 'The book was deleted successfully!') {
        dispatch(removeBook(bookId));
      }
    })
    .catch((error) => console.error(error));
};

export const fetchAddBook = (book) => (dispatch) => {
  axios
    .post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZRWdjTtEajZlG1AM3x6j/books', book)
    .then((response) => {
      if (response.data === 'Created') {
        dispatch(addBook(book));
      }
    })
    .catch((error) => console.error(error));
};
