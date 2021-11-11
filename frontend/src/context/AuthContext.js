import React from 'react';

const AuthContext = React.createContext({
  currentUser: {},
  setCurrentUser: () => {},
  buy: '',
  setBuy: () => {},
  currentShare: '',
  setCurrentShare: () => {},
});

export default AuthContext;
