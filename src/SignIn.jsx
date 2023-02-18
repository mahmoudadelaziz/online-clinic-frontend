import React from "react";

function SignIn() {
  return (
    <div className="SignIn">
      <h1>Sign In!</h1>
      <form>
        <label htmlFor="Email">
          Email Address or Phone Number
          <input id="Email" placeholder="Email Address or Phone Number" />
        </label>
        <label htmlFor="Password">
          Password
          <input id="Password" placeholder="Password" />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
