// apiKey= 4D7y39UkNgaQrWvdHrKq

// Action types
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export const fetchBooks = () => (dispatch) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4D7y39UkNgaQrWvdHrKq/books',
)
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((book) => {
      dispatch({
        type: ADD_BOOK,
        book: {
          item_id: book,
          ...data[book][0],
        },
      });
    });
  });

// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.bookId);

    default:
      return state;
  }
};

export default booksReducer;
