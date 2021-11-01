import React from 'react';
import {Link} from 'react-router-dom';
import Layout from './layout/Layout';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="mx-auto my-12 flex flex-col items-center">
        <h1 className="mb-4">404 - Page not found</h1>
        <p className="mb-4">When life gives you lemons, make lemonade...</p>
        <Link className="brandButton" to="/">
          Go back home
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
