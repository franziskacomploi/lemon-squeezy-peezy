import React, {useContext, useEffect, useState} from 'react';
import AuthContext from '../context/AuthContext';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import LemonDivider from '../components/main/LemonDivider';
const backendURL = process.env.REACT_APP_BACKENDURL;

const BuyShare = () => {
  const {buy} = useContext(AuthContext);
  const [shares, setShares] = useState(null);
  const history = useHistory();

  const handleBuy = () => {
    history.push('/');
  };

  useEffect(() => {
    if (buy) {
      axios.get(`${backendURL}/api/shares/${buy._id}`).then((data) => {
        setShares(data.data.shares);
      });
    } else {
      return (
        <div>
          <h3>Please choose a company.</h3>
          <Link to="/companies">See companies</Link>
        </div>
      );
    }
  }, [buy]);

  return (
    <Layout>
      <h1 className="text-center mt-4">
        Buy your share from {buy ? buy.name : 'your favorite company'} here:
      </h1>
      <div className="my-12">
        {shares ? (
          shares.map((share) => {
            return (
              <div
                key={share._id}
                className="flex flex-col items-center justify-center"
              >
                <div className="border rounded-xl shadow my-2 mx-8 px-2 py-4 w-48 text-center">
                  <h2>{share.name}</h2>
                  <div>Price: {share.price}</div>
                  <div>Available amount: {share.amount}</div>
                  <button
                    type="button"
                    className="smallButton my-4"
                    onClick={handleBuy}
                  >
                    Buy Share
                  </button>
                </div>
                {share !== shares[shares.length - 1] && <LemonDivider />}
              </div>
            );
          })
        ) : (
          <>
            <h3 className="mb-6">Please choose a company.</h3>
            <Link className="smallButton" to="/companies">
              See companies
            </Link>
          </>
        )}
      </div>
    </Layout>
  );
};

export default BuyShare;
