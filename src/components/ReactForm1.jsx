import React from "react";
import { useForm } from "react-hook-form";

const ReactForm1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode:"onChange",
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      password: "",
    },
  });

  const validatePassword = (value) => {
    const error = {};

    if (!value) {
      error.password = "Please enter your password.";
    }
    if (value.length < 8 || value.length > 12) {
      error.password = "Password must be between 8 and 12 characters.";
    }
    if (!/[A-Z]/.test(value)) {
      error.password = "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(value)) {
      error.password = "Password must contain at least one lowercase letter.";
    }
    if (!/\d/.test(value)) {
      error.password = "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*]/.test(value)) {
      error.password = "Password must contain at least one special character.";
    }

    return error.password ? error.password : true;
  };

  const submit = (FormData) => {
    console.log(FormData);
    alert("form submitted successfully")
  };

  const onerror = (error) => {
    console.log(error);
  };

  return (
    <div className="container w-fit bg-gray-300-500 py-10 px-10 m-auto mt-48 rounded-md shadow-2xl">
      <h1 className="text-xl mb-4 underline">React-hook VALIDATIION</h1>
      <form onSubmit={handleSubmit(submit, onerror)} className="pl-4">
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          placeholder="name"
          className={`border-2  ${
            errors.name?.message ? "border-red-500" : "border-black"
          } p-1  rounded-sm focus:outline-none `}
          {...register("name", {
            required: {
              value: true,
              message: "name is required",
            },
            minLength: {
              value: 3,
              message: "please enter minimum 3 charchter",
            },
          })}
        />
        <p className="text-red-500 text-xs mb-3">{errors.name?.message}</p>
        <label htmlFor="name">Email</label>
        <br />
        <input
          type="text"
          placeholder="email"
          className={`border-2  ${
            errors.email?.message ? "border-red-500" : "border-black"
          } p-1  rounded-sm focus:outline-none `}
          {...register("email", {
            required: {
              value: true,
              message: "email is required",
            },
            pattern: {
              value: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
              message: "please enter a valid email",
            },
          })}
        />
        <p className="text-red-500 text-xs mb-3">{errors.email?.message}</p>

        <label htmlFor="name">Mobile no.</label>
        <br />
        <input
          type="text"
          placeholder="enter your number"
          className={`border-2  ${
            errors.mobile?.message ? "border-red-500" : "border-black"
          } p-1  rounded-sm focus:outline-none `}
          {...register("mobile", {
            required: {
              value: true,
              message: "mobile no. is required",
            },
            pattern: {
              value: /^[1-9]\d{9}$/,
              message: "please enter a valid number",
            },
          })}
        />
        <p className="text-red-500 text-xs mb-3">{errors.mobile?.message}</p>

        <label htmlFor="name">Password</label>
        <br />
        <input
          type="password"
          placeholder="enter your number"
          className={`border-2  ${
            errors.password?.message ? "border-red-500" : "border-black"
          } p-1  rounded-sm focus:outline-none `}
          {...register("password", {
            validate:validatePassword,
            
          })}
        />
        <p className="text-red-500 text-xs mb-3 max-w-48">{errors.password?.message}</p>
        <br />
        <button type="submit" className="text-white bg-blue-500 p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactForm1;
