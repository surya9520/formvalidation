import React, { useState } from "react";

const Form1 = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const [errordata, setErrordata] = useState({});
  const [isloading, setIsloading] = useState(false);

  const validate = (values) => {
    const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
    const mobileRegex = /^[1-9]\d{9}$/;
    let error={};
    //name validation
    if (!values.name) {
     error.name="please enter your name"
    }
    //email validation
    if (!values.email) {
      error.email= "please enter your email address"
    }
    else if(!emailRegex.test(values.email)){
       error.email="please enter a valid email address"
    }
    //mobile validation
    if (!values.mobile) {
     error.mobile= "please enter your mobile no."
    }
    else if(!mobileRegex.test(values.mobile)){
        error.mobile="please enter a valid mobile no."
     }
    //password validation
    if (!values.password) {
    error.password= "please enter your password" 
    }
    return error;
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    const error=validate(formdata);
    setErrordata(error);
    setIsloading(false);
    console.log(errordata)
    if(Object.keys(errordata).length==0){
        console.log("form submitted sucessfully")
    }
    
  };
  return (
    <div className="container w-fit bg-gray-300-500 py-10 px-10 m-auto mt-48 rounded-md shadow-2xl">
      <h1 className="text-xl mb-4 underline">ON-SUBMIT VALIDATIION</h1>
      <form onSubmit={handleOnSubmit} className="pl-4">
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          placeholder="name"
          name="name"
          className={`border-2  ${errordata.name ? 'border-red-500' : 'border-black'} p-1  rounded-sm focus:outline-none`}
          value={formdata.name}
          onChange={handleOnChange}
        />{" "}
        <p className="text-red-500 text-xs mb-3">{errordata.name}</p>
        <label htmlFor="name">Email</label>
        <br />
        <input
          type="text"
          placeholder="email"
          name="email"
          className={`border-2  ${errordata.email ? 'border-red-500' : 'border-black'} p-1  rounded-sm focus:outline-none`}
          value={formdata.email}
          onChange={handleOnChange}
        />
        <p className="text-red-500 text-xs mb-3">{errordata.email}</p>
       
        <label htmlFor="name">Mobile no.</label>
        <br />
        <input
          type="text"
          placeholder="enter your number"
          name="mobile"
          className={`border-2  ${errordata.mobile? 'border-red-500' : 'border-black'} p-1  rounded-sm focus:outline-none`}
          value={formdata.mobile}
          onChange={handleOnChange}
        />
        <p className="text-red-500 text-xs mb-3">{errordata.mobile}</p>
      
        <label htmlFor="name">Password</label>
        <br />
        <input
          type="text"
          placeholder="enter your number"
          name="password"
          className={`border-2  ${errordata.password ? 'border-red-500' : 'border-black'} p-1  rounded-sm focus:outline-none`}
          value={formdata.password}
          onChange={handleOnChange}
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

export default Form1;
