import '../styles/registration.css';

import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.jsx';

export default function PurchaseHistory() {
  const { currentUser } = useAuth();
  const purchases = currentUser?.purchases || [];

  return (
    <div className="registration-page">
      <div className="registration-card registration-card-wide">
        <div className="registration-header">
          <h1 className="registration-title">Історія покупок</h1>
          <p className="registration-subtitle">
            Тут відображаються товари, які користувач уже оплатив.
          </p>
        </div>

        {purchases.length === 0 ? (
          <div className="empty-state">
            <p>Поки що немає оплачених товарів.</p>
          </div>
        ) : (
          <div className="history-list">
            {purchases.map(item => (
              <article key={`${item.id}-${item.purchasedAt}`} className="history-item">
                <img className="history-image" src={item.img} alt={item.name} />
                <div className="history-content">
                  <h2>{item.name}</h2>
                  <p className="summary-price">{item.price}</p>
                  <p className="history-date">
                    Оплачено: {new Date(item.purchasedAt).toLocaleString()}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        <Link className="form-link" to="/">
          Повернутися до магазину
        </Link>
      </div>
    </div>
  );
}
