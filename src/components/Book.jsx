import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchRemoveBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  const handleDeleteBook = () => {
    dispatch(fetchRemoveBook(book[0]));
  };

  return (
    <li>
      <h3>{book[1][0].title}</h3>
      <h4>{book[1][0].author}</h4>
      <p>{book[1][0].category}</p>
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
