import { createSlice } from '@reduxjs/toolkit';

let nextBookId = 1;

const bookSlice = createSlice({
  name: 'books',
  initialState: [
    {
      "item_id": "item1",
      "title": "The Great Gatsby",
      "author": "John Smith",
      "category": "Fiction"
    }, 
    {
      "item_id": "item2",
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "category": "Fiction"
    },
    {
      "item_id": "item3",
      "title": "The Selfish Gene",
      "author": "Richard Dawkins",
      "category": "Nonfiction"
    }],
  
  reducers: {
    addBook: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ title, author }) => {
        return {
          payload: {
            item_id: nextBookId++,
            title,
            author,
          },
        };
      },
    },
    removeBook(state, action) {
      const bookId = action.payload;
      return state.filter(book => book.item_id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
