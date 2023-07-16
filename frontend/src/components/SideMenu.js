import React from 'react';
import './SideMenu.css';

const SideMenu = ({ isOpen, mainContentHeight }) => {
  return (
    <div
      className={`side-menu ${isOpen ? 'open' : ''}`}
      style={{ height: mainContentHeight }}
    >
      {/* Add your side menu content here */}
      <ul className="menu-options">
        <li>
          <a href="#">Calendar</a>
        </li>
        <li>
          <a href="#">Planner</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">Extracurriculars</a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
