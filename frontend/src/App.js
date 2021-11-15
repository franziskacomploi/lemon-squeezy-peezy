import React, {useState} from 'react';
import AuthContext from './context/AuthContext';
import Router from './routes/Router';

export const App = ({currentUserInSession}) => {
  const [currentUser, setCurrentUser] = useState(currentUserInSession);
  const [buy, setBuy] = useState();

  return (
    <>
      <AuthContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          buy,
          setBuy,
        }}
      >
        <Router />
      </AuthContext.Provider>
    </>
  );
};

export default App;
