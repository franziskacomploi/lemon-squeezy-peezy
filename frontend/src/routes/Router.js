import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../../pages/Main';
import PageNotFound from '../../pages/PageNotFound';
import Dashboard from '../pages/Dashboard';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import Account from '../pages/Account';
import Companies from '../pages/Companies';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/companies">
          <Companies />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export {Router as default};
