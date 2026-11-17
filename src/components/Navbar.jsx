import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">🌿</span>
        <span>Paradise Nursery</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/plants" className="nav-link">
          Plants
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/cart" className="nav-link cart-link">
          <span className="cart-icon" aria-label="Cart">
            🛒
          </span>
          Cart
          {totalQuantity > 0 && (
            <span className="cart-badge">{totalQuantity}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
