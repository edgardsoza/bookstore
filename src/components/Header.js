import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div className="header-container">
      <div className="leftbox">
          <strong>
          <h1 className="header-title">Bookstore CMS</h1>
          </strong>
          <ul className="navbar">
            <li><NavLink className="home-link" style={{ textDecoration: 'none' }} to="/">BOOKS</NavLink></li>
            <li><NavLink className="categories-link" style={{ textDecoration: 'none' }} to="/categories">CATEGORIES</NavLink></li>
          </ul>
      </div>
      <div className="rightbox">
        <FaUser className="fa-user" />
      </div>
    </div>
  );
}
