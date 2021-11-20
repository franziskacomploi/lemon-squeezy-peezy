import React, {useState} from 'react';
import {Modal} from '../common/Modal';

export const SellModal = ({
  handleSellSubmit,
  showModal,
  closeModal,
  currentShare,
  setAmountOfShares,
}) => {
  const [error, setError] = useState();
  return (
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
          *You can't sell this amount of shares. Please specify another number.
        </div>
      )}
    </Modal>
  );
};
