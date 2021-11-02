import React, {useContext, useEffect, useState} from 'react';
import AuthContext from '../context/AuthContext';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import {Link} from 'react-router-dom';
const backendURL = process.env.REACT_APP_BACKENDURL;

const BuyShare = () => {
  const {buy} = useContext(AuthContext);

  const [shares, setShares] = useState(null);

  useEffect(() => {
    if (buy) {
      axios.get(`${backendURL}/api/shares/${buy._id}`).then((data) => {
        // setShares(data);
        console.log(data);
      });
    } else {
      return (
        <div>
          <h3>Please choose a company.</h3>
          <Link to="/companies">See companies</Link>
        </div>
      );
    }
  }, []);

  return (
    <Layout>
      <h1 className="text-center mt-4">
        Buy your share from {buy ? buy.name : 'your favorite company'} here:
      </h1>
      <div>
        {shares ? (
          shares.map((share) => {
            return (
              <div>
                <p>{share.name}</p>
              </div>
            );
          })
        ) : (
          <div className="my-12 flex flex-col items-center justify-center">
            <h3 className="mb-6">Please choose a company.</h3>
            <Link className="brandButton" to="/companies">
              See companies
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BuyShare;
