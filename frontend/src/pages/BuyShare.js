import React, {useContext, useEffect, useState} from 'react';
import AuthContext from '../context/AuthContext';
import {useHistory} from 'react-router';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import {Link} from 'react-router-dom';
import LemonDivider from '../components/main/LemonDivider';
const backendURL = process.env.REACT_APP_BACKENDURL;

const BuyShare = () => {
  const {buy, setCurrentShare} = useContext(AuthContext);
  const [shares, setShares] = useState();

  const history = useHistory();

  useEffect(() => {
    if (buy) {
      axios.get(`${backendURL}/api/shares/${buy._id}`).then((data) => {
        setShares(data.data.shares);
      });
    }
  }, [buy]);

  const handleBuyStart = (id) => {
    setCurrentShare(id);
    history.push('/buyshareone');
  };

  return (
    <Layout>
      <div className="flex flex-col justfiy-center items-center">
        <h1 className="text-center">
          Buy your share from {buy ? buy.name : 'your favorite company'} here:
        </h1>

        {!shares && (
          <div className="flex flex-col items-center">
            <h3 className="mb-6">Please choose a company.</h3>
            <Link className="smallButton" to="/companies">
              See companies
            </Link>
          </div>
        )}
        {shares &&
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
                    onClick={() => {
                      handleBuyStart(share._id);
                    }}
                  >
                    Buy Share
                  </button>
                </div>
                {share !== shares[shares.length - 1] && <LemonDivider />}
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default BuyShare;
