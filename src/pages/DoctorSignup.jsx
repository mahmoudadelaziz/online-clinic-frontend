import axios from "../utility/axios";
import React, { useState } from "react";
import { doctorSignupSchema } from "../utility/DoctoFormSchemas";
import { FormInputList } from "../components";
import {
  Container,
  Link,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const formInitialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  gender: "",
  workingHoursStart: "",
  workingHoursEnd: "",
  phoneNumber: "",
  specialization: "",
  visitFee: "",
  locationId: "",
  about: "",
};

const errorsInitialState = {
  name: "",
  email: "",
  username: "",
  password: "",
  gender: "",
  workingHoursStart: "",
  workingHoursEnd: "",
  phoneNumber: "",
  specialization: "",
  visitFee: "",
  locationId: "",
  about: "",
};

function DoctorSignUp() {
  const [doctor, setDoctor] = useState(formInitialState);
  const [errors, setErrors] = useState(errorsInitialState);
  const navigate = useNavigate()
  
  const handleInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const handleGenderChange = (e) => {
    setDoctor({ ...doctor, gender: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const visitFeeFieldValue = parseInt(doctor["visitFee"], 10);
    const locationIdFieldValue = parseInt(doctor["locationId"], 10);

    const dataToSend = {
      ...doctor,
      ["visitFee"]: visitFeeFieldValue,
      ["locationId"]: locationIdFieldValue,
    };

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
        console.log("(🔎 DEBUGGING) HERE! ATTEMPTED message Body: ", dataToSend);
        console.log("(🔎 DEBUGGING) HERE! ERROR: ", errors);
        return;
      }

      await axios.post(`user/doctor/signup`, dataToSend);
      console.log("(🔎 Debugging) Success! Body sent to server: ", dataToSend);
      navigate('/doctor/login', { replace: true }); // redirect to login page
    } catch (error) {
      console.log(error);
      console.log("(🔎 DEBUGGING) ATTEMPTED message Body: ", dataToSend);
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
      type: "text",
    },
    {
      placeholder: "Visit fee",
      value: doctor.visitFee,
      name: "visitFee",
      onChange: handleInputChange,
      type: "number",
    },
    {
      placeholder: "Working Hours Start",
      value: doctor.workingHoursStart,
      name: "workingHoursStart",
      onChange: handleInputChange,
      type: "time",
    },
    {
      placeholder: "Working Hours End",
      value: doctor.workingHoursEnd,
      name: "workingHoursEnd",
      onChange: handleInputChange,
      type: "time",
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
        <FormControl component="fieldset" sx={{ my: 2 }}>
          <Typography variant="subtitle1" color="primary" fontWeight="bold">
            Gender
          </Typography>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={doctor.gender}
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ width: "100%", my: 2 }}
        >
          Sign up
        </Button>
        <Link href="/doctor/login">
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
