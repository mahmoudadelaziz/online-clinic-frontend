import {
  Card,
  CardContent,
  Avatar,
  Stack,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import profile from "../assets/doctor.jpg";
import { Link } from "react-router-dom";

export const DoctorInfo = ({ doctor }) => {
  return (
    <Card>
      <CardContent>
        <Stack direction="column" alignItems="center">
          <Avatar src={profile} sx={{ width: 80, height: 80 }} />
          <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
            {doctor.name}
          </Typography>
          <Typography variant="subtitle1" color="grey">
            {doctor.specialization}
          </Typography>
          <Stack direction="row" sx={{ mt: 1 }} alignItems="center">
            <Rating value={doctor.avgRating} precision={0.5} sx={{ mr: 1 }} />
            <Typography variant="body2" color="grey">
              ({doctor.numberOfReviews}-Reviews)
            </Typography>
          </Stack>
          <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
            Next Available
          </Typography>
          <Typography variant="caption" color="grey">
            10:00 AM - 11:00 AM
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            <Link to={`/doctor/${doctor.name}`}>Book Now</Link>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
