import '../styles/registration.css';

import { Link, Navigate, useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.jsx';

export default function Payment() {
  const navigate = useNavigate();
  const { pendingPurchase, completePurchase } = useAuth();

  if (!pendingPurchase) {
    return <Navigate to="/" replace />;
  }

  const handlePayment = () => {
    const isPaid = window.confirm('Підтвердити оплату товару?');

    if (!isPaid) {
      return;
    }

    completePurchase();
    navigate('/history');
  };

  return (
    <div className="registration-page">
      <div className="registration-card">
        <div className="registration-header">
          <h1 className="registration-title">Оплата</h1>
          <p className="registration-subtitle">
            Якщо оплата успішна, товар з&apos;явиться в історії покупок.
          </p>
        </div>

        <div className="summary-card">
          <img className="summary-image" src={pendingPurchase.img} alt={pendingPurchase.name} />
          <div className="summary-content">
            <h2>{pendingPurchase.name}</h2>
            <p className="summary-price">{pendingPurchase.price}</p>
            <p className="summary-note">
              Натисніть кнопку нижче, щоб підтвердити оплату. Якщо оплату не виконано, ви
              залишаєтесь на цій сторінці.
            </p>
          </div>
        </div>

        <button className="registration-button" type="button" onClick={handlePayment}>
          Оплатити товар
        </button>

        <Link className="form-link" to="/">
          Повернутися до магазину
        </Link>
      </div>
    </div>
  );
}
