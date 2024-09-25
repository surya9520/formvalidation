import React, { useState } from "react";

const Form3 = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [errordata, setErrordata] = useState({});
  const [isloading, setIsloading] = useState(false);

  const validate = (name, value) => {
    const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    const mobileRegex = /^[1-9]\d{9}$/;

    let error = {};

    switch (name) {
      case "name":
        if (!value) {
          error.name = "please enter your name";
        } else if (value.length < 4) {
          error.name = "please enter minimum 4 charchter";
        }
        break;
      case "email":
        if (!value) {
          error.email = "please enter your email address";
        } else if (!emailRegex.test(value)) {
          error.email = "please enter a valid email address";
        }
        break;
      case "mobile":
        if (!value) {
          error.mobile = "please enter your mobile no.";
        } else if (!mobileRegex.test(value)) {
          error.mobile = "please enter a valid mobile no.";
        }
        break;
      case "password":
        if (!value) {
          error.password = "please enter your password";
        }
        if (value.length < 8 || value.length > 12) {
          error.password = "Password must be between 8 and 12 characters.";
        }
        if (!/[A-Z]/.test(value)) {
          error.password ="Password must contain at least one uppercase letter.";
        }
        if (!/[a-z]/.test(value)) {
            error.password= "Password must contain at least one lowercase letter."
          
        }
        if (!/\d/.test(value)) {
          error.password="Password must contain at least one number.";
        }
        if (!/[!@#$%^&*]/.test(value)) {
          error.password="Password must contain at least one special character."
          
        }
        break;
    }

    return error;
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });

    const newError = validate(name, value);
    setErrordata((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (newError[name]) {
        updatedErrors[name] = newError[name];
      } else {
        delete updatedErrors[name];
      }

      return updatedErrors;
    });
  };
  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    const newError = validate(name, value);
    setErrordata((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (newError[name]) {
        updatedErrors[name] = newError[name];
      } else {
        delete updatedErrors[name];
      }

      return updatedErrors;
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    const data = { ...formdata };

    for (let key in data) {
      const validationError = validate(key, data[key]);
      if (validationError[key]) {
        errors[key] = validationError[key]; 
      }
    }

    setErrordata(errors); 
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      alert("Signup successfully");
    } 
  };

  return (
    <div className="container w-fit bg-gray-300-500 py-10 px-10 m-auto mt-48 rounded-md shadow-2xl">
      <h1 className="text-xl mb-4 underline">ON-BLUR VALIDATIION</h1>
      <form onSubmit={handleOnSubmit} className="pl-4">
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          placeholder="name"
          name="name"
          className={`border-2  ${
            errordata.name ? "border-red-500" : "border-black"
          } p-1  rounded-sm focus:outline-none `}
          value={formdata.name}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <p className="text-red-500 text-xs mb-3">{errordata.name}</p>
        <label htmlFor="name">Email</label>
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          className={`border-2  ${
            errordata.email ? "border-red-500" : "border-black"
          } p-1  rounded-sm focus:outline-none `}
          value={formdata.email}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <p className="text-red-500 text-xs mb-3">{errordata.email}</p>

        <label htmlFor="name">Mobile no.</label>
        <br />
        <input
          type="text"
          placeholder="enter your number"
          name="mobile"
          className={`border-2  ${
            errordata.mobile ? "border-red-500" : "border-black"
          } p-1  rounded-sm focus:outline-none `}
          value={formdata.mobile}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <p className="text-red-500 text-xs mb-3">{errordata.mobile}</p>

        <label htmlFor="name">Password</label>
        <br />
        <input
          type="password"
          placeholder="enter your number"
          name="password"
          className={`border-2  ${
            errordata.password ? "border-red-500" : "border-black"
          } p-1  rounded-sm focus:outline-none `}
          value={formdata.password}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <p className="text-red-500 text-xs mb-3">{errordata.password}</p>
        <br />
        <button type="submit" className="text-white bg-blue-500 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form3;
