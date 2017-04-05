import React from 'react';

//custom components
import Sidebar from './shared/sidebar';

const App = (props) => (
  <div className="container-fluid body-wrap">
    <div className="row">
      <div className="col-3 col-sm-3 col-xs-1 col-lg-3 collapse in"
        id="sidebar">
        <Sidebar
          className="row"
          location={props.location}/>
      </div>
      <main className="col-12 col-sm-9 col-xs-11 col-lg-9" id="main">
        <div className="row">
          {props.children}
        </div>
      </main>
    </div>
  </div>
);

export default App;
