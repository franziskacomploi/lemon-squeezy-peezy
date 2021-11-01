import React from 'react';

const SignUpButton = ({onClick, text}) => {
  return (
    <button className="brandButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default SignUpButton;
