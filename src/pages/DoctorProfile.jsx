import React from "react";
import {
  Avatar,
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
import { DoctorAppointments } from "../components/DoctorAppointments";

export const DoctorProfile = () => {
  const [editState, setEditState] = useState(false);
  const [doctorData, setDoctorData] = useState({});
  const [doctorId, setDoctorId] = useState(0);
  const [doctorAppointments, setDoctorAppointments] = useState([]);
  const [doctorReviews, setDoctorReviews] = useState([]);

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

  useEffect(() => {
    const fetchDoctorData = async () => {
      const response = await axios.get(
        `http://localhost:5000/user/doctor/profile`,
        config
      );
      setDoctorData(response?.data?.doctorProfile);
      setDoctorId(response?.data?.doctorProfile.id);
      console.log("Doctor ID: ########## ", doctorId) // Debugging
      localStorage.setItem("doctorId", response?.data?.doctorProfile.id);
    };

    const fetchDoctorReviews = async () => {
      const response = await axios.get(
        `http://localhost:5000/review/doctor/${localStorage.getItem("doctorId")}`
      );
      setDoctorReviews(response?.data.reviews);
      console.log(
        "(🔍🔍🔍 Debugging) The reviews fetched: ",
        response?.data?.reviews
      ); // Debugging
    };
    fetchDoctorData();
    fetchDoctorReviews();
  }, []);

  useEffect(() => {
    const fetchDoctorAppointments = async () => {
      const response = await axios.get(
        `http://localhost:5000/appointment/doctor`,
        config
      );
      setDoctorAppointments(response?.data?.appointments);
    };
    fetchDoctorAppointments();
  }, []);

  console.log("(🔍 Debugging) doctorData received:", doctorData);

  return (
    <div align="center">
      <Card variant="outlined" sx={{ my: 5, mx: 20, p: 0.1, borderRadius: 10 }}>
        <CardContent>
          <Stack spacing={1.5} sx={{ width: "90%" }}>
            <Typography variant="h3">Your Profile</Typography>
            <Typography>{doctorData.name}</Typography>
            <Typography>ID: {doctorId}</Typography>
            <Typography>{doctorData.username}</Typography>
            <Typography />
            {doctorData.email}
            <Typography />
            <Typography />
            {doctorData.phoneNumber}
            <Typography />
            <Typography>Account Created in {doctorData.createdAt}</Typography>
            {/* HISTORY STUFF */}
            <Typography variant="h5">Your Appointments</Typography>
            <Stack spacing={0.5}>
              {doctorAppointments.map((Appointment) => {
                return (
                  <Grid container key={Appointment.at}>
                    <Grid item xs>
                      <Card variant="outlined">
                        <DoctorAppointments
                          AppointmentDate={Appointment.at}
                          DoctorId={Appointment.doctorId}
                          PatientId={patientId}
                        />
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
            </Stack>
            <Typography variant="h5">Your Reviews</Typography>
            <Stack
              padding={2}
              spacing={3}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              {doctorReviews.map((REVIEW) => (
                <Stack
                  sx={{ border: 1, p: 1, borderRadius: 3 }}
                  item
                  key={REVIEW.id}
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
