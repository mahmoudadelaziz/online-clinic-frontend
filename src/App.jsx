import { Layout } from "./components";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { SignIn, SignUp, Doctors, DoctorPage, DoctorSignUp, DoctorSignIn, Profile } from "./pages";
import { useAuth } from "./AuthContext";
import { DoctorProfile } from "./pages/DoctorProfile";

const App = () => {

  const { userType, SetAuthUser, SetIsLoggedIn } = useAuth();

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
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorPage />} />
          {/* If the user signed in is a doctor, show the Doctor's profile. */}
          {(localStorage.getItem("userType") === "Doctor")? (<Route path="/profile" element={<DoctorProfile />}/>)
          : (<Route path="/profile" element={<Profile />}/>)}
          <Route path="/doctor/signup" element={<DoctorSignUp />} />
          <Route path="/doctor/login" element={<DoctorSignIn />} />
        </Route>
      </Routes>
  );
};

export { App };
