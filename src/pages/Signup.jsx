import axios from "../utility/axios";
import React, { useState } from "react";
import { signupSchema } from "../utility/formSchemas";
import { FormInputList } from "../components";
import {
  Container,
  Link,
  Stack,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const formInitialState = {
  name: "",
  email: "",
  gender: "",
  dateOfBirth: "",
  username: "",
  password: "",
  phoneNumber: "",
};
const errorsInitialState = {
  name: "",
  email: "",
  username: "",
  gender: "",
  dateOfBirth: "",
  password: "",
  phoneNumber: "",
};
function SignUp() {
  const [user, setUser] = useState(formInitialState);
  const [errors, setErrors] = useState(errorsInitialState);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleGenderChange = (e) => {
    setUser({ ...user, gender: e.target.value });
  };

  const handleDateOfBirthChange = (date) => {
    setUser({ ...user, dateOfBirth: date.target.value });
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
          console.log("Validation Error HERE: ", error.message); // Debugging
        });
        setErrors(errors);
        return;
      }
      await axios.post(`/user/patient/signup`, user);
      console.log("Success! The user object sent to server: ", user); //debugging
      navigate('/signin', { replace: true }); // redirect to login page
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
      type: "text",
    },
    {
      placeholder: "Username",
      value: user.username,
      name: "username",
      onChange: handleInputChange,
      type: "text",
    },
    {
      placeholder: "Email",
      value: user.email,
      name: "email",
      onChange: handleInputChange,
      type: "email",
    },
    {
      placeholder: "Phone Number",
      value: user.phoneNumber,
      name: "phoneNumber",
      onChange: handleInputChange,
      type: "phoneNumber",
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
        <Stack>
          <FormControl component="fieldset" sx={{ my: 2 }}>
            <Typography variant="subtitle1" color="primary" fontWeight="bold">
              Gender
            </Typography>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={user.gender}
              onChange={handleGenderChange}
            >
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <FormControl sx={{ my: 2 }}>
            <Typography variant="subtitle1" color="primary" fontWeight="bold">
              Date of Birth
            </Typography>
            <TextField
              name="dateOfBirth"
              onChange={handleDateOfBirthChange}
              type="date"
            />
          </FormControl>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ width: "100%", my: 2 }}
        >
          Sign up
        </Button>
        <Link href="/login">
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
