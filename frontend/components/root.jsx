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

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path='menu' component={MenuContainer}>
            <Route path='menu/dinner' component={DinnerContainer}></Route>
            <Route path='menu/lunch' component={LunchContainer}></Route>
            <Route path='menu/sunset' component={SunsetContainer}></Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
