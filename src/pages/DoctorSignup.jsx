import axios from "../utility/axios";
import React, { useState } from "react";
import { signupSchema } from "../utility/formSchemas";
import { FormInputList } from "../components";
import { Container, Link, Typography, Button } from "@mui/material";

const formInitialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  phoneNumber: "",
  specialization: "",
  subSpecialization: "",
  price1: 0,
  price2: 0,
  locationId: 0,
  about: "",
};

const errorsInitialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  phoneNumber: "",
  specialization: "",
  subSpecialization: "",
  price1: 0,
  price2: 0,
  locationId: 0,
  about: "",
};

function DoctorSignUp() {
  const [doctor, setDoctor] = useState(formInitialState);
  const [errors, setErrors] = useState(errorsInitialState);
  const handleInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = signupSchema.validate(doctor, {
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
      await axios.post(`/user/doctor/signup`, doctor);
      // Redirect to doctors (Temporary MUST BE CHANGED LATER ON!)
      // window.location.href = "http://localhost:5173/doctor/profile";
    } catch (error) {
      console.log(error);
    }
  };
  const formInputs = [
    {
      placeholder: "Full Name",
      value: doctor.name,
      name: "name",
      onChange: handleInputChange,
      type: "text",
    },
    {
      placeholder: "Email",
      value: doctor.email,
      name: "email",
      onChange: handleInputChange,
      type: "email",
    },
    {
      placeholder: "Username",
      value: doctor.username,
      name: "username",
      onChange: handleInputChange,
      type: "text",
    },
    {
      placeholder: "Phone Number",
      value: doctor.phoneNumber,
      name: "phoneNumber",
      onChange: handleInputChange,
      type: "phoneNumber",
    },
    {
      placeholder: "Password",
      value: doctor.password,
      name: "password",
      onChange: handleInputChange,
      type: "password",
    },
    {
      placeholder: "Specialization",
      value: doctor.specialization,
      name: "specialization",
      onChange: handleInputChange,
      type: "text",
    },
    {
      placeholder: "Sub-specialization",
      value: doctor.subSpecialization,
      name: "subSpecialization",
      onChange: handleInputChange,
      type: "text",
    },
    {
      placeholder: "About",
      value: doctor.about,
      name: "about",
      onChange: handleInputChange,
      type: "text",
    },
    {
      placeholder: "Location ID",
      value: doctor.locationId,
      name: "locationId",
      onChange: handleInputChange,
      type: "text",
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

export { DoctorSignUp };
