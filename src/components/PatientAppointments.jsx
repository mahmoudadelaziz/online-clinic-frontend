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

export const PatientAppointments = ({
  AppointmentDate,
  DoctorId,
  PatientId,
}) => {
  const [doctor, setDoctor] = useState({});
  const [location, setLocation] = useState({});
  const [showReviewButton, setShowReviewButton] = useState(false);
  const [disableReviewButton, setDisableReviewButton] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const { authToken } = useAuth();

  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };

  function splitDateAndTime(isoString) {
    // ## TEMPORARY SOLUTION TO THE DB SYNCHRONIZATION PROBLEM
    const options = {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit"
    }; // For configuring the date formatting
    const date = new Date(isoString);
    const shiftedDate = new Date(date.getTime());
    return shiftedDate.toLocaleDateString("en-US", options);
  }

  let appointmentDateISOString = AppointmentDate;
  appointmentDateISOString.toLocaleString('en-US', { timeZone: 'Africa/Cairo' })
  console.log("RECEIVED:", AppointmentDate)
  // let appointmentDateToFormat = new Date(appointmentDateISOString);
  // let formattedAppointmentDate = appointmentDateToFormat.toUTCString();

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
    let appointmentDate = new Date(appointmentDateISOString);

    if (now.getTime() > appointmentDate.getTime()) {
      // appointment date is in the past
      setShowReviewButton(true);
    }
  }, [appointmentDateISOString]);

  const handleReviewModalOpen = () => {
    setShowReviewModal(true);
  };

  const handleReviewModalClose = () => {
    setShowReviewModal(false);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleReviewSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:5000/review",
        {
          doctorId: DoctorId,
          patientId: PatientId,
          review: reviewText,
          rating: rating,
        },
        config
      );
      console.log("SUCCESS! Review has been posted!");
      setShowReviewModal(false);
      setDisableReviewButton(true) // Disable the review button because already posted.
      localStorage.setItem("disableReviewButton", true)
      console.log("(🔍 Debugging):", reviewText);
      console.log("(🔍 Debugging):", rating);
    } catch (error) {
      console.log("(🔍 Debugging) FETCHING ERROR");
      console.log(error.message);
    }
  };

  return (
    <Grid container>
      <Grid item xs={6} padding={3} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          In {splitDateAndTime(appointmentDateISOString)}
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
            <Button variant="outlined" onClick={handleReviewModalOpen} disabled={localStorage.getItem("disableReviewButton")}>
              Post a review
            </Button>
          ) : (
            <>
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

      <Modal
        open={showReviewModal}
        onClose={handleReviewModalClose}
        aria-labelledby="review-modal-title"
        aria-describedby="review-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
        >
          <Typography variant="h6" id="review-modal-title" gutterBottom>
            Write a review
          </Typography>
          <Rating
            name="rating"
            value={rating}
            precision={0.5}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            multiline
            rows={4}
            label="Your Review"
            variant="outlined"
            value={reviewText}
            onChange={handleReviewTextChange}
            sx={{ width: "100%", mb: 2 }}
          />
          <Button variant="contained" onClick={handleReviewSubmit}>
            Submit
          </Button>
        </Grid>
      </Modal>
    </Grid>
  );
};
