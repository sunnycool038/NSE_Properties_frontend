import { useState } from "react";
import "./app.css";
import FormInput from "./FormInput";

const AddUsersForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "id",
      type: "text",
      placeholder: "Userid",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Userid",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Fullname",
      type: "text",
      placeholder: "Fullname",
      errorMessage:
        "Fullname should be 3-16 characters and shouldn't include any special character!",
      label: "Fullname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "Date Registered",
      type: "date",
      placeholder: "Date Registered",
      label: "Date Registered",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Add Users</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUsersForm;

