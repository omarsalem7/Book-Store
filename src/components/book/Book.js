import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = ({ id, title, category }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4D7y39UkNgaQrWvdHrKq/books/${id}`,
      {
        method: 'DELETE',
      },
    );
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h2>{title}</h2>
      <h5>{category}</h5>
      <button id={id} type="button" onClick={removeHandler}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
