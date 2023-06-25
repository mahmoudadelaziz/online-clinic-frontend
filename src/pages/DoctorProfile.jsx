// Patient's profile
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
import profile from "../assets/doctor.jpg";
import { PatientAppointments } from "../components/PatientAppointments";
import { Review } from "../components/Review";

const MyAppointments = ["Appointment 1", "Appointment 2", "Appointment 3"];
const MyReviews = ["Review 1", "Review 2", "Review 3"];

const AvailableSlots = ["slot1", "slot2", "slot3", "slot4", "slot5"];
const id = 6;

export const DoctorProfile = () => {
  const [editState, setEditState] = useState(false);
  const [doctorData, setDoctorData] = useState({});

  const fetchDoctorData = async (id) => {
    const info = await axios.get(`http://localhost:5000/user/doctor/id/${id}`); // use env var for backend port
    const doctorInfo = info.data.doctor;
    setDoctorData(doctorInfo);
    console.log(doctorData);
  };

  useEffect(() => {
    fetchDoctorData(id);
  }, []);

  const handleEditData = () => {
    setEditState(!editState);
    console.log("Edit profile page");
  };

  return (
    <div align="center">
      <Card variant="outlined" sx={{ my: 5, mx: 20, p: 0.1, borderRadius: 10 }}>
        <CardContent>
          <Stack spacing={1.5} sx={{ width: "90%" }}>
            <Typography variant="h3">Your Profile</Typography>
            <Grid item xs={2}>
              <Avatar src={profile} sx={{ width: 150, height: 150 }} />
            </Grid>
            <TextField
              // id="outlined-read-only-input"
              label="Full Name"
              defaultValue={doctorData.name}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Username"
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
              defaultValue=" "
              value={doctorData.phoneNumber}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="About"
              defaultValue=" "
              value={doctorData.about}
              multiline
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Specialization"
              defaultValue=" "
              value={doctorData.specialization}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Price"
              defaultValue=" "
              value={doctorData.price}
              InputProps={{
                readOnly: !editState,
              }}
            />
            <TextField
              // id="outlined-read-only-input"
              label="Location"
              defaultValue=" "
              value={doctorData.locationId}
              InputProps={{
                readOnly: !editState,
              }}
            />{" "}
            <Typography>Account Created in {doctorData.createdAt}</Typography>
            <Button // Changes read only text fields to editable
              variant="contained"
              onClick={handleEditData}
            >
              {editState ? "Save Changes" : "Edit Profile"}
            </Button>
            <Stack my={12}>
              <Typography variant="h4">Available Time Slots</Typography>
              <Grid padding={2} container spacing={20} alignItems="center">
                <Grid item xs>
                  <Typography variant="h6">Today</Typography>
                  <Stack spacing={0.5}>
                    {AvailableSlots.map((slot) => {
                      return <Button variant="outlined">{slot}</Button>;
                    })}
                  </Stack>
                </Grid>

                <Grid item xs>
                  <Typography variant="h6">Tomorrow</Typography>
                  <Stack spacing={0.5}>
                    {AvailableSlots.map((slot) => {
                      return <Button variant="outlined">{slot}</Button>;
                    })}
                  </Stack>
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">After 2 days</Typography>
                  <Stack spacing={0.5}>
                    {AvailableSlots.map((slot) => {
                      return <Button variant="outlined">{slot}</Button>;
                    })}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
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
            </Stack>
            <Typography variant="h5">Your Reviews</Typography>
            <Stack spacing={0.5}>
              {MyReviews.map((Rev) => {
                return (
                  <Card variant="outlined">
                    <Review />
                  </Card>
                );
              })}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
