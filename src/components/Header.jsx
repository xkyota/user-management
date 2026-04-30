import '../styles/header.css';

import { Link, NavLink } from 'react-router-dom';

import { useAuth } from '../context/AuthContext.jsx';

export default function Header() {
  const { currentUser, isAuthenticated, logoutUser } = useAuth();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" to="/">Clothery</Link>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <Link to="/#shop">Shop</Link>
          {isAuthenticated ? (
            <>
              <NavLink to="/history">History</NavLink>
              <span className="user-greeting">{currentUser.firstName}</span>
              <button className="nav-button" type="button" onClick={logoutUser}>
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
