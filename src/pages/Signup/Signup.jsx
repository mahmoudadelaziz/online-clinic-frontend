import axios from "axios";
import React, { useState } from "react";
import { signupSchema } from "../../utility/formSchemas";
import { FormInputList } from "../../components";
import "./Signup.css";
import { Container, Link, Typography, Button } from "@mui/material";

const formInitialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  phoneNumber: "",
};
const errorsInitialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  phoneNumber: "",
};
function SignUp() {
  const [user, setUser] = useState(formInitialState);
  const [errors, setErrors] = useState(errorsInitialState);
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = signupSchema.validate(user, {
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
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}user/patient/signup`,
        user
      );
    } catch (error) {
      console.log(error);
    }
  };
  const formInputs = [
    {
      placeholder: "Full Name",
      value: user.name,
      name: "name",
      onChange: handleInputChange,
    },
    {
      placeholder: "Username",
      value: user.username,
      name: "username",
      onChange: handleInputChange,
    },
    {
      placeholder: "Email",
      value: user.email,
      name: "email",
      onChange: handleInputChange,
    },
    {
      placeholder: "Password",
      value: user.password,
      name: "password",
      onChange: handleInputChange,
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
          Sign up
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary.dark"
          sx={{ textAlign: "center" }}
          fontWeight="bold"
        >
          Create an account
        </Typography>
        <FormInputList
          formInputs={formInputs}
          errors={errors}
          changeHandler={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ width: "100%", my: 2 }}
        >
          Sign up
        </Button>
        <Link href="/signin">
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ textAlign: "center" }}
          >
            Have an account? Login
          </Typography>
        </Link>
      </form>
    </Container>
  );
}

export { SignUp };
