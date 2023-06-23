import axios from "../utility/axios";
import React, { useState } from "react";
import { doctorSignupSchema } from "../utility/DoctoFormSchemas";
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
  price1: null,
  price2: null,
  locationId: null,
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
  price1: null,
  price2: null,
  locationId: null,
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
      const { error } = doctorSignupSchema.validate(doctor, {
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
      await axios.post(`user/doctor/signup`, doctor);
      console.log("(🔎 Debugging) MESSAGE SENT: ", doctor)
      // Redirect to doctor's profile (Temporary MUST BE CHANGED LATER ON!)
      // window.location.href = "http://localhost:5173/doctor/profile";
    } catch (error) {
      console.log(error);
      console.log("(🔎 DEBUGGING) CURRENT OBJECT: ", doctor)
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
      type: "tel",
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
      placeholder: "Price 1",
      value: doctor.price1,
      name: "price1",
      onChange: handleInputChange,
      type: "number",
    },
    {
      placeholder: "Price 2",
      value: doctor.price2,
      name: "price2",
      onChange: handleInputChange,
      type: "number",
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
      type: "number",
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
          Register your Clinic on our Platform
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
        <Link href="/doctor/signin">
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ textAlign: "center" }}
          >
            Have an account? Sign in
          </Typography>
        </Link>
      </form>
    </Container>
  );
}

export { DoctorSignUp };
