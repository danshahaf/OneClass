import React from 'react';
import Classes from './Pages/Classes';
import Profile from './Pages/Profile';
import Opportunities from './Pages/Opportunities';
import Extracurriculars from './Pages/Extracurriculars';
import Feed from './Pages/Feed';
import Dispatch from './Pages/Dispatch';
import Calendar from './Pages/Calendar';
import Tasks from './Pages/Tasks';
import Settings from './Pages/Settings';

const MainPage = ({ currentPage }) => {
  return (
    <div className='main-page'>
      {currentPage === 'Classes' && <Classes />}
      {currentPage === 'Profile' && <Profile />}
      {currentPage === 'Opportunities' && <Opportunities />}
      {currentPage === 'Extracurriculars' && <Extracurriculars />}
      {currentPage === 'Feed' && <Feed />}
      {currentPage === 'Dispatch' && <Dispatch />}
      {currentPage === 'Calendar' && <Calendar />}
      {currentPage === 'Tasks' && <Tasks />}
      {currentPage === 'Settings' && <Settings />}
      {/* ... Add other components as needed ... */}
    </div>
  );
};


export default MainPage;
