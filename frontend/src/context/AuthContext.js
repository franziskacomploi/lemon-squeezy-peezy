import React from 'react';

const AuthContext = React.createContext({
  currentUser: {},
  setCurrentUser: () => {},
  buy: '',
  setBuy: () => {},
});

export default AuthContext;
