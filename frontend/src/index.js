import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/sass/App.scss';
import axios from 'axios';
const backendURL = process.env.REACT_APP_BACKENDURL;

axios
  .get(`${backendURL}/api/checkuser`)
  .then((res) => {
    ReactDOM.render(
      <React.StrictMode>
        <App currentUserInSession={res.data.currentUser} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
