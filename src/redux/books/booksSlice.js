import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/U8RwVDIGkwFcL15zoJWb/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  const response = await fetch(`${API_URL}/${bookId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: [],

  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, ((state, action) => {
        return action.payload;
      }));
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
