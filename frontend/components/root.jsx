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

import SessionFormContainer from './session/session_form_container';

const Root = ({store}) => {
  const _populateStore = () => {
    //dispatch fetch all menues
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser.username;
    console.log(currentUser, "logged in redirect");
    if (currentUser) replace('/');
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path='about' component={About}/>
          <Route path='menu' component={MenuContainer} onEnter={_populateStore}>
            <IndexRoute component={DinnerContainer} />
            <Route path='lunch' component={LunchContainer}></Route>
            <Route path='sunset' component={SunsetContainer}></Route>
            <Route path='dinner' component={DinnerContainer}></Route>
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
