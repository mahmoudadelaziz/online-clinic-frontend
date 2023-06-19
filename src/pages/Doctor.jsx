import { Review } from "../components/Review";
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

dayjs().format().hour();
// Placeholder for available timeslots
const times = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

export const Doctor = () => {
  const { name } = useParams();
  console.log(name)
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
            <Grid item xs>
              <Typography variant="h6" textAlign="center">
                Today
              </Typography>
              <Stack spacing={0.5} sx={{ overflow: "scroll", height: 200 }}>
                {times.map((slot) => {
                  return <Button variant="outlined">{slot}</Button>;
                })}
              </Stack>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" textAlign="center">
                Tomorrow
              </Typography>
              <Stack spacing={0.5} sx={{ overflow: "scroll", height: 200 }}>
                {times.map((slot) => {
                  return <Button variant="outlined">{slot}</Button>;
                })}
              </Stack>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" textAlign="center">
                After 2 days
              </Typography>
              <Stack spacing={0.5} sx={{ overflow: "scroll", height: 200 }}>
                {times.map((slot) => {
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
