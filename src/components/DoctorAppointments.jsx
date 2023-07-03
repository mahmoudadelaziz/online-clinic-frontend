import { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Button,
  Grid,
  Modal,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useAuth } from "../AuthContext";

export const DoctorAppointments = ({
  AppointmentId,
  AppointmentDate,
  AppointmentType,
  DoctorId,
  PatientId,
}) => {
  const [patientInfo, setPatientInfo] = useState({})
  const [patientDOB, setPatientDOB] = useState("")
  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleCancelModalOpen = () => {
    setShowCancelModal(true);
  };

  const handleCancelModalClose = () => {
    setShowCancelModal(false);
  };

  const handleAppointmentCancellation = async () => {
    // The user clicked "yes" to confirm appointment cancellation
    try {
      await axios.delete("http://localhost:5000/appointment", {
        ...config,
        data: {
          id: AppointmentId
        },
      })
      setShowCancelModal(false); // Close the modal
      alert("Appointment cancelled successfully!");
    } catch (error) {
      console.log("(🔍 Debugging) DELETING ERROR");
      console.log(error.message);
    }
  };

  const { authToken } = useAuth();

  useEffect(() => {
    const fetchPatientInfo = async () => {
      const response = await axios.get(
        `http://localhost:5000/user/patient/${PatientId}`
      );
      setPatientInfo(response?.data?.patient);
      console.log("$##!@ Patient Info:", response?.data?.patient)
      const DOB = new Date(response?.data?.patient.dateOfBirth)
      let result = String(DOB.getDate() + "/" + (DOB.getMonth()+1) + "/" + DOB.getFullYear())
      setPatientDOB(DOB.getDate() + "/" + (DOB.getMonth()+1) + "/" + DOB.getFullYear())
      console.log(patientDOB)
    };
    fetchPatientInfo();
  }, []);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
  };

  let appointmentDateISOString = AppointmentDate;
  let appointmentDateToFormat = new Date(appointmentDateISOString);
  let formattedAppointmentDate = appointmentDateToFormat.toISOString(); // To be shifted +3 hours

  function splitDateAndTime(isoString) {
    // ## TEMPORARY SOLUTION TO THE DB SYNCHRONIZATION PROBLEM
    const options = {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
    }; // For configuring the date formatting
    const date = new Date(isoString);
    const shiftedDate = new Date(date.getTime());
    return shiftedDate.toLocaleDateString("en-US", options);
  }

  const isFutureAppointment = appointmentDateToFormat > new Date();

  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid item xs={4} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          {splitDateAndTime(formattedAppointmentDate)}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          {AppointmentType}
        </Typography>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          Patient name: {patientInfo.name}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          Gender: {patientInfo.gender}
        </Typography>
        <Typography variant="subtitle1" color="gray">
          Date of birth: {patientDOB}
        </Typography>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Stack spacing={1}>
          {isFutureAppointment && (
            <>
              <Button
                variant="outlined"
                onClick={handleCancelModalOpen}
              >
                Cancel
              </Button>
              <Modal
                open={showCancelModal}
                onClose={handleCancelModalClose}
                aria-labelledby="cancel-modal-title"
                aria-describedby="cancel-modal-description"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: "4px",
                    width: "400px",
                  }}
                >
                  <Typography
                    variant="h6"
                    id="review-modal-title"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    Are you sure you want to cancel this appointment?
                  </Typography>

                  <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={handleAppointmentCancellation}
                      >
                        Yes, cancel appointment
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={handleCancelModalClose}
                      >
                        No, keep appointment
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Modal>
            </>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};