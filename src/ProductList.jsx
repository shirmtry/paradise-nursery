import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import plants, { categories } from './data/plants';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (plantId) => cartItems.some((item) => item.id === plantId);

  return (
    <div className="page">
      <Navbar />
      <main className="product-list-container">
        <h1 className="page-title">Our Plants</h1>
        <p className="page-subtitle">
          Choose from our hand-picked collection of healthy houseplants.
        </p>
        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="product-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => {
                  const added = isInCart(plant.id);
                  return (
                    <div key={plant.id} className="product-card">
                      <img
                        src={plant.img}
                        alt={plant.name}
                        className="product-thumbnail"
                      />
                      <div className="product-info">
                        <h3 className="product-name">{plant.name}</h3>
                        <p className="product-price">${plant.price}</p>
                        <button
                          type="button"
                          className={`add-to-cart-btn ${added ? 'added' : ''}`}
                          disabled={added}
                          onClick={() => handleAddToCart(plant)}
                        >
                          {added ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
