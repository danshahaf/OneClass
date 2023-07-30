import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainMenu from './components/MainMenu';
import MainPage from './components/MainPage';
import SignIn from './components/SignIn'; 

function App() {
  const [currentPage, setCurrentPage] = useState('Classes');

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Sign-in Route */}
          <Route path="/signin" element={<SignIn />} />

          {/* Main Application Route */}
          <Route path="/main" element={
            <div className="main-container">
              <MainMenu changePage={setCurrentPage} />
              <MainPage currentPage={currentPage} />
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
