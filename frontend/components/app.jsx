import React from 'react';

//custom components
import Sidebar from './shared/sidebar';

const App = (props) => {

  const toggleSidebar = (e) => {
    e.preventDefault();
    let outer = $("#outer-wrap");
    outer.toggleClass("toggled");
  };

  const swipeToggleSidebar = e => {
    e.preventDefault();
    $("#outer-wrap").swipe({
      swipeStatus:function(event, phase, direction, distance, duration, fingers) {
        if (phase === "move" && direction === "right") {
          $("#outer-wrap").toggleClass("toggled");
          return false;
        } else if (phase === "move" && direction === "left") {
          $("#outer-wrap").toggleClass("toggled");
          return false;
        }
      }
    });
  };

  return (
    <div id="outer-wrap">

      {/* Sidebar */}
      <Sidebar location={props.location}/>

      {/* Page Content */}
      <div id="page-content-wrap">
        <div className="phone-header">
          <button
            id="toggle-sidebar"
            onClick={(e) => toggleSidebar(e)}>
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          </button>
        </div>
        <main className="container-fluid" id="main">
          {props.children}
        </main>
      </div>
    </div>
  );
};
export default App;
