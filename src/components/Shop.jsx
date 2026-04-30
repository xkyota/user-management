import '../styles/shop.css';

import { useNavigate } from 'react-router-dom';

import clothes from '../data/clothes.json';
import { useAuth } from '../context/AuthContext.jsx';

export default function Shop() {
  const navigate = useNavigate();
  const { isAuthenticated, beginPurchase } = useAuth();
  const items = Array.isArray(clothes) ? clothes : [];

  const handleBuy = item => {
    beginPurchase(item);

    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/payment' } } });
      return;
    }

    navigate('/payment');
  };

  return (
    <main id="shop" className="shop">
      <div className="container">
        <h2 className="shop-title">Featured Clothing</h2>
        <p className="shop-subtitle">
          Купувати товари можуть лише зареєстровані користувачі.
        </p>
        <div className="product-grid">
          {items.map(item => (
            <article key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="btn" type="button" onClick={() => handleBuy(item)}>
                Buy now
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
