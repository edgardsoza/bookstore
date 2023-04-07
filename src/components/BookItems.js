import { FaTrash } from "react-icons/fa";

const booklist = [
    {
      id: 1,
      title: 'The Hunger Games',
      Author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      Author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      Author: 'Suzanne Collins',
    },
  ];

export default function BookItem() {
    return (
    <ul className="book-item">
    {booklist.map((item) => (
      <li key={item.id}>
        {item.title}
        <br />
        {item.Author}
        <br />
        <button type="submit"><FaTrash /></button>
        <br />
        <br />
      </li>
    ))}
  <hr />
  </ul>
  )
}