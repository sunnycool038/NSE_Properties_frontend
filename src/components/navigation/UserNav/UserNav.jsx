import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { images } from '../../../constants';
import './UserNav.scss';
import { Link } from 'react-router-dom';
import { Buy, Invest, Lease, LeaseYours, Rent, RentYours, Sell } from '../../users';
import { BuyFromUs, LeaseFromUs, SingleProp } from '../../../container/User';


const UserNav = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false);
    const uid = useSelector((state) => state.backend.uid);
    const [togglePage, setTogglePage] = useState({
        home: false,
        buy: false,
        sell: false,
        rentYours: false,
        leaseYours: false,
        rent: false,
        lease: false,
        invest: false,
        buyFromUus: false,
        leaseFromUs: false,
        singleProp: false,
        theDefault:true
    })
    const { home, buy, sell, rentYours, leaseYours, rent, lease, invest, buyFromUus, leaseFromUs, singleProp, theDefault} = togglePage

    const pageControl = (item) => {
        if (item === "home") {
            setTogglePage({
                home: false,
                buy: false,
                sell: false,
                rentYours: false,
                leaseYours: false,
                rent: false,
                lease: false,
                invest: false,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:false,
                singleProp: false});
                navigate('/');
        }else if(item==="buy"){
            setTogglePage({
                home: false,
                buy: true,
                sell: false,
                rentYours: false,
                leaseYours: false,
                rent: false,
                lease: false,
                invest: false,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:false,
                singleProp: false})
        }else if(item==="sell"){
            setTogglePage({
                home: false,
                buy: false,
                sell: true,
                rentYours: false,
                leaseYours: false,
                rent: false,
                lease: false,
                invest: false,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:false,
                singleProp: false})
        }else if(item==="rent yours"){
            setTogglePage({
                home: false,
                buy: false,
                sell: false,
                rentYours: true,
                leaseYours: false,
                rent: false,
                lease: false,
                invest: false,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:false,
                singleProp: false})
        }else if(item==="Lease yours"){
            setTogglePage({
                home: false,
                buy: false,
                sell: false,
                rentYours: false,
                leaseYours: true,
                rent: false,
                lease: false,
                invest: false,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:false,
                singleProp: false})
        }else if(item==="rent"){
            setTogglePage({
                home: false,
                buy: false,
                sell: false,
                rentYours: false,
                leaseYours: false,
                rent: true,
                lease: false,
                invest: false,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:false,
                singleProp: false})
        }else if(item==="Lease"){
            setTogglePage({
                home: false,
                buy: false,
                sell: false,
                rentYours: false,
                leaseYours: false,
                rent: false,
                lease: true,
                invest: false,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:false,
                singleProp: false})
        }else if(item==="invest"){
            setTogglePage({
                home: false,
                buy: false,
                sell: false,
                rentYours: false,
                leaseYours: false,
                rent: false,
                lease: false,
                invest: true,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:false,
                singleProp: false})
        }else{
            setTogglePage({
                home: false,
                buy: false,
                sell: false,
                rentYours: false,
                leaseYours: false,
                rent: false,
                lease: false,
                invest: false,
                buyFromUus: false,
                leaseFromUs: false,
                theDefault:true,
                singleProp: false})
        }
    }

    return (
        <>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="logo" />
                    <ul className="app__navbar-links">
                        {['home', 'buy', 'sell', 'rent yours', 'Lease yours', 'rent', 'Lease', 'invest'].map((item) => (
                            <li className="app__flex p-text" key={`link-${item}`}>
                                <div />
                                <a href={`#${item}`} onClick={() => { pageControl(item) }}>{item}</a>
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
                    {uid === null && (
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
                                {['home', 'buy', 'sell', 'rent yours', 'Lease yours', 'rent', 'Lease', 'invest'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={() =>{pageControl(item);setToggle(false)}}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                                {uid && (
                                    <ul className="app__navbar-links">
                                        <li><Link to='/signin'>LOGOUT</Link></li>
                                    </ul>
                                )}
                                {uid === null && (
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
            <div className='main'>
                {buy && (
                    <Buy />
                )}
                {sell && (
                    <Sell />
                )}
                {rentYours && (
                    <RentYours />
                )}
                {leaseYours && (
                    <LeaseYours />
                )}
                {rent && (
                    <Rent />
                )}
                {lease && (
                    <Lease />
                )}
                {invest && (
                    <Invest />
                )}
                {buyFromUus && (
                    <BuyFromUs />
                )}
                {leaseFromUs && (
                    <LeaseFromUs />
                )}
                {singleProp && (
                    <SingleProp />
                )}
                {theDefault && (
                    <Buy />
                )}
            </div>
        </>
    );
};

export default UserNav;