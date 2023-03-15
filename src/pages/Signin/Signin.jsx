import React from "react";
import { Button, Input, Checkbox } from "../../components";
import "./Signin.css";

function SignIn() {
  return (
    <section className="form__container">
      <h1 className="auth__heading">Sign in</h1>
      <p className="auth__subheading">Log into your account</p>
      <form className="auth__form">
        <Input placeholder="username" />
        <Input placeholder="Password" />
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
