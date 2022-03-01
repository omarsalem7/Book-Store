import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../book/Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books">
      {books.length > 0 ? (
        books.map(({ id, title, catagory }) => (
          <Book key={id} id={id} title={title} catagory={catagory} />
        ))
      ) : (
        <h4>No books In your Library</h4>
      )}
    </div>
  );
};

export default Books;
