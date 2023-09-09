import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import MainMenu from './components/MainMenu';
import MainPage from './components/MainPage';
import SignIn from './components/SignIn'; 
import Overview from './components/Overview'; 
import Notifications from './components/Notifications'; 

function App() {
  const [currentPage, setCurrentPage] = useState('Profile');

  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          {/* Sign-in Route */}
          <Route path="/signin" element={<SignIn />} />

          {/* Sign-in Route */}
          <Route path="/overview" element={
            <div className = "overview-container main-container">
              <MainMenu />
              <Overview />
            </div>
            
          } />

          {/* Main Application Route */}
          <Route path="/student" element={
            <div className="main-container">
                <MainMenu />
                <SideMenu changePage={setCurrentPage} />
                <MainPage currentPage={currentPage} />
                <Notifications />
            </div>
          } />


          {/* Default Route: Redirect to Sign-in */}
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
