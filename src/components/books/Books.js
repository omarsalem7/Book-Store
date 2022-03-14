import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../book/Book';

const Books = () => {
  const books = useSelector((state) => state.books);

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
