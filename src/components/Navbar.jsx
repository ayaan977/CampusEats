import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <header>
      <div className="logo">CampusEats</div>
      <nav>
        <div className="menu-toggle">☰</div>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/restaurants" className={location.pathname === '/restaurants' ? 'active' : ''}>
            Restaurants
          </Link>
          <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>
            Cart
          </Link>
          <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;