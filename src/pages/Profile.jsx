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
import { useAuth } from "../AuthContext";


export const Profile = () => {
  const [editState, setEditState] = useState(false);
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
  let formattedReviewDate = patientCreateAccountDate.toUTCString();

  const fetchPatientData = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/patient/profile`,
      config
    );
    setPatientData(response?.data.patientProfile);
    setPatientId(response?.data.patientProfile.id);
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
      console.log("##Response to the reviews request:", response)
    };
      fetchPatientReviews();
  }, []);

  return (
    <div align="center">
      <Card variant="outlined" sx={{ my: 5, mx: 20, p: 0.1, borderRadius: 10 }}>
        <CardContent>
          <Stack spacing={1.5} sx={{ width: "90%" }}>
            <Typography variant="h3">Your Profile</Typography>
            <Typography>{patientData.name}</Typography>
            <Typography>ID: {patientId}</Typography>
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
              {patientAppointments.map((Appointment) => {
                return (
                  <Grid container key={Appointment.at}>
                    <Grid item xs>
                      <Card variant="outlined">
                        <PatientAppointments AppointmentDate={Appointment.at} DoctorId={Appointment.doctorId} PatientId={patientId} />
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
