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
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    username: "",
    email: "",
    phoneNumber: "",
    visitFee: "",
    workingHoursStart: "",
    workingHoursEnd: "",
    locationId: "",
  });

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
        setFormData({
          name: doctorProfile?.name,
          specialization: doctorProfile?.specialization,
          username: doctorProfile?.username,
          email: doctorProfile?.email,
          phoneNumber: doctorProfile?.phoneNumber,
          visitFee: doctorProfile?.visitFee,
          workingHoursStart: doctorProfile?.workingHoursStart,
          workingHoursEnd: doctorProfile?.workingHoursEnd,
          locationId: doctorProfile?.locationId,
        });
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({
      name: doctorData?.name,
      specialization: doctorData?.specialization,
      username: doctorData?.username,
      email: doctorData?.email,
      phoneNumber: doctorData?.phoneNumber,
      visitFee: doctorData?.visitFee,
      workingHoursStart: doctorData?.workingHoursStart,
      workingHoursEnd: doctorData?.workingHoursEnd,
      locationId: doctorData?.locationId,
    });
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(
        `http://localhost:5000/user/doctor/${doctorId}`,
        formData
      );
      setIsEditing(false);
      setDoctorData(formData);
    } catch (error) {
      console.log("(🔍 Debugging) SAVE ERROR");
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div align="center">
      <Card variant="outlined" sx={{ my: 5, mx: 20, p: 0.1, borderRadius: 10 }}>
        <CardContent>
          <Stack spacing={1.5} sx={{ width: "90%" }}>
            <Typography variant="h3">Your Profile</Typography>
            {!isEditing ? (
              <>
                <Typography>Name: {doctorData.name}</Typography>
                <Typography>
                  Specialty: {doctorData.specialization}
                </Typography>
                <Typography>Username: {doctorData.username}</Typography>
                <Typography>Email: {doctorData.email}</Typography>
                <Typography>
                  Phone number: {doctorData.phoneNumber}
                </Typography>
                <Typography>
                  Visit Fee: {doctorData.visitFee} EGP
                </Typography>
                <Typography>
                  Working hours: from {doctorData.workingHoursStart} to{" "}
                  {doctorData.workingHoursEnd}
                </Typography>
                <Typography>
                  Location ID: {doctorData.locationId}
                </Typography>
              </>
            ) : (
              <>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Specialization"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Phone number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Visit Fee"
                  name="visitFee"
                  value={formData.visitFee}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Working hours start"
                  name="workingHoursStart"
                  value={formData.workingHoursStart}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Working hours end"
                  name="workingHoursEnd"
                  value={formData.workingHoursEnd}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Location ID"
                  name="locationId"
                  value={formData.locationId}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
              </>
            )}
            <Typography />
            <Typography>Account ID: {doctorId}</Typography>
            <Typography>Account created in {doctorData.createdAt}</Typography>
            {!isEditing ? (
              <Button onClick={handleEditClick}>Edit</Button>
            ) : (
              <>
                <Button onClick={handleSaveClick}>Save</Button>
                <Button onClick={handleCancelClick}>Cancel</Button>
              </>
            )}
            {/* HISTORY STUFF */}
            <Typography variant="h5">Your Appointments</Typography>
            <Stack spacing={0.5}>
              {doctorAppointments.map((Appointment) => {
                return (
                  <Grid container key={Appointment.id}>
                    <Grid item xs>
                      <Card variant="outlined">
                        <DoctorAppointments
                          AppointmentDate={Appointment.at}
                          AppointmentType={Appointment.type}
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