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
import * as dayjs from "dayjs";
import { generateDates } from "../utility/dates";

console.log();

export const Doctor = () => {
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
        console.log("FETCHING ERROR")
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
  return (
    <Container sx={{ mt: 2 }}>
      <Card>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Avatar src={profile} sx={{ width: 150, height: 150 }} />
            <Stack flexBasis="2" sx={{ p: 2 }}>
              <Typography
                variant="h4"
                color="primary"
                sx={{ textTransform: "capitalize" }}
              >
                {doctor.name}
              </Typography>
              <Typography variant="body2" color="grey">
                {doctor.specialization} specializes in{" "}
                {doctor.subSpecialization}
              </Typography>
              <Typography variant="body2" color="grey" my={1}>
                Location
              </Typography>
              <Typography variant="body1" color="grey">
                {doctor.about}
              </Typography>
              <Stack my={2}>
                <Rating value={4.5} precision={0.5} />
                <Typography variant="subtitle2" color="grey">
                  Overall rating from {reviews.length} reviews.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ width: "100%", my: 2 }}>
        <CardContent>
          <Typography variant="h4" color="primary" textAlign="center" my={2}>
            Available Time Slots
          </Typography>
          <Grid
            padding={2}
            container
            spacing={20}
            alignItems="center"
            justifyContent="center"
          >
            {generateDates(10, 20, 30, 3).map((date) => {
              return (
                <Grid item xs>
                  <Typography variant="h6" textAlign="center">
                    {date.day}
                  </Typography>
                  <Stack spacing={0.5} sx={{ overflow: "scroll", height: 200 }}>
                    {date.times.map((time) => {
                      return (
                        <Button variant="outlined">
                          {dayjs(time).format("h:mm A")}
                        </Button>
                      );
                    })}
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ p: 2 }}>
        <Stack>
          <Typography variant="h4" color="primary" textAlign="center" my={2}>
            Patients' Reviews
          </Typography>
        </Stack>

        {/* REVIEWS */}
        <Stack
          padding={2}
          spacing={3}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          {/* One Review */}
          {reviews.map((review) => (
            <Review
              patientName={review.reviewWriter.name}
              rating={review.rating}
              key={review.id}
              text={review.review}
            />
          ))}
        </Stack>
      </Card>
    </Container>
  );
};