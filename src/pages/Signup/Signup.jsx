import React from "react";
import { Button, Input } from "../../components";
import "./Signup.css";

function SignUp() {
  return (
    <section className="form__container">
      <h1 className="auth__heading">Sign up</h1>
      <p className="auth__subheading">Create an account</p>
      <form className="auth__form">
        <Input placeholder="Full Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <div className="signup__selection">
          <Button title="Patient" variant="secondary" />
          <Button title="Doctor" variant="secondary" />
        </div>
        <Button title="Sign up" variant="primary" />
        <a href="/login" className="signup__link" style={{ marginTop: "29px" }}>
          Have an account? Login
        </a>
      </form>
    </section>
  );
}

export { SignUp };
