import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../pages/Main';
import PageNotFound from '../pages/PageNotFound';
import SignupPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import Companies from '../pages/Companies';
import BuyShare from '../pages/BuyShare';
import Success from '../pages/Success';

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
        <Route path="/companies">
          <Companies />
        </Route>
        <Route path="/buyshare">
          <BuyShare />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export {Router as default};
