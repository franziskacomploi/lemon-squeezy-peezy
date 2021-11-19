import React, {useContext, useEffect, useState} from 'react';
import Layout from '../components/layout/Layout';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import {Modal} from '../components/common/Modal';
import LemonDivider from '../components/main/LemonDivider';
const backendURL = process.env.REACT_APP_BACKENDURL;

const Dashboard = () => {
  const {currentUser} = useContext(AuthContext);
  const [shares, setShares] = useState();
  const [showModal, setShowModal] = useState(false);
  const [currentShare, setCurrentShare] = useState();
  const [error, setError] = useState();
  const [amountOfShares, setAmountOfShares] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (currentUser) {
      async function fetchData() {
        axios
          .get(`${backendURL}/api/dashboard/${currentUser.email}`)
          .then((data) => {
            setShares(data.data.shares);
          });
      }
      fetchData();
    }
  }, [currentUser, refreshKey]);

  const handleSell = (share) => {
    setCurrentShare(share);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSellSubmit = (e) => {
    e.preventDefault();

    let restAmount = currentShare.boughtAmount - parseInt(amountOfShares);
    let soldAmount =
      currentShare.originalShare.amount + parseInt(amountOfShares);

    console.log('soldAmount', typeof soldAmount);
    console.log('restAmount', typeof restAmount);

    axios
      .post(`${backendURL}/api/sellshare/${currentShare._id}`, {
        name: currentShare.name,
        company: currentShare.company,
        value: currentShare.originalShare.price * restAmount,
        user: currentUser.email,
        restAmount: restAmount,
        soldAmount: soldAmount,
      })
      .then(() => {
        setShowModal(false);
        setRefreshKey(refreshKey + 1);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <Layout>
      <div className="text-center">
        <h2 className="my-6">Lemon Dashboard 🍋</h2>
        <LemonDivider />
        <div className="flex flex-col items-center justify-center">
          <h3>Personal Details</h3>
          {currentUser && currentUser.profileImg && (
            <div className="my-6 w-28 h-28 bg-alabaster rounded-full shadow">
              <img
                src={currentUser.profileImg}
                alt="profile"
                className="rounded-full w-24 h-24 object-cover mx-auto shadow"
              />
            </div>
          )}
          <div className="flex flex-row items-center gap-3">
            <div className="smallLabel mt-2 w-20">Email:</div>
            <div className="smallDetails">
              {currentUser && currentUser.email}
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="smallLabel mt-2 w-20">About:</div>
            <div className="smallDetails">
              {currentUser && currentUser.description}
            </div>
          </div>
        </div>
        {shares && shares.length > 0 && (
          <div className="my-8">
            <LemonDivider />
            <h3 className="mb-4">Your shares</h3>
            <div className="flex flex-row justify-center items-center gap-3">
              {shares.map((share) => {
                return (
                  <div key={share._id} className="shadow p-2 rounded-lg">
                    <div className="flex flex-row items-center gap-3">
                      <div className="smallLabel mt-2">Name:</div>
                      <div className="smallDetails">{share.name}</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <div className="smallLabel mt-2">Value:</div>
                      <div className="smallDetails">{share.value}€</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <div className="smallLabel mt-2">Amount:</div>
                      <div className="smallDetails">{share.boughtAmount}</div>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                      <div className="smallLabel mt-2">Company:</div>
                      <div className="smallDetails"> {share.company.name}</div>
                    </div>
                    <button
                      type="button"
                      className="smallButton mt-4"
                      onClick={() => {
                        handleSell(share);
                      }}
                    >
                      Sell Shares
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <Modal className={showModal} handleExitClick={closeModal}>
          <form
            onSubmit={handleSellSubmit}
            className="flex flex-col items-center justify-center p-2"
          >
            <label className="modalHeading mt-6">
              How many of the share{' '}
              <span>"{currentShare && currentShare.name}"</span> do you want to
              sell?
            </label>
            <div className="flex flex-row gap-3 items-center mt-4">
              <input
                className="authInput"
                type="number"
                onChange={(e) => {
                  if (
                    e.target.value > currentShare.boughtAmount ||
                    e.target.value < 0
                  ) {
                    setError(true);
                    setAmountOfShares(e.target.value);
                  } else if (e.target.value < currentShare.boughtAmount) {
                    setError(false);
                    setAmountOfShares(e.target.value);
                  }
                }}
              />
              <button type="submit" className="smallButton">
                Sell shares
              </button>
            </div>
          </form>
          {error && (
            <div className="text-sm mx-auto px-8">
              *You can't sell this amount of shares. Please specify another
              number.
            </div>
          )}
        </Modal>
      </div>
    </Layout>
  );
};

export default Dashboard;
