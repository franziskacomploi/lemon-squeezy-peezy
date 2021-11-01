import React, {useContext} from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/main/Hero';
import HowToSection from '../components/main/HowToSection';
import BrandButton from '../components/common/BrandButton';
import {useHistory} from 'react-router';
import AuthContext from '../context/AuthContext';

const Main = () => {
  const history = useHistory();
  const {currentUser} = useContext(AuthContext);

  const handleClick = () => {
    if (currentUser) {
      history.push('/dashboard');
    } else {
      history.push('/signup');
    }
  };

  return (
    <Layout>
      <Hero />
      <div className="flex flex-col items-center mb-12">
        <HowToSection />
        <BrandButton
          text={currentUser ? 'Go to Dashboard' : 'Sign Up here'}
          onClick={handleClick}
          className="w-1/2"
        />
      </div>
    </Layout>
  );
};

export default Main;
