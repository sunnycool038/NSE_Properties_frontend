import React, { useRef, useState, useEffect } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { db, storage } from "../../firebase/config";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from "@firebase/firestore";




import './TestForm.scss'

function TestForm() {
    const Fullname = {
        name: "Fullname",
        type: "text",
        placeholder: "Fullname",
        errorMessage:
            "Fullname should be 3-16 characters and shouldn't include any special character!",
        label: "Fullname",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
    }

    const Location = {
        name: "Location",
        type: "text",
        placeholder: "Location",
        errorMessage:
            "Location should be 3-16 characters and shouldn't include any special character!",
        label: "Location",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
    }

    const Description = {
        name: "Description",
        type: "textArea",
        placeholder: "Description",
        errorMessage:
            "Description should be 3-16 characters and shouldn't include any special character!",
        label: "Description",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
    }

    const theDate = {
        name: "date",
        type: "date",
        placeholder: "Day Of Transaction",
        label: "Day Of Transaction",
        errorMessage:
            "Description should be 3-16 characters and shouldn't include any special character!",
    }

    const transaction = {
        name: "transaction",
        placeholder: "transaction",
        errorMessage:
            "Please choose a transaction type!",
        label: "transaction",
        required: true,
    }

    const [values, setValues] = useState({
        Fullname: "",
        Location: "",
        Description: "",
        picture: "",
        date: "",
        trancsaction: ""
    });
    const dispatch = useDispatch();
    const { label, errorMessage, ...inputProps } = Fullname;
    const [focused, setFocused] = useState(false);
    const [Lfocused, setLFocused] = useState(false);
    const [Dfocused, setDFocused] = useState(false);
    const [Tfocused, setTFocused] = useState(false);
    const [Sfocused, setSFocused] = useState(false);
    const filepicker = useRef(null);
    const [select, setSelect] = useState(null);
    const uid = useSelector((state) => state.backend.uid);

    useEffect(() => {

    }, [])

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleFocus = (e) => {
        setFocused(true);
    };

    const handleLFocus = (e) => {
        setLFocused(true);
    };

    const handleTFocus = (e) => {
        setTFocused(true);
    };

    const handleDFocus = (e) => {
        setDFocused(true);
    };

    const handleSFocus = (e) => {
        setSFocused(true);
    };

    const addImage = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);

            reader.onload = (readerEvent) => {
                setSelect(readerEvent.target.result);
            };
        }
    };

    const SubmitModel = async (e) => {
        e.preventDefault();
        console.log("iam here")
        const docRef = await addDoc(collection(db, "buyers"), {
            userid: uid,
            Fullname: values.Fullname,
            Location: values.Location,
            Description: values.Description,
            picture: "image",
            date: values.date,
            trancsaction: values.trancsaction,
            timestamp: serverTimestamp(),
        });

        const images = ref(storage, `buyers/${docRef.id}/image`);

        await uploadString(images, select, "data_url").then(async (snapshot) => {
            const downloadUrl = await getDownloadURL(images);
            await updateDoc(doc(db, "buyers", docRef.id), {
                picture: downloadUrl,
            });
        });
    }
    return (
        <div className='app'>
            <form onSubmit={(e) =>SubmitModel(e)}>
                <h1>Add Buyers</h1>
                <div className='formInput'>
                    <label htmlFor="Fullname">{label}</label>
                    <input
                        id="Fullname"
                        {...inputProps}
                        onChange={onChange}
                        onBlur={handleFocus}
                        value={values[Fullname.name]}
                        focused={focused.toString()}
                    />
                    <span>{errorMessage}</span>
                </div>
                <div className='formInput'>
                    <label htmlFor="Location">{Location.label}</label>
                    <input
                        id="Location"
                        name="Location"
                        type="text"
                        placeholder="Location"
                        pattern="^[A-Za-z0-9]{3,16}$"
                        required={true}
                        onChange={onChange}
                        onBlur={handleLFocus}
                        value={values[Location.name]}
                        focused={Lfocused.toString()}
                    />
                    <span>{Location.errorMessage}</span>
                </div>
                <div className='formInput'>
                    <label htmlFor="Description">{Description.label}</label>
                    <textarea
                        id="Description"
                        name="Description"
                        type="textArea"
                        placeholder="Description"
                        required={true}
                        onChange={onChange}
                        onBlur={handleDFocus}
                        value={values[Description.name]}
                        focused={Dfocused.toString()}
                    ></textarea>
                    <span>{Description.errorMessage}</span>
                </div>
                <div className='formInput'>
                    <label>{theDate.label}</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        placeholder="Day Of Transaction"
                        required={true}
                        onChange={onChange}
                        onBlur={handleTFocus}
                        value={values[theDate.name]}
                        focused={Tfocused.toString()}
                    />
                    <span>{theDate.errorMessage}</span>
                </div>
                <div className='formInput'>
                    <label>type of transaction:</label>
                    <select
                        name="trancsaction"
                        id="trancsaction"
                        placeholder="Day Of Transaction"
                        required={true}
                        onChange={onChange}
                        onBlur={handleSFocus}
                        focused={Sfocused.toString()}
                    >
                        <option value="buy">buy</option>
                        <option value="rent">rent</option>
                        <option value="lease">lease</option>
                    </select>
                    <span>{transaction.errorMessage}</span>
                </div>
                <p>choose a file</p>
                <div className="div" onClick={() => filepicker.current.click()}>
                    <CameraIcon className="camera" />
                </div>
                <input
                    type="file"
                    accept=".png , .jpg, .jpeg"
                    ref={filepicker}
                    onChange={(e) => addImage(e)}
                    hidden
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
    //disabled={!select}
}

export default TestForm
