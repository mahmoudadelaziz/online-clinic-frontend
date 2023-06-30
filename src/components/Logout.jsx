import React from "react";
import { useEffect } from "react";
import { useAuth } from "../AuthContext";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  const logStatus = { authUser, SetAuthUser, isLoggedIn, SetIsLoggedIn };

  useEffect(() => {
    // get the current isAuth state
    SetAuthUser(null)
    SetIsLoggedIn(false)
    localStorage.clear()
  }, []);
  
  return <></>;
};
