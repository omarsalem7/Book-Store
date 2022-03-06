// apiKey= 4D7y39UkNgaQrWvdHrKq
/* eslint-disable camelcase */
// Action types

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

const getBooks = (books) => ({
  type: GET_BOOKS,
  payload: books,
});

export const fetchBooks = () => (dispatch) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4D7y39UkNgaQrWvdHrKq/books',
)
  .then((response) => response.json())
  .then((data) => {
    const obj = Object.entries(data);
    const books = obj.map(([item_id, value]) => {
      const [book] = value;
      return { ...book, item_id };
    });
    dispatch(getBooks(books));
  });

// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);
    case GET_BOOKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
