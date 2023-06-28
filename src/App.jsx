import { Layout, Recommender } from "./components";
import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Doctors, DoctorPage, Profile } from "./pages";

const App = () => {
  console.log(location.pathname)
  return (
    <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:name" element={<DoctorPage />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
    </div>
  );
};
export { App };
