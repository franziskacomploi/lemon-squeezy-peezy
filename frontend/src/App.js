import React, {useState} from 'react';
import AuthContext from './context/AuthContext';
import Router from './routes/routes';

export const App = () => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <>
      <AuthContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <Router />
      </AuthContext.Provider>
    </>
  );
};

export default App;
