import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import Layout from '../components/layout/Layout';

const BuyShare = () => {
  const {buy} = useContext(AuthContext);
  return (
    <Layout>
      <h1>Buy your share from {buy} here:</h1>
    </Layout>
  );
};

export default BuyShare;
