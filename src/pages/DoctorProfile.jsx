import { DoctorInfo, SelectInput } from "../components";
import { Doctors } from "./Doctors";
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
} from "@mui/material";
import { Link } from "react-router-dom";

export const DoctorProfile = ({ doctor }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={0} my={2}>
          <Grid item xs={2}>
            <Avatar src={profile} sx={{ width: 200, height: 200 }} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h3" color="primary">
              Doctor's Name
            </Typography>
            <Typography variant="subtitle1" color="grey">
              Doctor's Specialty
            </Typography>
            <Typography variant="subtitle2" color="grey">
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
