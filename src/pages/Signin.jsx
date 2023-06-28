import React, { useState, useContext } from "react";
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
import { AuthContext } from "../AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const formInitialState = {
  username: "",
  password: "",
};
const errorsInitialState = {
  username: "",
  password: "",
};
function SignIn() {
  const [errors, setErrors] = useState(errorsInitialState);
  const [user, setUser] = useState(formInitialState);
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

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
      const response = await axios.post(`/user/patient/login`, user);
      setIsAuth({ user: response.data.user, authToken: response.data.token }); // Update isAuth value using the context and the response from the server
      navigate("/");
      console.log("(🔎 Debugging) Successfully Logged in with: ", user);
      // console.log("(🔎 Debugging) Current value of isAuth: ", isAuth);

    } catch (error) {
      console.log(error);
      console.log("(🔎 Debugging) MESSAGE SENT: ", user)
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
          Log into your account
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
          <Link href="/signup" underline="always">
            Don't have an account? Join us
          </Link>
        </Box>
      </form>
    </Container>
  );
}

export { SignIn };