import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { db } from "../../../firebase/config";
import {
    addDoc,
    collection,
    //doc,
    serverTimestamp,
    //updateDoc,
  } from "@firebase/firestore";

import { signUp } from '../../../firebase/loginSignupService';
import { setLogin, setLogOut } from '../../../redux/LoginSlice';
import Navbar from '../../navigation/Navbar/Navbar';
import './Login.scss'

const Signup = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const { name, email, password } = formData;
    const [id,setid] = useState("");
    const [userEmail, setuserEmail] = useState("");

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async() => {
        const signup = signUp(email, password);
        if (signup) {
            console.log(signup);
            dispatch(setLogin({
                uid: signup.uid,
                email: signup.email,
            }));
            setid(signup.id);
            setuserEmail(signup.userEmail);
            const addUser = await addDoc(collection(db, "user"), {
                mainKey: signup.uid,
                name: name,
                email:userEmail,
                timestamp: serverTimestamp(),
              });
              if(addUser){
                  console.log("user has been added successfully")
              }else{
                  console.log("user could not be added")
              }
        } else {
            dispatch(setLogOut({ uid: null, email: null }));
        }
    }


    return (
        <>
        <Navbar />
        {/* <TheForm /> */}
            <h2 className="head-text">Signup</h2>
            <div id={id} className='app__container app__footer'>
                <div className='app__wrapper app__flex'>
                    <div className="app__footer-form app__flex">
                        <div className="app__flex">
                            <input className="p-text" type="text" placeholder="Name" name="name" value={name} onChange={handleChangeInput} />
                        </div>
                        <div className="app__flex">
                            <input className="p-text" type="email" placeholder="Email" name="email" value={email} onChange={handleChangeInput} />
                        </div>
                        <div className="app__flex">
                            <input className="p-text" type="password" placeholder="password" name="password" value={password} onChange={handleChangeInput} />
                        </div>
                        <button onClick={handleSubmit} type="button" className="p-text" >signup</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup
