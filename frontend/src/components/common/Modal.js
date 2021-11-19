import React from 'react';
import ExitIcon from '../../assets/exit-icon.png';

export const Modal = ({className, handleExitClick, children}) => {
  return (
    <div className={`absolute top-0 ${className ? '' : 'hidden'}`}>
      <div className="fixed h-full w-full bg-gray-100 bg-opacity-80">
        <div className="relative top-1/3 bg-white w-1/4 h-1/3 mx-auto rounded-lg">
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
    </div>
  );
};
