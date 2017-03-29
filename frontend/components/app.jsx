import React from 'react';

//custom components
import Header from './shared/header';
import Sidebar from './shared/sidebar';

const App = ({ children }) => (
  <div className="app">
    <Sidebar />
      {children}
  </div>
);

export default App;
