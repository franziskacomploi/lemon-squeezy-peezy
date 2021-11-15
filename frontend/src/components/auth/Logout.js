import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
const backendURL = process.env.REACT_APP_BACKENDURL;

const Logout = () => {
  const history = useHistory();
  const {setCurrentUser, setBuy} = useContext(AuthContext);

  const handleLogout = () => {
    axios
      .post(`${backendURL}/api/logout`)
      .then(() => {
        setCurrentUser();
        setBuy();
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
