// This is the Doctor's Page shown when a visitor clicks on the doctor's card
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import profile from "../assets/doctor.jpg";
import { Review } from "../components/Review"; // STILL NEED TO PASS VARIABLES TO EACH REVIEW
import AppointmentBooking from "../components/AppointmentBooking";

export const DoctorPage = () => {
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
            <Typography variant="body2" fontSize={20}>
              Doctor's Specialty
            </Typography>
            <Typography variant="body2" fontSize={20}>
              Location
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
              <Link to={`api/reviews`}>Show all reviews</Link>
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
