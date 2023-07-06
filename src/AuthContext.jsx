import React from "react";
import { useState, useContext } from "react";

// Step 1: Creating the context
const AuthContext = React.createContext();

// Step 2: use the context (via a custom hook for simplicity)
export const useAuth = () => {
  return useContext(AuthContext);
};

// Step 3: Providing the context
export function AuthProvider(props) {
  const [authUser, SetAuthUser] = useState(null);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [userType, setUserType] = useState("");

  const value = {
    userType,
    setUserType,
    authUser,
    SetAuthUser,
    isLoggedIn,
    SetIsLoggedIn,
    authToken,
    setAuthToken
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
