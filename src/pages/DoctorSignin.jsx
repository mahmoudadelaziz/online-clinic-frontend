import React, { useState } from "react";
import { FormInputList } from "../components";
import { signinSchema } from "../utility/formSchemas";
import axios from "../utility/axios";
import {
  Button,
  Container,
  Typography,
  Checkbox,
  Link,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const formInitialState = {
  username: "",
  password: "",
};
const errorsInitialState = {
  username: "",
  password: "",
};
function DoctorSignIn() {
  const [errors, setErrors] = useState(errorsInitialState);
  const [user, setUser] = useState(formInitialState);
  const navigate = useNavigate();

  const {
    userType,
    setUserType,
    authUser,
    SetAuthUser,
    isLoggedIn,
    SetIsLoggedIn,
    authToken,
    setAuthToken,
  } = useAuth();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = signinSchema.validate(user, {
        abortEarly: false,
      });
      if (error) {
        const errors = {};
        error.details.forEach((error) => {
          errors[error.context.key] = error.message;
        });
        setErrors(errors);
        return;
      }
      const response = await axios.post(`/user/doctor/login`, user);
      // CONTEXT AND LOCALSTORAGE LOGIC HERE
      SetIsLoggedIn(true)
      setUserType("Doctor")
      SetAuthUser(user.username)
      setAuthToken(response?.data?.token)
      localStorage.setItem("IsLoggedIn", true);
      localStorage.setItem("userType", "Doctor");
      localStorage.setItem("User", user.username);
      localStorage.setItem("authToken", response?.data?.token);
      // Debugging logs
      console.log("(🔎 Debugging) Successfully Logged in as Droctor: ", user);
      console.log("(🔎 Debugging) The Response received: ", response?.data?.token);
      console.log("(🔎 Debugging) Now in the global context: ", user.username)

      navigate("/profile", { replace: true }); // redirect to homepage
    } catch (error) {
      console.log(error);
      console.log("(🔎 Debugging) Attempted to login with the info: ", user);
      setErrors({ ...errors, username: "Invalid username or password" , password: "Invalid username or password" });
    }
  };
  const formInputs = [
    {
      placeholder: "Username",
      value: user.username,
      name: "username",
      onChange: handleInputChange,
      type: "text",
    },
    {
      placeholder: "Password",
      value: user.password,
      name: "password",
      onChange: handleInputChange,
      type: "password",
    },
  ];
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h2"
          color="primary"
          sx={{ textAlign: "center" }}
          fontWeight="bold"
        >
          Sign in
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary.dark"
          sx={{ textAlign: "center" }}
          fontWeight="bold"
        >
          Log in to manage your appointments
        </Typography>
        <FormInputList
          formInputs={formInputs}
          errors={errors}
          changeHandler={handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign in
        </Button>
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
          <Box>
            <Checkbox sx={{ p: 0, mr: 1 }} />
            <Typography variant="caption">Remember me</Typography>
          </Box>
          <Link href="/doctor/signup" underline="always">
            Don't have an account? Join us!
          </Link>
        </Box>
      </form>
    </Container>
  );
}

export { DoctorSignIn };
