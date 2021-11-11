import React from 'react';
import Footer from './Footer';
import Navbar from './navigation/Navbar';

const Layout = ({children}) => {
  return (
    <div className="flex flex-col justify-between h-screen w-screen">
      <Navbar />
      {children}
      <Footer className="h-10" />
    </div>
  );
};

export default Layout;
