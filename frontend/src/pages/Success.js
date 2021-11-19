import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Success = () => {
  return (
    <Layout>
      <div className="mx-auto mt-12 flex flex-col items-center">
        <h1 className="mb-4">
          <span className="font-bold mb-4 font-serif text-3xl">Success</span> -
          You bought your shares
        </h1>
        <p className="mb-4">
          So... when life gives you lemons, make lemonade...
        </p>
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dq66nu4hm/image/upload/v1637359267/lemon-squeezy/angelica-echeverry-t261fCT-lEc-unsplash_kbjipz.jpg"
            alt="lemonade"
          />
          <Link
            className="absolute left-1/2 top-12 brandButton"
            to="/dashboard"
          >
            Go to your Dashboard
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
