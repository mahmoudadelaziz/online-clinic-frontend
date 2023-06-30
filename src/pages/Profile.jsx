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

  // console.log("CONFIG:", config)

  const fetchPatientData = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/patient/profile`,
      config
    );
    setPatientData(response?.data.patientProfile);
    console.log("The data we got from that response (patientData):", patientData); // Debugging
  };

  useEffect(() => {
    fetchPatientData();
  }, []);

  const handleEditData = () => {
    setEditState(!editState);
    console.log("Edit profile page"); // Debugging
  };

  return (
    <div align="center">
      <Card variant="outlined" sx={{ my: 5, mx: 20, p: 0.1, borderRadius: 10 }}>
        <CardContent>
          <Stack spacing={1.5} sx={{ width: "90%" }}>
            <Typography variant="h3">Your Profile</Typography>
            <TextField
              // id="outlined-read-only-input"
              label="Full Name"
              InputLabelProps={{ shrink: true }}
              value={patientData.name}
              defaultValue={patientData.name}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Username"
              InputLabelProps={{ shrink: true }}
              value={patientData.username}
              defaultValue={patientData.username}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Email"
              defaultValue=" "
              value={patientData.email}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Phone Number"
              InputLabelProps={{ shrink: true }}
              value={patientData.phoneNumber}
              InputProps={{
                readOnly: !editState,
              }}
            />{" "}
            <Typography>Account Created in {patientData.createdAt}</Typography>
            {/* HISTORY STUFF */}
            <Typography variant="h5">Your Appointments</Typography>
            <Stack spacing={0.5}>
              {MyAppointments.map((Appointment) => {
                return (
                  <Grid container>
                    <Grid item xs>
                      <Card variant="outlined">
                        <PatientAppointments />
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}

              {/* </Stack> */}
            </Stack>
            ADDITIONAL SECTION
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
