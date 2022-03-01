// Action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  { id: '1', title: 'book1', catagory: 'Fiction' },
  { id: '2', title: 'book2', catagory: 'Drama' },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.bookId);

    default:
      return state;
  }
};

export default booksReducer;
