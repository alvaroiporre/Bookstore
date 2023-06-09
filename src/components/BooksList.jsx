import React from 'react';
import Book from './Book';

const data = [
  { title: 'one book', author: 'one author' },
  { title: 'second book', author: 'second author' }];

function BooksList() {
  return (
    <>
      {data.forEach((book) => {
        <Book title={book.title} author={book.author} />;
      })}
    </>
  );
}

export default BooksList;
