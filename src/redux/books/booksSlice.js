const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = { books: [] };

export const addBook = (item) => ({
  type: ADD_BOOK,
  payload: item,
});

export const removeBook = (itemIndex) => ({
  type: REMOVE_BOOK,
  payload: itemIndex,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case REMOVE_BOOK: {
      const newItems = [...state.items];
      newItems.splice(action.payload, 1);
      return {
        ...state,
        items: newItems,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
