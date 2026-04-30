import '../styles/footer.css';

import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Clothery — All rights reserved.</p>
      </div>
    </footer>
  );
}
