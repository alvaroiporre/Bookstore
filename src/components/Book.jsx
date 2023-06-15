import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  const handleDeleteBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <li>
      <h3>{book.title}</h3>
      <h4>{book.author}</h4>
      <p>{book.category}</p>
      <button type="submit" onClick={handleDeleteBook}>Delete Book</button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
