import React from 'react';
import LemonDivider from './LemonDivider';

const HowToSection = () => {
  return (
    <div className="flex flex-col my-12 items-center">
      <div className="mt-12 text-center w-1/3">
        <h2 className="font-bold">How does it work?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu
          augue ut lectus arcu bibendum at varius.
        </p>
      </div>
      <LemonDivider />
      <div className="mt-12 text-center w-1/3">
        <h2 className="font-bold">Why is it so important...</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu
          augue ut lectus arcu bibendum at varius.
        </p>
      </div>
      <LemonDivider />
      <div className="mt-12 text-center w-1/3">
        <h2 className="font-bold">Your next steps:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu
          augue ut lectus arcu bibendum at varius.
        </p>
      </div>
    </div>
  );
};

export default HowToSection;
