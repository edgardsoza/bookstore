import BookItem from './BookItems';
import AddForm from './AddBook';

export default function BookList() {
  return (
    <div className="main-container">
      <div className="bookList-container">
        <BookItem />
      </div>
    <div className="add-form">
      <hr className="breakline" />
      <AddForm />
    </div>
    </div>
  );
}
