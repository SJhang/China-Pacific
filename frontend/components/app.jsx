import React from 'react';

//custom components
import Sidebar from './shared/sidebar';

const App = (props) => {
  const toggleSidebar = (e) => {
    e.preventDefault();
    let outer = $("#outer-wrap");

    outer.toggleClass("toggled");

    // failed to incorporate sequencial loading
    // let duration = 1000;
    //
    // sidebarOptions.each(i => {
    //   if (outer.hasClass("toggled")) {
    //     setTimeout(() => $(sidebarOptions[i]).addClass("animated fadeInLeft"), 200);
    //   } else {
    //     $(sidebarOptions[i]).removeClass("animated fadeInLeft");
    //   }
    // });
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
