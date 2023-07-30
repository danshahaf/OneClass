import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import SideMenu from './SideMenu';
import './MainMenu.css';

const MainMenu = ({ mainContentHeight }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <nav className="main-menu">
      <div className="left-menu">
        <button className="menu-button" onClick={toggleSideMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <SideMenu isOpen={isSideMenuOpen} mainContentHeight={mainContentHeight} />
      </div>
      <ul>
        <li>
          <button className="menu-button">
            <FontAwesomeIcon icon={faHome} />
          </button>
        </li>
      
        <li>
        <button className="menu-button" onClick={toggleNotification}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        {isNotificationOpen && (
          <div className="notification-window">
            {/* Add the content of the notification window */}
            This is the notification window.
          </div>
        )}
        </li>

        <li>
          <button className="menu-button">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
