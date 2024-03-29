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
} from "@mui/material";
import { Review } from "../components/Review";
import { useEffect, useState } from "react";
import axios from "../utility/axios";
import { AppointmentBooking } from "../components/AppointmentBooking";

export const DoctorPage = () => {
  const { id } = useParams();
  localStorage.setItem("doctorId", id);
  const [doctor, setDoctor] = useState({});
  const [location, setLocation] = useState({});
  const [reviews, setReviews] = useState([]);

  //   bookedSlots: from http://localhost:5000/appointment/doctor/${doctorId}
  // const bookedSlots = [];
  // appArr.forEach((obj) => {
  //     bookedSlots.push(obj["at"]);
  //   });

  // function getAllBookedTimeSlots() {
  //   let allBookedAppointments = [];
  //   axios.get(`http://localhost:5000/appointment/doctor/${306}`).then((res) => {
  //     res.data.appointments.forEach((appointment) => {
  //       // console.log(appointment)
  //       allBookedAppointments.push(appointment.at);
  //     });
  //     localStorage.setItem("allBookedAppointments", allBookedAppointments);
  //   });
  // }

  useEffect(() => {
    function getAllBookedTimeSlots() {
      let allBookedAppointments = [];
      axios
        .get(`http://localhost:5000/appointment/doctor/${id}`)
        .then((res) => {
          res.data.appointments.forEach((appointment) => {
            // console.log(appointment)
            allBookedAppointments.push(appointment.at);
          });
          localStorage.setItem("allBookedAppointments", allBookedAppointments);
        });
    }
    getAllBookedTimeSlots();
  }, []);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const {
          data: { doctor },
        } = await axios.get(`/user/doctor/id/${id}`);
        setDoctor(doctor);
        console.log("(🔍 Debugging) The doctor fetched: ", doctor); // Debugging
        console.log(
          "(🔍 Debugging) The doctor's locationId: ",
          doctor.locationId
        ); // Debugging
      } catch (error) {
        console.log("(🔍 Debugging) FETCHING ERROR");
        console.log(error);
      }
    };
    const fetchReviews = async () => {
      try {
        const {
          data: { reviews },
        } = await axios.get(`http://localhost:5000/review/doctor/${id}`);
        // console.log("(🔍 Debugging) The reviews fetched: ", reviews); // Debugging
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    if (doctor) {
      fetchDoctor();
    }
    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const {
          data: { location },
        } = await axios.get(`/location/${doctor.locationId}`);
        setLocation(location);
      } catch (error) {
        console.log(
          "(🔍🔍🔍 Debugging) Doctor's locationId: ",
          doctor.locationId
        );
        console.log(error.message);
      }
    };
    if (doctor.locationId) {
      fetchLocation();
    }
  }, [doctor.locationId]);

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
              Visit Fee: {doctor.visitFee} EGP
            </Typography>
            <Typography variant="body2" fontSize={20}>
              {location.id} {location.street}, {location.governorate}
            </Typography>
            {!doctor.about ? (
              <Typography variant="body1" fontSize={18} color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ligula velit, iaculis semper sem quis, consectetur volutpat
                tellus. Aliquam et nulla efficitur, laoreet mauris id, tincidunt
                lectus. Cras sed eleifend orci. Nam ut est egestas, accumsan
                lorem ut, dignissim nisi. Fusce egestas scelerisque vulputate.
              </Typography>
            ) : (
              <Typography variant="body1" fontSize={18} color="grey">
                {" "}
                {doctor.about}
              </Typography>
            )}


            <Stack my={2}>
              <Rating
                value={reviews.reduce((acc, val) => {
                  return acc + val.rating / reviews.length;
                }, 0)}
                precision={0.1}
              />
              <Typography vatiant="subtitle2">
                Overall rating from {reviews.length} visitors
              </Typography>
              <Typography sx={{my: 1}} variant="body2" fontSize={20}>
              Contact information
            </Typography>
              <Typography variant="subtitle">
              Clinic's phone number: {doctor.phoneNumber}
            </Typography>
              <Typography variant="subtitle">
              E-mail: {doctor.email}
            </Typography>
            </Stack>
              
            <Stack sx={{ my: 5 }}>
              <Typography variant="h4" sx={{ my: 2 }}>
                Book an appointment
              </Typography>
              <AppointmentBooking
                // ADD THE BOOKED SLOTS HERE
                doctorId={id}
                workingHoursStart={parseInt(doctor.workingHoursStart)}
                workingHoursEnd={parseInt(doctor.workingHoursEnd)}
              />
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
              {reviews.map((REVIEW) => (
                <Stack item key={REVIEW.id}>
                  <Review REVIEW={REVIEW} />
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
