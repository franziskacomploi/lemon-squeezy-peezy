import React from 'react';
import Footer from './Footer';
import Navbar from './navigation/Navbar';

const Layout = ({children}) => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
