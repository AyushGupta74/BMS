import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(to right, #0099cc, #33cccc)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ position: 'absolute', right: 0, width: '85%' }}>
          Budget Master
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto" style={{ width: '100%' }}>
            <li className="nav-item" style={{ position: 'absolute', right: 0, width: '24%' }}>
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item" style={{ position: 'absolute', right: 0, width: '19%' }}>
              <Link className="nav-link" to="/signin">
                Signin
              </Link>
            </li>
            <li className="nav-item" style={{ position: 'absolute', right: 0, width: '14%' }}>
              <Link className="nav-link" to="/contactus">
                Contact us
              </Link>
            </li>
            <li className="nav-item" style={{ position: 'absolute', right: 0, width: '7%' }}>
              <Link className="nav-link" to="/aboutus">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
 
 