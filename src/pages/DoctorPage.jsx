import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import profile from "../assets/doctor.jpg";
import { DoctorInfo, SelectInput } from "../components";
import { Doctors } from "./Doctors";
import { Review } from "./Review"; // STILL NEED TO PASS VARIABLES TO EACH REVIEW
import DaySlots from "../components/TimeSlots";

// Placeholder for available timeslots
const AvailableSlots = ["slot1", "slot2", "slot3", "slot4", "slot5"];

export const DoctorPage = () => {
  const { name } = useParams();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={0} my={2} padding={8}>
          <Grid item xs={2}>
            <Avatar src={profile} sx={{ width: 200, height: 200 }} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h3" color="primary">
              Doctor's Name
            </Typography>
            <Typography variant="body2" color="grey">
              Doctor's Specialty
            </Typography>
            <Typography variant="body2" color="grey">
              Location
            </Typography>
            <Typography variant="body1" color="grey">
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
              <Link to={`api/reviews`}>Show all reviews</Link>
            </Stack>

            <Stack my={12}>
              <Typography variant="h4">Available Time Slots</Typography>
              <Grid padding={2} container spacing={20} alignItems="center">
                <Grid item xs>
                  <Typography variant="h6">Today</Typography>
                  <Stack spacing={0.5}>
                    {/* {AvailableSlots.map((slot) => {
                      return <Button variant="outlined">{slot}</Button>;
                    })} */}
                    <DaySlots />
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

            <Stack>
              <Typography variant="h4">Patients' Reviews</Typography>
            </Stack>

            {/* REVIEWS */}
            <Stack
              padding={2}
              spacing={3}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              {/* One Review */}
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
