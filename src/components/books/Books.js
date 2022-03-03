import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../book/Book';
import { fetchBooks } from '../../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <>
      <div className="books" style={{ marginBottom: '50px' }}>
        {books.length > 0 ? (
          books.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              category={book.category}
            />
          ))
        ) : (
          <h4>No books In your Library</h4>
        )}
      </div>
      <hr />
    </>
  );
};

export default Books;
