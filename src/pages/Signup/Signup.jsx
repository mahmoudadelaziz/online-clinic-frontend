import axios from "axios";
import React, { useState } from "react";
import {
  usernameSchema,
  emailSchema,
  nameSchema,
  passwordSchema,
  phoneNumberSchema,
} from "../../utility/formSchemas";
import { Button, Input } from "../../components";
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
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}user/patient/signup`,
        user
      );
      console.log(data);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <section className="form__container">
      <h1 className="auth__heading">Sign up</h1>
      <p className="auth__subheading">Create an account</p>
      <form className="auth__form" onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Full Name"
          name="name"
          value={user.name}
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          placeholder="PhoneNumber"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={(e) => handleInputChange(e)}
        />
        <Button title="Sign up" variant="primary" />
        <a href="/login" className="signup__link" style={{ marginTop: "29px" }}>
          Have an account? Login
        </a>
      </form>
    </section>
  );
}

export { SignUp };
