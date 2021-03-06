import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
//import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
//import { useDispatch } from 'react-redux'

import { images } from '../../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const uid = useSelector((state) => state.backend.uid);

  //const dispatch = useDispatch()
  useEffect(() => {
    
  }, []);
  return (

    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={images.logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Buy</a></p>
          <p><a href="#possibility">Sell</a></p>
          <p><a href="#features">Invest</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p><Link to='/signin'>Sign in</Link></p>
        {/* <p><a href="#sign in">Sign in</a></p> */}
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <HiX onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">Buy</a></p>
              <p><a href="#possibility">Sell</a></p>
              <p><a href="#features">Invest</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p><Link to='/signin'>Sign in</Link></p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
