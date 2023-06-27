import { useParams } from "react-router-dom";
import profile from "../assets/doctor.jpg";
import {
  Card,
  Divider,
  CardContent,
  Avatar,
  Grid,
  Stack,
  Typography,
  Rating,
  Button,
  Container,
} from "@mui/material";
import { Review } from "../components/Review"; // STILL NEED TO PASS VARIABLES TO EACH REVIEW
import { useEffect, useState } from "react";
import axios from "../utility/axios";
import { AppointmentBooking } from "../components/AppointmentBooking";

export const DoctorPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});
  const [reviews, setReviews] = useState([]);
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const {
          data: { doctor },
        } = await axios.get(`/user/doctor/id/${id}`);
        setDoctor(doctor);
      } catch (error) {
        console.log("FETCHING ERROR");
        console.log(error);
      }
    };
    const fetchReviews = async () => {
      try {
        const {
          data: { reviews },
        } = await axios.get(`/review/${id}`);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctor();
    fetchReviews();
  }, []);

  console.log("(🔍 Debugging) The doctor object fetched: ", doctor)
  return (
    <Card>
      <CardContent>
        <Grid container spacing={0} my={2} padding={8}>
          <Grid item xs={2}>
            <Avatar src={profile} sx={{ width: 200, height: 200 }} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h3" color="primary">
              {doctor.name}
            </Typography>
            <Typography variant="body2" fontSize={20}>
              Specialist in {doctor.specialization}
            </Typography>
            <Typography variant="body2" fontSize={20}>
              Location ID: {doctor.locationId}
            </Typography>
            <Typography variant="body1" fontSize={18}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ligula velit, iaculis semper sem quis, consectetur volutpat
              tellus. Aliquam et nulla efficitur, laoreet mauris id, tincidunt
              lectus. Cras sed eleifend orci. Nam ut est egestas, accumsan lorem
              ut, dignissim nisi. Fusce egestas scelerisque vulputate.
            </Typography>
            <Stack my={2}>
              <Rating value={4.5} precision={0.5} />
              <Typography vatiant="subtitle2">
                Overall rating from 23 visitors
              </Typography>
            </Stack>

            <Stack sx={{ my: 5 }}>
              <Typography variant="h4" sx={{ my: 2 }}>
                Book an appointment
              </Typography>
              <AppointmentBooking />
            </Stack>

            <Stack>
              <Typography variant="h4">Patients' Reviews</Typography>
            </Stack>

            {/* REVIEWS */}
            <Stack
              padding={2}
              spacing={3}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              <Review />
              <Review />
              <Review />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
