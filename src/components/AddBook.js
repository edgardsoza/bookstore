import React, { useState } from 'react';
import axios from 'axios';

export default function AddForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const book = { title, author, category: 'fiction', item_id: Math.floor(Math.random() * 100000) };
    await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/U8RwVDIGkwFcL15zoJWb/books',book)
  setTitle('');
  setAuthor('');
  };

  return (
    <div className="form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form className="addabook" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" value={title} onChange={handleTitleChange} />
        <input type="text" name="author" placeholder="Author" value={author} onChange={handleAuthorChange} />
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}
