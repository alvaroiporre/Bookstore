import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import formatObject from '../../tools/formatObject';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZRWdjTtEajZlG1AM3x6j/books';

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios
    .get(url);
  return formatObject(response.data);
});

const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${url}/${bookId}`);
  return bookId;
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(url, book);
  if (response.data === 'Created') {
    return book;
  }
  return null;
});

const initialState = {
  value: [],
  status: 'idle',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.status = 'loading';
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.value = action.payload;
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      const bookId = action.payload;
      state.value = state.value.filter((x) => x.item_id !== bookId);
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      const newBook = action.payload;
      if (newBook) state.value = [...state.value, newBook];
    });
  },
});

export { fetchBooks, addBook, removeBook };

export default booksSlice.reducer;
