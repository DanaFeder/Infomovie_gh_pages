import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from '../loginPage/loginPage';
import { SearchPage } from '../searchPage/searchPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true}>
          <LoginPage />
        </Route>
        <Route path='/search' exact={true}>
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
