import React from "react";

function SignUp() {
  return (
    <div className="SignUp">
      <h1>Sign up!</h1>
      <label for="email">
        <b>Email</b>
      </label>
      <input
        type="text"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
      />

      <label for="psw">
        <b>Password</b>
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="psw"
        required
      />

      <label for="psw-repeat">
        <b>Repeat Password</b>
      </label>
      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        id="psw-repeat"
        required
      />

      <p>By creating an account you agree to our Terms & Privacy.</p>
      <button type="submit" class="registerbtn">
        Sign Up
      </button>
    </div>
  );
}

export default SignUp;
