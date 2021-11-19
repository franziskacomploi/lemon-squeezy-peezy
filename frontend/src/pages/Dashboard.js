import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { Modal } from '../components/common/Modal';
import LemonDivider from '../components/main/LemonDivider';
const backendURL = process.env.REACT_APP_BACKENDURL;

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [shares, setShares] = useState();
  const [showModal, setShowModal] = useState(false);
  const [currentShare, setCurrentShare] = useState();
  const [error, setError] = useState();
  const [amountOfShares, setAmountOfShares] = useState();

  useEffect(() => {
    if (currentUser) {
      axios
        .get(`${backendURL}/api/dashboard/${currentUser.email}`)
        .then((data) => {
          setShares(data.data.shares);
        });
    }
  }, [currentUser]);

  const handleSell = (share) => {
    setCurrentShare(share);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSellSubmit = (e) => {
    e.preventDefault();

    const restAmount = currentShare.amount - amountOfShares;
    axios
      .post(`${backendURL}/api/sellshare/${currentShare._id}`, {
        name: currentShare.name,
        company: currentShare.company,
        price: currentShare.originalShare.price * restAmount,
        user: currentUser.email,
        restAmount: restAmount,
        soldAmount: currentShare.originalShare.amount + amountOfShares,
      })
      .then(() => {
        setShowModal(false);
        console.log('success');
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
        <h3>Personal Details</h3>
        <div>Email: {currentUser && currentUser.email}</div>
        <div>About: {currentUser && currentUser.description}</div>
        {shares && shares.length > 0 && (
          <div className="my-8">
            <LemonDivider />
            <h3 className="mb-4">Your shares</h3>
            <div className="flex flex-row justify-center items-center">
              {shares.map((share) => {
                return (
                  <div key={share._id}>
                    <div>Name: {share.name}</div>
                    <div>Value: {share.price}</div>
                    <div>Company: {share.company.name}</div>
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
          <form onSubmit={handleSellSubmit}>
            <label>
              How many of the share{' '}
              <span>"{currentShare && currentShare.name}"</span> do you want to
              sell?
            </label>
            <input
              type="number"
              onChange={(e) => {
                if (
                  e.target.value > currentShare.amount ||
                  e.target.value < 0
                ) {
                  setError(true);
                } else if (e.target.value < currentShare.amount) {
                  setError(false);
                  setAmountOfShares(e.target.value);
                }
              }}
            />
            <button type="submit" className="smallButton mt-4">
              Sell shares
            </button>
          </form>
          {error && (
            <div>
              You can't sell this amount of shares. Please specify another
              number.
            </div>
          )}
        </Modal>
      </div>
    </Layout>
  );
};

export default Dashboard;
