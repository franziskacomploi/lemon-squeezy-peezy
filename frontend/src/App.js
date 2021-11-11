import React, {useState} from 'react';
import AuthContext from './context/AuthContext';
import Router from './routes/Router';

export const App = ({currentUserInSession}) => {
  const [currentUser, setCurrentUser] = useState(currentUserInSession);
  const [buy, setBuy] = useState();
  const [currentShare, setCurrentShare] = useState();

  return (
    <>
      <AuthContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          buy,
          setBuy,
          currentShare,
          setCurrentShare,
        }}
      >
        <Router />
      </AuthContext.Provider>
    </>
  );
};

export default App;
