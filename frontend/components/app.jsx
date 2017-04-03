import React from 'react';

//custom components
import Sidebar from './shared/sidebar';

const App = (props) => (
  <div className="app">
    <Sidebar location={props.location}/>
    {props.children}
  </div>
);

export default App;
