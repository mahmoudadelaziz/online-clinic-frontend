import React from "react";
import { useAuth } from "../AuthContext";

export const Profile = () => {
  const {    authUser,
    SetAuthUser,
    isLoggedIn,
    SetIsLoggedIn,} = useAuth()
    console.log(authUser, isLoggedIn)
  return (
    <div>
      <h1>{authUser}</h1>
      
    </div>
  );
};
