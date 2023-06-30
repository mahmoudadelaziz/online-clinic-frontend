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

const id = 6; // Placeholder value (To be made dynamic and user-dependent)

export const Profile = () => {
  const [editState, setEditState] = useState(false);
  const [doctorData, setDoctorData] = useState({});

  const fetchDoctorData = async (id) => {
    const info = await axios.get(`http://localhost:5000/user/doctor/id/${id}`); // use env var for backend port
    const doctorInfo = info.data.doctor;
    console.log(doctorInfo); // Debugging
    setDoctorData(doctorInfo);
  };

  useEffect(() => {
    fetchDoctorData(id);
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
              value={doctorData.name}
              defaultValue={doctorData.name}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Username"
              InputLabelProps={{ shrink: true }} 
              value={doctorData.name}
              defaultValue={doctorData.username}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Email"
              defaultValue=" "
              value={doctorData.email}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Phone Number"
              InputLabelProps={{ shrink: true }} 
              value={doctorData.phoneNumber}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="About"
              InputLabelProps={{ shrink: true }} 
              defaultValue="Tell our visitors more about youreslf."
              value={doctorData.about}
              multiline
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Specialization"
              InputLabelProps={{ shrink: true }} 
              defaultValue=" "
              value={doctorData.specialization}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Price"
              InputLabelProps={{ shrink: true }} 
              defaultValue=" "
              value={doctorData.price}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Location ID"
              InputLabelProps={{ shrink: true }} 
              defaultValue=" "
              value={doctorData.locationId}
              InputProps={{
                readOnly: !editState,
              }}
            />{" "}
            <Typography>Account Created in {doctorData.createdAt}</Typography>
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