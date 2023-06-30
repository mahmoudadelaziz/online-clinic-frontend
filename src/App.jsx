import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { SignIn, SignUp, Doctors, DoctorPage, DoctorSignUp, DoctorSignIn, Profile } from "./pages";
import { useAuth } from "./AuthContext";

const App = () => {

  const { authUser, SetAuthUser, isLoggedIn, SetIsLoggedIn } = useAuth();

  useEffect(() => {
    // get the current isAuth state
    SetAuthUser(localStorage.getItem("User"));
    SetIsLoggedIn(localStorage.getItem("IsLoggedIn"));
  }, []);
  
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/doctor/signup" element={<DoctorSignUp />} />
          <Route path="/doctor/login" element={<DoctorSignIn />} />
        </Route>
      </Routes>
  );
};

export { App };
