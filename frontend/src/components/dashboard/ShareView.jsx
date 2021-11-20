import React from 'react';

export const ShareView = ({share, handleSell}) => {
  return (
    <div key={share._id} className="shadow p-2 rounded-lg">
      <div className="labelContainer">
        <div className="smallLabel">Name:</div>
        <div className="smallDetails">{share.name}</div>
      </div>
      <div className="labelContainer">
        <div className="smallLabel">Value:</div>
        <div className="smallDetails">{share.value}€</div>
      </div>
      <div className="labelContainer">
        <div className="smallLabel">Amount:</div>
        <div className="smallDetails">{share.boughtAmount}</div>
      </div>
      <div className="labelContainer">
        <div className="smallLabel">Company:</div>
        <div className="smallDetails"> {share.company.name}</div>
      </div>
      <button
        type="button"
        className="smallButton mt-4"
        onClick={() => {
          handleSell(share);
        }}
      >
        Sell
      </button>
    </div>
  );
};
