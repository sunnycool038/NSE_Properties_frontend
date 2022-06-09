import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
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
import { AddForm } from "../../components/registration";
import {
  Buyers,
  Sellers,
  Investors,
  Users,
  AddBuyers,
  AddInvestors,
  AddSellers,
  AddUsers,
  AddAchivesForm
} from "../../container/admin"
import { images } from "../../constants";


const Admin = () => {
  const navigate = useNavigate()
  const [select, setSelect] = useState(null);
  //const [toggleMenu, setToggleMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const uid = useSelector((state) => state.backend.uid)
  const [activeFilter, setActiveFilter] = useState('All');
  const [item, setItem] = useState({ buyers: false, sellers: false, investors: false, users: false, alchive: false, add: false });
  const [theRecord, setTheRecord] = useState({ addbuyers: false, addsellers: false, addinvestors: false, addusers: false, addalchive: false, addadd: false });
  const { addbuyers, addsellers, addinvestors, addusers, addalchive, addadd } = theRecord;
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

  const setThePage = (item) => {
    if (item === "home") {
      navigate('/')
    } else if (item === "Add Record") {
      setPage({ addRecord: true, setRecord: false });
    } else if (item === "View Record") {
      setPage({ addRecord: false, setRecord: false });
    } else {
      setPage({ addRecord: false, setRecord: false });
    }
  }

  const handleThePage = (item) => {
    if (item === "Add Record") {
      setPage({ addRecord: true, setRecord: false });
    } 
    if (item === "View Record") {
      setPage({ addRecord: false, setRecord: false });
    }

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

  const handleTheWorkFilter = (item) => {
    if (item === "Add Record") {
      setPage({ addRecord: true, setRecord: false });
    } 
    if (item === "View Record") {
      setPage({ addRecord: false, setRecord: false });
    }

    if (item === "users") {
      setPage({ addRecord: false, setRecord: false });
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
  }
  return (

    <>
      <div>
        <div>
          <nav className="app__navbar">
            <div className="app__navbar-logo">
              <img src={images.logo} alt="logo" />
              <ul className="app__navbar-links">
                {['home', 'Add Record', 'View Record'].map((item) => (
                  <li className="app__flex p-text" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`} onClick={() => { setThePage(item) }}>{item}</a>
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
            {addRecord
              ? (
                <>
                  <div className="app__navbar-menu">
                    <HiMenuAlt4 onClick={() => setToggle(true)} />

                    {toggle && (
                      <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                      >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                          {['Add Record', 'View Record', 'addusers', 'addbuyers', 'addsellers', 'addinvestors', 'addalchive'].map((item) => (
                            <li key={item}>
                              <a href={`#${item}`} onClick={() => { handleThePage(item) }}>
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
                </>
              ) : (
                <>
                  <div className="app__navbar-menu">
                    <HiMenuAlt4 onClick={() => setToggle(true)} />

                    {toggle && (
                      <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                      >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                          {['Add Record', 'View Record', 'users', 'buyers', 'sellers', 'investors', 'alchive'].map((item) => (
                            <li key={item}>
                              <a href={`#${item}`} onClick={() => {handleTheWorkFilter(item) }}>
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
                </>
              )
            }
          </nav>
          {addRecord
            ? (
              <>
                <nav className="secondNav">
                  <div className="secondNavItem">
                    <ul className="app__navbar-links">
                      {['addusers', 'addbuyers', 'addsellers', 'addinvestors', 'addalchive'].map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                          {/* <div /> */}
                          <a href={`#${item}`} onClick={() => handlePage(item)}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </>
            ) : (
              <>
                <nav className="secondNav">
                  <div className="secondNavItem">
                    <ul className="app__navbar-links">
                      {['users', 'buyers', 'sellers', 'investors', 'alchive'].map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                          {/* <div /> */}
                          <a href={`#${item}`} onClick={() => handleWorkFilter(item)}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </>
            )}
        </div>
        {addRecord
          ? (
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
                <AddAchivesForm />
              )}
              {addadd && (
                <AddBuyers />
              )}
            </div>
          ) : (
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
          )
        }
      </div>

    </>

  )
}

export default Admin
