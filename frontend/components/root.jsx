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
import MenuEditContainer from './menu_items/menu_edit_container';

import { fetchDishes } from '../actions/dish_actions';

const Root = ({store}) => {

  const _scrollTop = (nextState) => {
    if (nextState.location.action === "PUSH") {
      window.scrollTo(0, 0);
    }
  };

  const _populateDishStore = (nextState) => {
    store.dispatch(fetchDishes());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SplashContainer}/>
          <Route path='about' component={About} onEnter={_scrollTop}/>
          <Route path='menu' component={MenuContainer} onEnter={_scrollTop}>
            <IndexRoute component={MenuSplash} onEnter={_scrollTop, _populateDishStore}/>
            <Route path='sides' component={Sides} onEnter={_scrollTop}>
              <Route path='sides/:menuId' component={MenuEditContainer} />
            </Route>
            <Route path='lunch' component={LunchContainer} onEnter={_scrollTop}>
              <Route path='lunch/:menuId' component={MenuEditContainer} />
            </Route>
            <Route path='sunset' component={SunsetContainer} onEnter={_scrollTop}>
              <Route path='sunset/:menuId' component={MenuEditContainer} />
            </Route>
            <Route path='dinner' component={DinnerContainer} onEnter={_scrollTop}>
              <Route path='dinner/:menuId' component={MenuEditContainer} />
            </Route>
            <Route path='chef' component={Chef} onEnter={_scrollTop}>
              <Route path='chef/:menuId' component={MenuEditContainer} />
            </Route>
          </Route>
          <Route path='location' component={Location} onEnter={_scrollTop}/>
          <Route path='contact' component={Contact} onEnter={_scrollTop}/>
          <Route path='press' component={Press} onEnter={_scrollTop}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
