import { Stack, Typography, Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export const PatientAppointments = ({ AppointmentDate, DoctorId }) => {
  const [doctor, setDoctor] = useState({});
  const [location, setLocation] = useState({});
  const [showReviewButton, setShowReviewButton] = useState(false);

  let appointmentDateISOString = AppointmentDate;
  let appointmentDateToFormat = new Date(appointmentDateISOString);
  let formattedAppointmentDate = appointmentDateToFormat.toUTCString();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const {
          data: { doctor },
        } = await axios.get(`http://localhost:5000/user/doctor/id/${DoctorId}`);
        setDoctor(doctor);
        // console.log(doctor);
      } catch (error) {
        console.log("(🔍 Debugging) FETCHING ERROR");
        console.log(error.message);
      }
    };

    if (doctor) {
      fetchDoctor();
    }
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const {
          data: { location },
        } = await axios.get(
          `http://localhost:5000/location/${doctor.locationId}`
        );
        setLocation(location);
      } catch (error) {
        console.log(
          "(🔍🔍🔍 Debugging) Doctor's locationId: ",
          doctor.locationId
        );
        console.log(error.message);
      }
    };
    if (doctor.locationId) {
      fetchLocation();
    }
  }, [doctor.locationId]);

  useEffect(() => {
    const now = new Date();
    const appointmentDate = new Date(appointmentDateISOString);

    if (now.getTime() > appointmentDate.getTime()) {
      // appointment date is in the past
      setShowReviewButton(true);
    }
  }, [appointmentDateISOString]);

  return (
    <Grid container>
      <Grid item xs={6} padding={3} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          In {formattedAppointmentDate}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          With Dr. {doctor.name}, specialist in {doctor.specialization}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          Location: {location.id} {location.street}, {location.governorate}
        </Typography>
      </Grid>

      <Grid item xs={2} padding={3} textAlign="center">
        {/* Filler item */}
      </Grid>

      <Grid item xs={4} padding={3} textAlign="center">
        <Stack>
          {showReviewButton ? (
            <Button
              variant="outlined"
              onClick={() => {
                // WRITE POST A REVIEW FUNCTION HERE
                console.log("Post a review");
              }}
            >
              Post a review
            </Button>
          ) : (
            <>
              <Typography variant="body1" color="grey">
                (Status)
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  // WRITE APPOINTMENT RESCHEDUELING FUNCTION HERE
                  console.log("Appointment Rescheduled");
                }}
              >
                Reschedule
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  // WRITE APPOINTMENT CANCELLATION FUNCTION HERE
                  console.log("Appointment Cancelled");
                }}
              >
                Cancel
              </Button>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};