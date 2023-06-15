import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handlerAddBook = (e) => {
    e.preventDefault();
    if (title === '' || author === '' || category === '') {
      setError(true);
    } else {
      setError(false);
      dispatch(addBook({
        item_id: uuidv4(), title, author, category,
      }));
      setAuthor('');
      setTitle('');
      setCategory('');
    }
  };
  return (
    <form action="" className="add-book-form">
      <h3>Add new Book</h3>
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        id="author"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        id="category"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input type="submit" value="New Book" onClick={handlerAddBook} />
      {error && <p className="error">Please fill all the fields</p>}
    </form>
  );
}

export default NewBook;
