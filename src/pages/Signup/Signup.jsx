import axios from "axios";
import React, { useState } from "react";
import { signupSchema } from "../../utility/formSchemas";
import { Button } from "../../components";
import { FormInputList } from "../../components";
import "./Signup.css";

const formInitialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  phoneNumber: "",
};
const errorsInitialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  phoneNumber: "",
};
function SignUp() {
  const [user, setUser] = useState(formInitialState);
  const [errors, setErrors] = useState(errorsInitialState);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = signupSchema.validate(user, {
        abortEarly: false,
      });
      if (error) {
        const errors = {};
        error.details.forEach((error) => {
          errors[error.context.key] = error.message;
        });
        setErrors(errors);
        return;
      }
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}user/patient/signup`,
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
  const formInputs = [
    {
      placeholder: "Full Name",
      value: user.name,
      name: "name",
      onChange: handleInputChange,
    },
    {
      placeholder: "Username",
      value: user.username,
      name: "username",
      onChange: handleInputChange,
    },
    {
      placeholder: "Email",
      value: user.email,
      name: "email",
      onChange: handleInputChange,
    },
    {
      placeholder: "Password",
      value: user.password,
      name: "password",
      onChange: handleInputChange,
    },
  ];
  return (
    <section className="form__container">
      <h1 className="auth__heading">Sign up</h1>
      <p className="auth__subheading">Create an account</p>
      <form className="auth__form" onSubmit={(e) => handleSubmit(e)}>
        <FormInputList
          formInputs={formInputs}
          errors={errors}
          changeHandler={handleInputChange}
        />
        <Button
          title="Sign up"
          variant="primary"
          style={{ marginTop: "10px", width: "100%", padding: "18px 180px" }}
        />
        <a href="/login" className="signup__link" style={{ marginTop: "29px" }}>
          Have an account? Login
        </a>
      </form>
    </section>
  );
}

export { SignUp };
