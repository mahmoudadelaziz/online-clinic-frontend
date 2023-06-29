import React from "react";
import { useAuth } from "../AuthContext";

export const Profile = () => {
  const {    authUser,
    SetAuthUser,
    isLoggedIn,
    SetIsLoggedIn,} = useAuth()
  return (
    <h1 style={{textAlign: "center"}}>WELCOME TO YOUR PROFILE, {authUser}!</h1>  
  );
};
