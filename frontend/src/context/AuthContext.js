import React from 'react';

const AuthContext = React.createContext({
  currentUser: {},
  setCurrentUser: () => {},
});

export default AuthContext;
