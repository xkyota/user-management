import '../styles/header.css';

import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">Clothery</h1>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
