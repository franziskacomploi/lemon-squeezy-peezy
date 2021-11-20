import React, {useContext, useEffect, useState} from 'react';
import Layout from '../components/layout/Layout';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import LemonDivider from '../components/main/LemonDivider';
import {SellModal} from '../components/dashboard/SellModal';
import {ShareView} from '../components/dashboard/ShareView';
const backendURL = process.env.REACT_APP_BACKENDURL;

const Dashboard = () => {
  const {currentUser} = useContext(AuthContext);
  const [shares, setShares] = useState();
  const [showModal, setShowModal] = useState(false);
  const [currentShare, setCurrentShare] = useState();
  const [amountOfShares, setAmountOfShares] = useState();
  const [refreshKey, setRefreshKey] = useState(0);

  const [allValue, setAllValue] = useState(0);
  const [allShares, setAllShares] = useState(0);

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

      const mapPortfolio = () => {
        let sumValue = 0;
        let sumShares = 0;
        shares.map((share) => {
          sumValue += share.value;
          sumShares += share.boughtAmount;
        });
        setAllValue(sumValue);
        setAllShares(sumShares);
      };
      if (shares) {
        mapPortfolio();
      }
    }
  }, [currentUser, refreshKey, shares]);

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
          <div className="flex flex-row items-center gap-1">
            <div className="smallLabel w-20">Name:</div>
            <div className="smallDetails">
              {currentUser && currentUser.name}
            </div>
          </div>
          <div className="flex flex-row items-center gap-1 mt-2">
            <div className="smallLabel w-20">About:</div>
            <div className="smallDetails">
              {currentUser && currentUser.description}
            </div>
          </div>
        </div>
        {shares && shares.length > 0 && (
          <div className="my-8">
            <LemonDivider />
            <h3 className="mb-4">Your Portfolio Overview</h3>
            <div className="font-bold">Your Portfolio Value:</div>
            <div>{allValue}€</div>
            <div className="font-bold">Your Amount of Shares:</div>
            <div>{allShares} Shares</div>
            <LemonDivider />
            <h3 className="mb-4">Your shares</h3>
            <div className="flex flex-row justify-center items-center gap-3">
              {shares.map((share) => {
                return <ShareView share={share} handleSell={handleSell} />;
              })}
            </div>
          </div>
        )}
        <SellModal
          handleSellSubmit={handleSellSubmit}
          showModal={showModal}
          closeModal={closeModal}
          currentShare={currentShare}
          setAmountOfShares={setAmountOfShares}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
