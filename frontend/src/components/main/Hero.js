import React from 'react';
import HeroImage from '../../assets/hero-image.jpg';

const Hero = () => {
  return (
    <div className="relative">
      <img className="w-full" alt="hero-lemon-squeezy" src={HeroImage} />
      <div className="bg-transparent absolute top-1/4 md:top-1/3 left-20">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-offWhite tracking-wide leading-relaxed">
          Ever wondered how to invest smartly?
        </h1>
        <div className="text-offWhite text-xl md:text-2xl lg:text-3xl tracking-wide leading-relaxed">
          We got you covered.
        </div>
      </div>
      <div className="bg-alabaster w-full py-4 flex flex-row justify-evenly items-center text-brandGray font-bold text-base md:text-2xl tracking-wide">
        <span>100% focus on sustainability</span>
        <span>Invest smartly</span>
        <span>100% your choice</span>
      </div>
    </div>
  );
};

export default Hero;
