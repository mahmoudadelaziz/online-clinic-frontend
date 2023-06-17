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
import { Link } from "react-router-dom";
import { Review } from "../components/Review"; // STILL NEED TO PASS VARIABLES TO EACH REVIEW

// Placeholder for available timeslots
const AvailableSlots = ["slot1", "slot2", "slot3", "slot4", "slot5"];

export const DoctorPage = () => {
  const { name } = useParams();
  return (
    <Container sx={{ mt: 2 }}>
      <Card>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Avatar src={profile} sx={{ width: 150, height: 150 }} />
            <Stack flexBasis="2" sx={{ p: 2 }}>
              <Typography variant="h4" color="primary">
                Doctor's Name
              </Typography>
              <Typography variant="body2" color="grey">
                Doctor's Specialty
              </Typography>
              <Typography variant="body2" color="grey" my={1}>
                Location
              </Typography>
              <Typography variant="body1" color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ligula velit, iaculis semper sem quis, consectetur volutpat
                tellus. Aliquam et nulla efficitur, laoreet mauris id, tincidunt
                lectus. Cras sed eleifend orci. Nam ut est egestas, accumsan
                lorem ut, dignissim nisi. Fusce egestas scelerisque vulputate.
              </Typography>
              <Stack my={2}>
                <Rating value={4.5} precision={0.5} />
                <Typography variant="subtitle2" color="grey">
                  Overall rating from 23 visitors
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
            <Grid item xs>
              <Typography variant="h6" textAlign="center">
                Today
              </Typography>
              <Stack spacing={0.5}>
                {AvailableSlots.map((slot) => {
                  return <Button variant="outlined">{slot}</Button>;
                })}
              </Stack>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" textAlign="center">
                Tomorrow
              </Typography>
              <Stack spacing={0.5}>
                {AvailableSlots.map((slot) => {
                  return <Button variant="outlined">{slot}</Button>;
                })}
              </Stack>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" textAlign="center">
                After 2 days
              </Typography>
              <Stack spacing={0.5}>
                {AvailableSlots.map((slot) => {
                  return <Button variant="outlined">{slot}</Button>;
                })}
              </Stack>
            </Grid>
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
          <Review />
          <Review />
          <Review />
        </Stack>
      </Card>
    </Container>
  );
};
