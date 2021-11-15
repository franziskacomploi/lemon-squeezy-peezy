import React from 'react';
import ExitIcon from '../../assets/exit-icon.png';

export const Modal = ({className, handleExitClick, children}) => {
  return (
    <div
      className={`absolute top-0 h-screen w-screen bg-gray-100 bg-opacity-80 ${
        className ? '' : 'hidden'
      }`}
    >
      <div className="relative top-1/3 bg-white w-1/4 h-1/4 mx-auto">
        <button
          type="button"
          className="mx-auto mt-4"
          onClick={handleExitClick}
        >
          <img src={ExitIcon} alt="Exit-Icon" className="w-4" />
        </button>
        {children}
      </div>
    </div>
  );
};
