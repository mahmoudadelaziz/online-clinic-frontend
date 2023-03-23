import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

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
        <GoogleOAuthProvider clientId="588094948888-gn1t0o88alj2i1sf38p5grdgnfl04uuu.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </form>
    </div>
  );
}

export default SignUp;
