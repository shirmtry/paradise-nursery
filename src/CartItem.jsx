import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, quantity: -1 }));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setShowComingSoon(true);
  };

  return (
    <div className="page">
      <Navbar />
      <main className="cart-container">
        <h1 className="page-title">Shopping Cart</h1>
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/plants" className="continue-shopping-btn">
              Browse Plants
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="cart-item-thumbnail"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">
                      Unit Price: ${item.price}
                    </p>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => handleDecrease(item.id)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => handleIncrease(item.id)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-item-total">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <p>
                Total Items: <strong>{totalQuantity}</strong>
              </p>
              <p>
                Total Cart Amount: <strong>${totalAmount.toFixed(2)}</strong>
              </p>
              <div className="cart-actions">
                <button
                  type="button"
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
                <Link to="/plants" className="continue-shopping-btn">
                  Continue Shopping
                </Link>
              </div>
              {showComingSoon && (
                <p className="coming-soon-message">
                  Coming Soon! Checkout will be available shortly.
                </p>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;
