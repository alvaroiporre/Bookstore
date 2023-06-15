import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  const handleDeleteBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <li className="book-list">
      <div>
        <p className="category">{book.category}</p>
        <h3 className="book-title">{book.title}</h3>
        <h4 className="author">{book.author}</h4>
        <div className="actions">
          <button type="submit">Comments</button>
          <span className="Line-2" />
          <button type="submit" onClick={handleDeleteBook}>Remove</button>
          <span className="Line-2" />
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="percentage">
        <span className="Oval-2" />
        <div>
          <p className="number-percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <span className="Line-3" />
      <div>
        <h4 className="current-chapter">CURRENT CHAPTER</h4>
        <p className="chapter-num">Chapter 17</p>
        <a className="update-progress" href="#">UPDATE PROGRESS</a>
      </div>
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
