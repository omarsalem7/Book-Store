import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <h2>{title}</h2>
    <h5>{author}</h5>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
