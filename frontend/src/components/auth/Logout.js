import React, {useContext} from 'react';
import {useHistory} from 'react-router';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const Logout = () => {
  const history = useHistory();
  const {setCurrentUser} = useContext(AuthContext);

  const handleLogout = () => {
    axios
      .post('/api/logout')
      .then(() => {
        setCurrentUser();
        history.push('/');
      })
      .catch((error) => {
        console.log(error.message, error.code);
      });
  };

  return (
    <button className="brandButton" onClick={handleLogout}>
      <span>Logout</span>
    </button>
  );
};

export default Logout;
