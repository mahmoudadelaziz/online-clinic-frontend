import { Layout, Recommender } from "./components";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Doctors, DoctorPage, Profile } from "./pages";

const App = () => {
  return (
    <div>
      {/* <p> Hello all </p> */}
    <Routes>
      {/* <Route path="/" element={<Receommender/>} /> */}
      <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:name" element={<DoctorPage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
    <Recommender/>
    </div>
  );
};
export { App };
