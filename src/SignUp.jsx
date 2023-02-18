import React from "react";

function SignUp() {
  return (
    <div className="SignUp">
      <form>
        <h1>Sign Up!</h1>
        <label htmlFor="FullName">
          Full Name
          <input id="FullName" placeholder="Full Name" />
        </label>
        <label htmlFor="Email">
        Email Address
          <input id="Email" placeholder="Email Address" />
        </label>
        <label htmlFor="Password">
          Password
          <input id="Password" placeholder="Password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
