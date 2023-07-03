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
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Review } from "../components/Review";
import { useAuth } from "../AuthContext";
import { DoctorAppointments } from "../components/DoctorAppointments";
import profile from "../assets/doctor.jpg";

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
        // console.log("(🔍 Debugging) The doctor fetched: ", doctorProfile);
        // console.log("(🔍 Debugging) doctorId: ", doctorProfile?.id);
      } catch (error) {
        console.log("(🔍 Debugging) GET request error:", error);
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
      // console.log("$##!@ YOUR APPOINTMENTS:", response?.data?.appointments);
    };
    fetchDoctorAppointments();
  }, []);

  // console.log("(🔍 Debugging) doctorData received:", doctorData);

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
      console.log("(🔍 Debugging) PUT request error:", error);
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
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography variant="h3" sx={{ mb: 4 }}>Your Profile</Typography>
  <Avatar src={profile} sx={{ width: 200, height: 200, mb: 4 }} />
  {!isEditing ? (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="subtitle1">
        Name: <strong>{doctorData.name}</strong>
      </Typography>
      <Typography variant="subtitle1">
        Specialty: <strong>{doctorData.specialization}</strong>
      </Typography>
      <Typography variant="subtitle1">
        Username: <strong>{doctorData.username}</strong>
      </Typography>
      <Typography variant="subtitle1">
        Email: <strong>{doctorData.email}</strong>
      </Typography>
      <Typography variant="subtitle1">
        Phone number: <strong>{doctorData.phoneNumber}</strong>
      </Typography>
      <Typography variant="subtitle1">
        Visit Fee: <strong>{doctorData.visitFee} EGP</strong>
      </Typography>
      <Typography variant="subtitle1">
        Working hours: <strong>from {doctorData.workingHoursStart} to {doctorData.workingHoursEnd}</strong>
      </Typography>
      <Typography variant="subtitle1">
        Location ID: <strong>{doctorData.locationId}</strong>
      </Typography>
    </Box>
  ) : (
    <Box sx={{ width: '100%' }}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Specialization"
        name="specialization"
        value={formData.specialization}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Phone number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Visit Fee"
        name="visitFee"
        value={formData.visitFee}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Working hours start"
        name="workingHoursStart"
        value={formData.workingHoursStart}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Working hours end"
        name="workingHoursEnd"
        value={formData.workingHoursEnd}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
      <TextField
        label="Location ID"
        name="locationId"
        value={formData.locationId}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
    </Box>
  )}
</Box>
            <Typography />
            <Typography>Account ID: {doctorId}</Typography>
            <Typography>Account created in {doctorData.createdAt}</Typography>
            {!isEditing ? (
              <Button variant="outlined" onClick={handleEditClick}>Edit</Button>
            ) : (
              <>
                <Button variant="outlined" onClick={handleSaveClick}>Save</Button>
                <Button variant="outlined" onClick={handleCancelClick}>Cancel</Button>
              </>
            )}
            {/* HISTORY STUFF */}
            <Typography variant="h5">Your Appointments</Typography>
            <Stack spacing={0.5}>
              {doctorAppointments.length != 0 ? (
                doctorAppointments.map((Appointment) => {
                  return (
                    <Grid container key={Appointment.id}>
                      <Grid item xs>
                        <Card variant="outlined">
                          <DoctorAppointments
                            AppointmentId={Appointment.id}
                            AppointmentDate={Appointment.at}
                            AppointmentType={Appointment.type}
                            DoctorId={doctorId}
                            PatientId={Appointment.patientId}
                          />
                        </Card>
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <Typography variant="h6" sx={{ color: "red" }}>
                  {" "}
                  You have no Appointments!
                </Typography>
              )}
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
