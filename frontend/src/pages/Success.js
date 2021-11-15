import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Success = () => {
  return (
    <Layout>
      <div className="mx-auto my-12 flex flex-col items-center">
        <h1 className="mb-4">Success - You bought your shares</h1>
        <p className="mb-4">
          So... when life gives you lemons, make lemonade...
        </p>
        <Link className="brandButton" to="/dashboard">
          Go to your Dashboard
        </Link>
      </div>
    </Layout>
  );
};

export default Success;
