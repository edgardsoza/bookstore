export default function BookList() {
  const booklist = [
    {
      title: 'The Hunger Games',
      Author: 'Suzanne Collins',
    },
    {
      title: 'Dune',
      Author: 'Frank Herbert',
    },
    {
      title: 'Capital in the Twenty-First Century',
      Author: 'Suzanne Collins',
    },
  ];

  return (
    <div className="main-container">
      <div className="bookList-container">
        <div className="book-item">
        {booklist.map((item) => (
          <li key={item.id}>
            {item.title}
            <br></br>
            {item.Author}
            <br></br>
            <br></br>
          </li>
        ),
      )}
        </div>
        <hr />
      </div>
      <div className="form-container">
        <h3 className="form-title">ADD NEW BOOK</h3>
        <form className="addabook">
        <input type="text" name="title" placeholder="Book title" />
        <input type="text" name="author" placeholder="Author" />
        <input type="submit" value="ADD BOOK" />
        </form>
      </div>
    </div>
  );
}
