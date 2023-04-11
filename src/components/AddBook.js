import React, { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';
import { useDispatch } from "react-redux";

export default function AddForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = e => setTitle(e.target.value);
  const handleAuthorChange = e => setAuthor(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form className="addabook" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" onChange={handleTitleChange}/>
        <input type="text" name="author" placeholder="Author" onChange={handleAuthorChange}/>
        <input type="submit" value="ADD BOOK"/>
      </form>
    </div>
  );
}
