import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";

import { images } from '../../../constants';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const HomeNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const uid = useSelector((state) => state.backend.uid)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        <ul className="app__navbar-links">
          {['services', 'properties', 'location','faq', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="app__navbar-links">
        {uid && (
          <ul className="app__navbar-links">
            <li><Link to='/signin'>LOGOUT</Link></li>
          </ul>
        )}
        {uid===null && (
          <>
            <ul className="app__navbar-links">
              <li><Link to='/signin'>Signup</Link></li>
              <li><Link to='/signin'>Login</Link></li>
            </ul>
          </>
        )}
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['services', 'properties', 'location', 'faq', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              {uid && (
                <ul className="app__navbar-links">
                  <li><Link to='/signin'>LOGOUT</Link></li>
                </ul>
              )}
              {uid===null && (
                <>
                  <ul className="app__navbar-links">
                    <li><Link to='/signin'>Signup</Link></li>
                    <li><Link to='/signin'>Login</Link></li>
                  </ul>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
