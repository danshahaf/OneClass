import React from 'react';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <button className="menu-button">Home</button>
        </li>
        <li>
          <button className="menu-button">About</button>
        </li>
        <li>
          <button className="menu-button">Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
