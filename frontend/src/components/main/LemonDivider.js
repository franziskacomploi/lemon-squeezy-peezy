import React from 'react';

const LemonDivider = ({className}) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <div className="my-4 w-px h-12 bg-black"></div>
      <div role="img" aria-label="lemon">
        🍋
      </div>
      <div className="my-4 w-px h-12 bg-black"></div>
    </div>
  );
};

export default LemonDivider;
