import React from 'react';
import MainMenu from './components/MainMenu';

const App = () => {
  return (
    <div>
      <MainMenu />
      <div className="main-content">
        {/* Add the rest of your application components here */}
        <h1>Welcome to My App</h1>
        {/* Other components and content */}
      </div>
    </div>
  );
};

export default App;
