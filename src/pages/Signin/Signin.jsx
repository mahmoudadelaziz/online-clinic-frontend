import React, { useState } from "react";
import { Button, Checkbox, FormInputList } from "../../components";
import { signinSchema } from "../../utility/formSchemas";
import axios from "axios";
import "./Signin.css";

const formInitialState = {
  username: "",
  password: "",
};
const errorsInitialState = {
  username: "",
  password: "",
};
function SignIn() {
  const [errors, setErrors] = useState(errorsInitialState);
  const [user, setUser] = useState(formInitialState);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = signinSchema.validate(user, {
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
        `${import.meta.env.VITE_BASE_URL}user/patient/signin`,
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
  const formInputs = [
    {
      placeholder: "Username",
      value: user.username,
      name: "username",
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
      <h1 className="auth__heading">Sign in</h1>
      <p className="auth__subheading">Log into your account</p>
      <form className="auth__form" onSubmit={handleSubmit}>
        <FormInputList
          formInputs={formInputs}
          errors={errors}
          changeHandler={handleInputChange}
        />
        <Checkbox text="Remember me" />
        <Button title="Sign in" variant="primary" />
        <a href="/login" className="signup__link" style={{ marginTop: "29px" }}>
          Don't have an account? Join us
        </a>
      </form>
    </section>
  );
}

export { SignIn };
