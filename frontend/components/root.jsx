import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

// custom components
import SplashContainer from './splash/splash_container';

import MenuContainer from './menu/menu_container';
import LunchContainer from './menu/lunch_container';
import SunsetContainer from './menu/sunset_container';
import DinnerContainer from './menu/dinner_container';
import Sides from './menu/sides';
import Chef from './menu/chef';
import MenuSplash from './menu/menu_splash';

import About from './sidebar/about';
import Location from './sidebar/location';
import Contact from './sidebar/contact';
import Press from './sidebar/press';

const Root = ({store}) => {
  const _populateStore = () => {
    //dispatch fetch all menues
  };

  const _scrollTop = (nextState) => {
    if (nextState.location.action === "PUSH") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path='about' component={About}/>
          <Route path='menu' component={MenuContainer}>
            <IndexRoute component={MenuSplash}/>
            <Route path='sides' component={Sides} onEnter={_scrollTop}></Route>
            <Route path='lunch' component={LunchContainer} onEnter={_scrollTop}></Route>
            <Route path='sunset' component={SunsetContainer} onEnter={_scrollTop}></Route>
            <Route path='dinner' component={DinnerContainer} onEnter={_scrollTop}></Route>
            <Route path='chef' component={Chef} onEnter={_scrollTop}></Route>
          </Route>
          <Route path='location' component={Location} />
          <Route path='contact' component={Contact} />
          <Route path='press' component={Press} />
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
