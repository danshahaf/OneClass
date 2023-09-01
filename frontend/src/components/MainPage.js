import React from 'react';
import Classes from './Pages/Classes';
import Profile from './Pages/profile-page/Profile';
import Opportunities from './Pages/Opportunities';
import Extracurriculars from './Pages/Extracurriculars';
import Feed from './Pages/Feed';
import Dispatch from './Pages/Dispatch';
import Calendar from './Pages/Calendar';
import Tasks from './Pages/Tasks';
import Settings from './Pages/Settings';
import Grades from './Pages/grade-page/Grades';

const MainPage = ({ currentPage }) => {
  return (
    <div className='main-page'>
      {currentPage === 'Profile' && <Profile />}
      {currentPage === 'Classes' && <Classes />}
      {currentPage === 'Opportunities' && <Opportunities />}
      {currentPage === 'Extracurriculars' && <Extracurriculars />}
      {currentPage === 'Feed' && <Feed />}
      {currentPage === 'Dispatch' && <Dispatch />}
      {currentPage === 'Calendar' && <Calendar />}
      {currentPage === 'Tasks' && <Tasks />}
      {currentPage === 'Settings' && <Settings />}
      {/* ... Add other components as needed ... */}

      {currentPage === 'Grades' && <Grades />}
    </div>
  );
};


export default MainPage;
