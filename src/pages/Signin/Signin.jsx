import React from "react";
import { Button, Input } from "../../components";
import "./Signin.css";

function SignIn() {
  return (
    <section className="form__container">
      <h1 className="signup__heading">Sign up</h1>
      <p className="signup__subheading">Create an account</p>
      <form className="signup__form">
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

export { SignIn };
