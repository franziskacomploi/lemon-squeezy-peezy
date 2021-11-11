import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
const backendURL = process.env.REACT_APP_BACKENDURL;

const Login = () => {
  const [isEmail, setIsEmail] = useState('');
  const [isPassword, setIsPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const {setCurrentUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isPassword) {
      return setError('Please enter a password.');
    }

    if (!isEmail) {
      return setError('Please enter an email.');
    }

    axios
      .post(`${backendURL}/api/login`, {
        email: isEmail,
        password: isPassword,
      })
      .then((user) => {
        setCurrentUser(user);
        history.push('/dashboard');
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setError('Failed to login. Please try again.');
      });
  };

  return (
    <>
      {error && <div className="p-2 bg-melon text-white">{error}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
        <label className="authLabel">Email</label>
        <input
          className="authInput"
          onChange={(e) => {
            setIsEmail(e.target.value);
          }}
          type="email"
        ></input>

        <label className="authLabel">Password</label>
        <input
          className="authInput"
          onChange={(e) => {
            setIsPassword(e.target.value);
          }}
          type="password"
        ></input>

        <button className="brandButton my-4" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
