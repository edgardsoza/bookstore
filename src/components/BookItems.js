import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Progressbar = ({ percentage }) => (
  <div style={{ width: '100px' }}>
    <CircularProgressbar value={percentage} />
  </div>
);

Progressbar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default function BookItem() {
  const dispatch = useDispatch();
  const bookData = useSelector((state) => state.books);
  const booksArr = Object.keys(bookData).map((key) => ({
    item_id: key,
    ...bookData[key],
  }));

  useEffect(() => {
    dispatch(fetchBooks());
  });

  return (
    <>
      {booksArr.map((item) => (
        <div className="main-container-books" key={`main-container-${item.item_id}`}>
          <div className="left-item-container" key={`left-item-container-${item.item_id}`}>
            <div className="book-box" key={`book-box-${item.item_id}`}>
              <ul className="book-item" key={`book-item-${item.item_id}`}>
                <li key={item.item_id}>
                  <span className="category">{item[0].category}</span>
                  <br />
                  <span className="title">{item[0].title}</span>
                  <br />
                  <span className="author">{item[0].author}</span>
                </li>
              </ul>
            </div>
            <div className="buttons-box" key={`buttons-box-${item.item_id}`}>
              <button type="button" className="button" aria-label="comment-button">Comment</button>
              <span className="separator">|</span>
              <button type="button" className="button" aria-label="remove-button" onClick={() => dispatch(removeBook(item.item_id))}>Remove</button>
              <span className="separator">|</span>
              <button type="button" className="button" aria-label="delete-button">Edit </button>
            </div>
          </div>
          <div className="middle-item-container" key={`middle-item-container-${item.item_id}`}>
            <div className="progressbar-container">
              <Progressbar percentage={75} />
            </div>
            <div className="progress-percentage">
              75%
              <div className="completed-bar">
              Completed
              </div>
            </div>
          </div>
          <div className="right-item-container" key={`right-item-container-${item.item_id}`}>
            <span className="current-chapter" key={`current-chapter-${item.item_id}`}>
              CURRENT CHAPTER
            </span>
            <span className="chapter-info" key={`chapter-info-${item.item_id}`}>
              Chapter 3: A Lesson Learned
            </span>
            <button type="button" className="button-update" aria-label="update-progress">UPDATE PROGRESS </button>
          </div>
        </div>
      ))}
    </>
  );
}
