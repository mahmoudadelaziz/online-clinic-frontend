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
import { Review } from "../components/Review";
import { useAuth } from "../AuthContext";
import { DoctorAppointments } from "../components/DoctorAppointments";

export const DoctorProfile = () => {
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
    const fetchDoctor = async () => {
      try {
        const {
          data: { doctorProfile },
        } = await axios.get(
          `http://localhost:5000/user/doctor/profile`,
          config
        );
        setDoctorData(doctorProfile);
        setDoctorId(doctorProfile?.id);
        console.log("(🔍 Debugging) The doctor fetched: ", doctorProfile);
        console.log("(🔍 Debugging) doctorId: ", doctorProfile?.id);
      } catch (error) {
        console.log("(🔍 Debugging) FETCHING ERROR");
        console.log(error);
      }
    };
    fetchDoctor();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const {
          data: { reviews },
        } = await axios.get(`http://localhost:5000/review/doctor/${doctorId}`);
        // console.log("(🔍 Debugging) The reviews fetched: ", reviews); // Debugging
        setDoctorReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  }, [doctorId]);

    useEffect(() => {
      const fetchDoctorAppointments = async () => {
        const response = await axios.get(
          `http://localhost:5000/appointment/doctor`,
          config
        );
        setDoctorAppointments(response?.data?.appointments);
        console.log("$##!@ YOUR APPOINTMENTS:", response?.data?.appointments)
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
            <Typography>Name: {doctorData.name}</Typography>
            <Typography>Specialty: {doctorData.specialization}</Typography>
            <Typography>Account ID: {doctorId}</Typography>
            <Typography>Username: {doctorData.username}</Typography>
            <Typography />
            E-mail: {doctorData.email}
            <Typography />
            <Typography />
            Phone number: {doctorData.phoneNumber}
            <Typography />
            <Typography />
            Visit Fee: {doctorData.visitFee} EGP
            <Typography />
            <Typography />
            Working hours: from {doctorData.workingHoursStart} to {doctorData.workingHoursEnd}
            <Typography />
            <Typography />
            Location ID: {doctorData.locationId}
            <Typography />
            <Typography>Account created in {doctorData.createdAt}</Typography>
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
                          DoctorId={doctorId}
                          PatientId={Appointment.patientId}
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
