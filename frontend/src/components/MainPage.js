import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './MainPage.css';
import ClassesPage from './Pages/ClassesPage'

const MainPage = ({ mainContentHeight }) => {
  

  return (
    <div className='mainPage'>
        <ClassesPage />
    </div>
  );
};

export default MainPage;
