import { useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

export default function BookItem() {
  const dispatch = useDispatch();
  const bookData = useSelector((state) => state.books);
  const booksArr = Object.keys(bookData).map((key) => ({
    item_id: key,
    ...bookData[key],
  }));

  useEffect(() => {
    dispatch(fetchBooks());
  },
);

  return (
    <ul className="book-item">
      {booksArr.map((item) => (
        <li key={item.item_id}>
          {item[0].title}
          <br />
          {item[0].author}
          <br />
          <button className="delete-button" aria-label="Delete-button" type="button" onClick={() => dispatch(removeBook(item.item_id))}><FaTrash /></button>
          <br />
          <br />
        </li>
      ))}
      <hr />
    </ul>
  );
}
