import React from 'react';
import Classes from './Pages/Classes';
import ProfileScreen from './Pages/Profile';

const MainPage = ({ currentPage }) => {
  return (
    <div className='mainPage'>
      {currentPage === 'Classes' && <Classes />}
      {currentPage === 'Profile' && <ProfileScreen />}
    </div>
  );
};

export default MainPage;
