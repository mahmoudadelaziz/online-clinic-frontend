import React from "react";
import {
  Avatar,
  Button,
  Card,
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
import { AppointmentBooking } from "../components/AppointmentBooking";
import { useAuth } from "../AuthContext";

const MyAppointments = ["Appointment 1", "Appointment 2", "Appointment 3"];
const MyReviews = ["Review 1", "Review 2", "Review 3"];

export const Profile = () => {
  const [editState, setEditState] = useState(false);
  const [patientData, setPatientData] = useState({});

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

  let patientCreateDateISOString = patientData.createdAt
  let patientCreateAccountDate = new Date(patientCreateDateISOString)
  let formattedReviewDate = patientCreateAccountDate.toUTCString()

  const fetchPatientData = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/patient/profile`,
      config
    );
    setPatientData(response?.data.patientProfile);
    console.log(
      "The data we got from that response (patientData):",
      patientData
    ); // Debugging
  };

  useEffect(() => {
    fetchPatientData();
  }, []);

  return (
    <div align="center">
      <Card variant="outlined" sx={{ my: 5, mx: 20, p: 0.1, borderRadius: 10 }}>
        <CardContent>
          <Stack spacing={1.5} sx={{ width: "90%" }}>
            <Typography variant="h3">Your Profile</Typography>
            <Typography>{patientData.name}</Typography>
            <Typography>{patientData.username}</Typography>
            <Typography />
            {patientData.email}
            <Typography />
            <Typography />
            {patientData.phoneNumber}
            <Typography />
            <Typography>Account Created in {formattedReviewDate}</Typography>
            {/* HISTORY STUFF */}
            <Typography variant="h5">Your Appointments</Typography>
            <Stack spacing={0.5}>
              {MyAppointments.map((Appointment) => {
                return (
                  <Grid container key={Appointment}>
                    <Grid item xs>
                      <Card variant="outlined">
                        <PatientAppointments />
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}

            </Stack>
            Your Reviews
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
