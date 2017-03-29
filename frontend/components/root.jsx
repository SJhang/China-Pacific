import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

// custom components
import SplashContainer from './splash/splash_container';
import MenuContainer from './menu/menu_container';
import DinnerContainer from './menu/dinner_container';
import LunchContainer from './menu/lunch_container';
import SunsetContainer from './menu/sunset_container';
import About from './sidebar/about';
import Location from './sidebar/location';
import Contact from './sidebar/contact';
import Press from './sidebar/press';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path='about' component={About}/>
          <Route path='menu' component={MenuContainer}>
            <Route path='menu/lunch' component={LunchContainer}></Route>
            <Route path='menu/sunset' component={SunsetContainer}></Route>
            <Route path='menu/dinner' component={DinnerContainer}></Route>
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
