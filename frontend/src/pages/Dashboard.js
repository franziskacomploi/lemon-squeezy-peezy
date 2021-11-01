import React, {useContext} from 'react';
import Layout from '../components/layout/Layout';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <Layout>
      <h2>This is a private Dashboard!</h2>
      {currentUser ? currentUser.email : ''}
    </Layout>
  );
};

export default Dashboard;
