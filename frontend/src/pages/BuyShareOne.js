import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/AuthContext';
import {useHistory} from 'react-router';
import Layout from '../components/layout/Layout';
import LemonDivider from '../components/main/LemonDivider';
import ExitIcon from '../assets/exit-icon.png';

const BuyShare = () => {
  const {currentUser, currentShare} = useContext(AuthContext);

  const history = useHistory();

  const handleExitClick = () => {
    history.push('/buyshare');
  };

  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    }
  }, [currentUser, history]);

  return (
    <Layout>
      <div className="flex flex-col justfiy-center items-center">
        <button type="button" className="mx-auto" onClick={handleExitClick}>
          <img src={ExitIcon} alt="Exit-Icon" className="w-4" />
        </button>
        <h1 className="text-center">
          You are buying <span>{currentShare.name}</span>
        </h1>
        <LemonDivider />
      </div>
    </Layout>
  );
};

export default BuyShare;
