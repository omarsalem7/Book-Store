import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import './book.css';

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
    <div className="book-container">
      <div className="book-details">
        <h5 className="book-category">{category}</h5>
        <h2 className="book-title">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </h2>
        <button id={id} className="btn" type="button" onClick={removeHandler}>
          Remove
          <span className="vertical-line"> | </span>
        </button>
        <button id={id} className="btn" type="button">
          Comments
          {' '}
          <span className="vertical-line"> | </span>
        </button>
        <button id={id} className="btn" type="button">
          Edit
        </button>
      </div>
      <div className="book-progress">
        <svg className="svg" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" strokeDasharray="264 0" />
          <circle
            className="bar"
            cx="50"
            cy="50"
            r="42"
            strokeDasharray={`${70 * 2.64} ${(100 - 70) * 2.64}`}
          />
        </svg>
        <div className="count">
          <p>65%</p>
          <span className="book-status">Completed</span>
        </div>
      </div>
      <div className="book-sperator">
        <p className="book-sperator-line" />
      </div>
      <div className="book-update-progress">
        <small className="book-title">CURRENT CHAPTER</small>
        <span>Chapter 1</span>
        <button className="progress-button" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
