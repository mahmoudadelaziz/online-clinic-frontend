import React from "react";

function SignIn() {
  return (
    <div className="SignIn">
      <h1>Sign In!</h1>
      <h5>Sign in and find your Doctor!</h5>
      <form>
        <label htmlFor="Email">
          Email Address or Phone Number
        </label>
          <input id="Email" placeholder="Email Address or Phone Number" />
        <label className="mt-4" htmlFor="Password">
          Password
        </label>
      <input id="Password" placeholder="Password" />
          <div className="d-flex align-items-center justify-content-between my-5 px-4">
              <div>
                  <div className="remember-input">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                          Remember Me
                      </label>
                  </div>
              </div>
              <div>
                  Forget Password?
              </div>
          </div>
        <button className="login">Log In</button>
      </form>
    </div>
  );
}

export default SignIn;
