export default function AddForm() {
  return (
  <div className="form-container">
    <h3 className="form-title">ADD NEW BOOK</h3>
    <form className="addabook">
      <input type="text" name="title" placeholder="Book title" />
      <input type="text" name="author" placeholder="Author" />
      <input type="submit" value="ADD BOOK" />
    </form>
    </div>
  )
}