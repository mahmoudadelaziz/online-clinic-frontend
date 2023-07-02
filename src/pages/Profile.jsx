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
  let formattedCreatedAccountDate = patientCreateAccountDate.toUTCString();

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
          <Stack spacing={3} sx={{ width: "90%" }}>
            <Typography variant="h3" align="center">
              Your Profile
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h5" align="center">
                {patientData.name}
              </Typography>
              <Typography variant="body1" align="center">
                {patientData.username}
              </Typography>
              <Typography variant="body2" align="center">
                {patientData.email}
              </Typography>
              <Typography variant="body2" align="center">
                {patientData.phoneNumber}
              </Typography>
              <Typography variant="body2" align="center">
                Account Created on {formattedCreatedAccountDate}
              </Typography>
            </Stack>
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