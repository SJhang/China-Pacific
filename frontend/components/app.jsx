import React from 'react';

//custom components
// import Sidebar from './shared/sidebar';
import Header from './shared/header';
import Footer from './shared/footer';

const App = ({ children }) => (
  <div className="app">
    <Header />
      {children}
    <Footer />
  </div>
);

export default App;
