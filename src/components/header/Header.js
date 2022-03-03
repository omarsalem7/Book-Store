import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'rgb(85, 85, 85)',
    fontSize: '0.9rem',
  };
  return (
    <div className="header-container">
      <ul className="header">
        <li className="header-item">Books Store</li>
        <li>
          <NavLink style={linkStyle} to="/">
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
      <span className="logo material-icons">&#xE87C;</span>
    </div>
  );
};

export default Header;
