import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import Logout from '../../auth/Logout';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);

  return (
    <header className="border-b-4 border-alabaster sticky bg-offWhite">
      <div className="flex flex-row items-center justify-between mx-6 my-4">
        <NavLink exact to="/">
          <h1 className="font-handwritten">
            Lemon Squeezy{' '}
            <span role="img" aria-label="lemon">
              🍋
            </span>
          </h1>
        </NavLink>
        <div className="flex flex-row justify-center items-center gap-3">
          {!currentUser && (
            <>
              <NavLink className="brandButton" to="/login">
                Login
              </NavLink>
              <NavLink className="brandButton" to="/signup">
                Sign Up
              </NavLink>
            </>
          )}
          {currentUser && (
            <>
              <NavLink className="brandButton" to="/companies">
                All Companies
              </NavLink>
              <NavLink className="brandButton" to="/buyshare">
                Buy a share
              </NavLink>
              <Logout />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
