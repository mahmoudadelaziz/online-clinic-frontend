// Patient's profile
import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {PatientReviews} from "./PatientReviews"
import { PatientAppointments } from "./PatientAppointments";

const MyAppointments = ["Appointment 1", "Appointment 2", "Appointment 3"];
const MyReviews = ["Review 1", "Review 2", "Review 3"];

export const Profile = () => {
  return (
    <div align="center">
      <Card variant="outlined" sx={{ my: 5, mx: 20, p: 0.1, borderRadius: 10 }}>
        <CardContent>
          <Stack spacing={1.5} sx={{width: "90%"}}>
            <Typography variant="h3">Your Profile</Typography>
            <Typography sx={{  borderColor: 'red', border: 1 }}>(Full Name)</Typography>
            <Typography sx={{ border: 1 }}>(Email)</Typography>
            <Typography sx={{ border: 1 }}>(Phone Number)</Typography>
            <Typography sx={{ border: 1 }}>
              Account Created in (DATE)
            </Typography>

            {/* HISTORY STUFF */}
            <Typography variant="h5">
              Your Appointments
            </Typography>
            <Stack spacing={0.5}>
              {MyAppointments.map((Appointment) => {
                return (
                  <Grid container>
                    <Grid item xs>
                      <Card variant="outlined">
                        <PatientAppointments />
                      </Card>
                    </Grid>
                  </Grid>
                );
              })}
            </Stack>

            <Typography variant="h5">
              Your Reviews
            </Typography>
            <Stack spacing={0.5}>
              {MyReviews.map((Rev) => {
                return <Card variant="outlined">
                  <PatientReviews />
                  </Card>;
              })}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};
