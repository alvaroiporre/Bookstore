import React from 'react';
import PropTypes from 'prop-types';

function Book({ title = 'defaut title', author = 'default author' }) {
  return (
    <>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button type="submit">Delete Book</button>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
