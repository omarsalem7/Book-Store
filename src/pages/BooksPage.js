import React from 'react';
import Books from '../components/books/Books';
import Form from '../components/form/Form';
import './booksPage.css';

const BooksPage = () => (
  <div className="books-page">
    <Books />
    <Form />
  </div>
);
export default BooksPage;
