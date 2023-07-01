import {
  Stack,
  Typography,
  Button,
  Grid,
  Modal,
  TextField,
  Rating,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";

export const DoctorAppointments = ({
  AppointmentDate,
  DoctorId,
  PatientId,
}) => {
  const { authToken } = useAuth();

  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };

  let appointmentDateISOString = AppointmentDate;
  let appointmentDateToFormat = new Date(appointmentDateISOString);
  let formattedAppointmentDate = appointmentDateToFormat.toUTCString();

  return (
    <Grid container>
      <Grid item xs={6} padding={3} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          In {formattedAppointmentDate}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          With (PatientID){" "}
        </Typography>
      </Grid>
      <Grid item xs={2} padding={3} textAlign="center">
        {/* Filler item */}
      </Grid>

      <Grid item xs={4} padding={3} textAlign="center">
        <Stack>
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
        </Stack>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: "400px",
          borderRadius: "4px",
        }}
      ></Grid>
    </Grid>
  );
};
