import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = ({ id, title, catagory }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{title}</h2>
      <h5>{catagory}</h5>
      <button id={id} type="button" onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  catagory: PropTypes.string.isRequired,
};

export default Book;
