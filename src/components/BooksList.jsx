import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import NewBook from './NewBook';
import { fetchBooks } from '../redux/books/booksSlice';

function BooksList() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.books.value);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="books-container">
      <ul>
        {data.map((book) => (
          <Book
            key={book.item_id}
            book={book}
          />
        ))}
      </ul>
      <span className="Line" />
      <NewBook />
    </div>
  );
}

export default BooksList;
