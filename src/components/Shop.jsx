import '../styles/shop.css';

import React from 'react';

import clothes from '../data/clothes.json';

export default function Shop() {
  const items = Array.isArray(clothes) ? clothes : [];

  return (
    <main id="shop" className="shop">
      <div className="container">
        <h2 className="shop-title">Featured Clothing</h2>
        <div className="product-grid">
          {items.map(item => (
            <article key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <button className="btn" disabled>View</button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
