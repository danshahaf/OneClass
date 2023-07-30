import React from 'react';
import Classes from './Pages/Classes';
import Profile from './Pages/Profile';

const MainPage = ({ currentPage }) => {
  return (
    <div className='mainPage'>
      {currentPage === 'Classes' && <Classes />}
      {currentPage === 'Profile' && <Profile />}
    </div>
  );
};

export default MainPage;
