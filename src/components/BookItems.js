import { FaTrash } from 'react-icons/fa';
import { removeBook } from '../redux/books/booksSlice';
import { useSelector, useDispatch } from "react-redux"

export default function BookItem() {
  const dispatch = useDispatch();
  const booklist = useSelector(state => state.books);

  return (
    <ul className="book-item">
      {booklist.map((item) => (
        <li key={item.item_id}>
          {item.title}
          <br />
          {item.author}
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
