import {
  Stack,
  Typography,
  Button,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";

export const DoctorAppointments = ({
  AppointmentId,
  AppointmentDate,
  AppointmentType,
  DoctorId,
  PatientId,
}) => {
  const { authToken } = useAuth();

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
  };

  let appointmentDateISOString = AppointmentDate;
  let appointmentDateToFormat = new Date(appointmentDateISOString);
  let formattedAppointmentDate = appointmentDateToFormat.toUTCString();

  const isFutureAppointment = appointmentDateToFormat > new Date();

  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid item xs={4} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          {formattedAppointmentDate}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          {AppointmentType}
        </Typography>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          Patient ID: {PatientId}
        </Typography>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Stack spacing={1}>
          {isFutureAppointment && (
            <>
              <Button
                variant="outlined"
                onClick={() => {
                  // WRITE APPOINTMENT CANCELLATION FUNCTION HERE
                  axios.delete("http://localhost:5000/appointment", {
                    config,
                    data: {
                      id: AppointmentId
                    }
                  })
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