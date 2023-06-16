// Patient's profile
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
import { borders } from '@mui/system';

export const Profile = () => {
  return (
    <div align="center">
  <Card variant="outlined" sx={{ my : 5, mx : 50, p : 0.1, borderRadius: 10 }}>
    <CardContent>

      <Stack spacing={1.5}>
      <Typography variant="h3">
        Your Profile
      </Typography>
      <Typography sx={{ border: 1 }}>
        Full Name
      </Typography>
      <Typography sx={{ border: 1 }}>
        Email
      </Typography>
      <Typography sx={{ border: 1 }}>
        Phone Number
      </Typography>

      <Typography sx={{ border: 1 }}>
        Account Created in (DATE)
      </Typography>
      <Typography sx={{ border: 1 }}>
        Your Appointments
      </Typography>
      <Typography sx={{ border: 1 }}>
        Your Reviews
      </Typography>
      </Stack>
    </CardContent>
  </Card>
  </div>)
};
