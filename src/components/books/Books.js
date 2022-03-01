import React, { useState } from 'react';
import Book from '../book/Book';

const Books = () => {
  const [books] = useState([
    { id: 1, title: 'book1', author: 'omar' },
    { id: 2, title: 'book2', author: 'salem' },
  ]);
  return (
    <div className="books">
      {books.map(({ id, title, author }) => (
        <Book key={id} title={title} author={author} />
      ))}
    </div>
  );
};

export default Books;
