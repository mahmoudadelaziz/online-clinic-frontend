import React from "react";
import {
  Button,
  Card,
  Divider,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { PatientAppointments } from "../components/PatientAppointments";
import { Review } from "../components/Review";
import { useAuth } from "../AuthContext";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [patientData, setPatientData] = useState({});
  const [patientId, setPatientId] = useState(0);
  const [patientAppointments, setPatientAppointments] = useState([]);
  const [patientReviews, setPatientReviews] = useState([]);

  const {
    authUser,
    SetAuthUser,
    isLoggedIn,
    SetIsLoggedIn,
    authToken,
    setAuthToken,
  } = useAuth();

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
  };

  let patientCreateDateISOString = patientData.createdAt;
  let patientCreateAccountDate = new Date(patientCreateDateISOString);
  let formattedCreatedAccountDate = patientCreateAccountDate.toUTCString();

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    fetchPatientData();
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/user/patient/${patientData.id}`,
        patientData
      );
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setPatientData({
      ...patientData,
      [event.target.name]: event.target.value,
    });
  };

  const fetchPatientData = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/patient/profile`,
      config
    );
    setPatientData(response?.data.patientProfile);
    setPatientId(response?.data.patientProfile.id);
    localStorage.setItem("patientId", response?.data.patientProfile.id)
  };

  useEffect(() => {
    fetchPatientData();
  }, []);

  useEffect(() => {
    const fetchPatientAppointments = async () => {
      const response = await axios.get(
        `http://localhost:5000/appointment/patient`,
        config
      );
      setPatientAppointments(response?.data?.appointments);
    };
    fetchPatientAppointments();
  }, []);

  useEffect(() => {
    const fetchPatientReviews = async () => {
      const response = await axios.get(
        `http://localhost:5000/review/patient`,
        config
      );
      setPatientReviews(response?.data?.reviews);
      console.log("##Response to the reviews request:", response);
    };
    fetchPatientReviews();
  }, []);

  return (
    <div align="center">
      <Card variant="outlined" sx={{ my: 5, mx: 20, p: 0.1, borderRadius: 10 }}>
        <CardContent>
          <Stack spacing={3} sx={{ width: "90%" }}>
            <Typography variant="h3" align="center">
              Your Profile
            </Typography>
            {!editMode ? (
              <Stack spacing={1}>
                <Typography variant="h5" align="center">
                  {patientData.name}
                </Typography>
                <Typography variant="body1" align="center">
                  Username: {patientData.username}
                </Typography>
                <Typography variant="body1" align="center">
                  Date of birth:{" "}
                  {new Date(patientData.dateOfBirth).toLocaleDateString(
                    "en-GB"
                  )}
                </Typography>
                <Typography variant="body2" align="center">
                  E-mail: {patientData.email}
                </Typography>
                <Typography variant="body2" align="center">
                  Phone Number: {patientData.phoneNumber}
                </Typography>
                <Typography variant="body1" align="center">
                  Account ID: {patientData.id}
                </Typography>
                <Typography variant="body2" align="center">
                  Account Created on {formattedCreatedAccountDate}
                </Typography>
                <Button variant="contained" onClick={handleEdit}>
                  Edit Profile
                </Button>
              </Stack>
            ) : (
              <Stack spacing={1}>
                <TextField
                  name="name"
                  value={patientData.name}
                  onChange={handleChange}
                  label="Name"
                  fullWidth
                  disabled
                />
                <TextField
                  name="username"
                  value={patientData.username}
                  onChange={handleChange}
                  label="Username"
                  fullWidth
                  disabled
                />
                <TextField
                  name="email"
                  value={patientData.email}
                  onChange={handleChange}
                  label="Email"
                  fullWidth
                />
                <TextField
                  name="phoneNumber"
                  value={patientData.phoneNumber}
                  onChange={handleChange}
                  label="Phone Number"
                  fullWidth
                />
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" onClick={handleSave}>
                    Save Changes
                  </Button>
                  <Button variant="outlined" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Stack>
              </Stack>
            )}
            <Divider />
            <Stack spacing={3}>
              <Typography variant="h5" align="center">
                Your Appointments
              </Typography>
              {patientAppointments.map((Appointment) => {
                return (
                  <Card key={Appointment.at} variant="outlined">
                    <PatientAppointments
                      AppointmentDate={Appointment.at}
                      DoctorId={Appointment.doctorId}
                      PatientId={patientId}
                    />
                  </Card>
                );
              })}
            </Stack>
            <Divider />
            <Stack spacing={3}>
              <Typography variant="h5" align="center">
                Your Reviews
              </Typography>
              {patientReviews.map((REVIEW) => (
                <Stack
                  key={REVIEW.id}
                  sx={{
                    border: 1,
                    p: 1,
                    borderRadius: 3,
                  }}
                >
                  <Review REVIEW={REVIEW} />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export { Profile };
