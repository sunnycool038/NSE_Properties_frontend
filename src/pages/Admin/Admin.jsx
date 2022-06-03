import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//import { useDispatch } from "react-redux";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { db, storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { Link } from 'react-router-dom'
import { HiMenuAlt4, HiX } from 'react-icons/hi';


import './admin.scss';
import { AddForm } from "../../components";
import {
  Buyers,
  Sellers,
  Investors,
  Users,
  AddBuyers,
  AddInvestors,
  AddSellers,
  AddUsers
} from "../../container/admin"
import { images } from "../../constants";
//import { MyForm } from "../../components";


const Admin = () => {
  const [select, setSelect] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const uid = useSelector((state) => state.backend.uid)
  const [activeFilter, setActiveFilter] = useState('All');
  const [item, setItem] = useState({ buyers: false, sellers: false, investors: false, users: false, alchive: false, add: false });
  const [theRecord, setTheRecord] = useState({ addbuyers: false, addsellers: false, addinvestors: false, addusers: false, addalchive: false, addadd: false });
  const {addbuyers, addsellers, addinvestors, addusers, addalchive, addadd} = theRecord;
  const { buyers, sellers, investors, users, alchive, add } = item
  const [page, setPage] = useState({ addRecord: false, setRecord: false })
  const { addRecord, setRecord } = page
  useEffect(() => {

  }, [item, page, theRecord])

  const SubmitModel = async (e) => {
    const docRef = await addDoc(collection(db, "adminsell"), {
      secondarykey: uid,
      name: "admin",
      uid: uid,
      timestamp: serverTimestamp(),
    });

    const images = ref(storage, `adminsell/${docRef.id}/image`);

    await uploadString(images, select, "data_url").then(async (snapshot) => {
      const downloadUrl = await getDownloadURL(images);
      await updateDoc(doc(db, "post", docRef.id), {
        Image: downloadUrl,
      });
    });
  };

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (readerEvent) => {
        setSelect(readerEvent.target.result);
      };
    }
  }

  const handlePage = (item) => {
    if (item === "addusers") {
      setTheRecord({ addbuyers: false, addsellers: false, addinvestors: false, addusers: true, addalchive: false, addadd: false })
    } else if (item === "addbuyers") {
      setTheRecord({ addbuyers: true, addsellers: false, addinvestors: false, addusers: false, addalchive: false, addadd: false })
    } else if (item === "addsellers") {
      setTheRecord({ addbuyers: false, addsellers: true, addinvestors: false, addusers: false, addalchive: false, addadd: false })
    } else if (item === "addinvestors") {
      setTheRecord({ addbuyers: false, addsellers: false, addinvestors: true, addusers: false, addalchive: false, addadd: false })
    } else if (item === "addalchive") {
      setTheRecord({ addbuyers: false, addsellers: false, addinvestors: false, addusers: false, addalchive: true, addadd: false })
    } else {
      setTheRecord({ addbuyers: false, addsellers: false, addinvestors: false, addusers: false, addalchive: false, addadd: true })
    }
  }

  const handleWorkFilter = (item) => {
    if (item === "users") {
      setItem({ buyers: false, sellers: false, investors: false, users: true, alchive: false, add: false })
    } else if (item === "buyers") {
      setItem({ buyers: true, sellers: false, investors: false, users: false, alchive: false, add: false })
    } else if (item === "sellers") {
      setItem({ buyers: false, sellers: true, investors: false, users: false, alchive: false, add: false })
    } else if (item === "investors") {
      setItem({ buyers: false, sellers: false, investors: true, users: false, alchive: false, add: false })
    } else if (item === "alchive") {
      setItem({ buyers: false, sellers: false, investors: false, users: false, alchive: true, add: false })
    } else {
      setItem({ buyers: false, sellers: false, investors: false, users: false, alchive: false, add: true })
    }
  };
  return (

    <>
    {console.log(addsellers)}
      <div>
        <div className="gpt3__navbar">
          <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
              <img src={images.logo} />
            </div>
            <div className="gpt3__navbar-links_container">
              <p><a href="#">Home</a></p>
              <p><a href="#wgpt3" onClick={() => { setPage({ addRecord: true, setRecord: false }) }}>Add Records</a></p>
              <p><a href="#home" onClick={() => { setPage({ addRecord: false, setRecord: false }) }}>View Records</a></p>
            </div>
          </div>
          <div className="gpt3__navbar-sign">
            <button type="button">Logout</button>
          </div>
        </div>
        {addRecord
          ? (
            <>
              <div className="app__work-filter">
                {['addusers', 'addbuyers', 'addsellers', 'addinvestors', 'addalchive'].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handlePage(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="divider">
              </div>
              <div className="">
                  {addbuyers && (
                  <AddBuyers />
                  )}
                  {addsellers && (
                  <AddSellers />
                  )}
                  {addinvestors && (
                  <AddInvestors />
                  )}
                  {addusers && (
                  <AddUsers />
                  )}
                  {addalchive && (
                  <AddBuyers />
                  )}
                  {addadd && (
                  <AddBuyers />
                  )}
              </div>
            </>
          ) : (
            <>
              <div className="app__work-filter">
                {['users', 'buyers', 'sellers', 'investors', 'alchive'].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="divider">
              </div>
              <div className="mainComp">
                {buyers && (
                  <Buyers />
                )}
                {sellers && (
                  <Sellers />
                )}
                {investors && (
                  <Investors />
                )}
                {users && (
                  <Users />
                )}
                {alchive && (
                  <Buyers />
                )}
                {add && (
                  <AddForm />
                )}
              </div>
            </>
          )
        }

      </div>

    </>

  )
}

export default Admin
