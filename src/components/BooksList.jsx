import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import NewBook from './NewBook';

function BooksList() {
  const data = useSelector((state) => state.books);
  return (
    <div>
      <h2>Books list</h2>
      <ul>
        {data.value.map((book) => (
          <Book
            key={book.item_id}
            book={book}
          />
        ))}
      </ul>
      <NewBook />
    </div>
  );
}

export default BooksList;
