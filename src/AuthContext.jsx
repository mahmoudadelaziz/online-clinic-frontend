import React, { useState } from "react";

const AuthContext = React.createContext({
  isAuth: false,
  setIsAuth: () => {},
});

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };