import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase/config";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Navbar } from './components';
import { AdminNavbar } from "./components";
import { Signup } from './components';
import './App.scss';
import { setLogin, setLogOut, selectEmail, selectUid } from './redux/LoginSlice'
import { Admin, Home, User, AdminUser, PropLocation } from "./pages"

function App() {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.backend.uid)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setLogin({
            uid: user.uid,
            email: user.email,
          })
        );
        console.log('there is user')
      } else {
        console.log('there is no user')
        dispatch(setLogOut({ uid: null, email: null }));
      }
    });
  });
  return (
    <div className="App">
      {/* {uid 
      ?<AdminNavbar />
      : <Navbar />
    } */}
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/PropLocation" element={<PropLocation />} />
        <Route exact path="/User" element={<User />} />
        <Route exact path="/AdminUser" element={<AdminUser />} />
        <Route exact path="/signin" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
