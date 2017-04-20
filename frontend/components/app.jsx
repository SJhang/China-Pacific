import React from 'react';

//custom components
import Sidebar from './sidebar/sidebar';
import ToggleSidebar from './sidebar/sidebar_toggle_button';

const App = (props) => {

  return (
    <div id="outer-wrap">
      <div id="swipe-area" />
      {/* Sidebar */}
      <Sidebar location={props.location}/>

      {/* Page Content */}
      <div id="page-content-wrap">
        <ToggleSidebar />
        <main className="container-fluid" id="main">
          {props.children}
        </main>
      </div>
    </div>
  );
};
export default App;
