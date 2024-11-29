import React from 'react';
import './style.css'; // You can create a separate CSS file for styling

const Header = () => {
  return (
    <card>
    <header className="header">
      <img src="bmlogo2.png" alt="Logo" className="logo"/>
      <h1 className="title">BetterMind</h1>
      <nav>
        <ul className="navList">
          <li className="navItem"><a href="/" className="navLink">Home</a></li>
          <li className="navItem"><a href="https://novathon.vercel.app/login" className="navLink">Login</a></li>
        </ul>
      </nav>
    </header></card>
  );
};

export default Header;