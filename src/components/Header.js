import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="header-container">
      <strong>
        <div className="header-title">Bookstore CMS</div>
      </strong>
      <ul className="navbar">
        <li><NavLink style={{ textDecoration: 'none' }} to="/">Home</NavLink></li>
        <li><NavLink style={{ textDecoration: 'none' }} to="/categories">Categories</NavLink></li>
      </ul>
    </div>
  );
}
