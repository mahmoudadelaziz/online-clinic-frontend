import {
  Container,
  Grid,
  InputAdornment,
  Pagination,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Box,
  PaginationItem,
} from "@mui/material";
import { DoctorInfo, SelectInput } from "../components";
import { cities, specializations } from "../constants";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "../utility/axios";
import { Link } from "react-router-dom";

const PAGE_SIZE = 10;
export const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        setLoading(true);
        const {
          data: { data, numberOfPages },
        } = await axios.get(
          `/user/doctor/info?pageSize=${PAGE_SIZE}&page=${page}`
        );
        setNumberOfPages(numberOfPages);
        setDoctors(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchDoctorsData();
  }, [page]);

  const handlePageChange = (e, value) => {
    e.preventDefault();
    setPage(value);
  };
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
          Doctors
        </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
          <SelectInput options={cities} defaultValue="cairo" label="City" />
          <SelectInput
            options={specializations}
            defaultValue="all"
            label="Specialization"
          />
          <TextField
            label="Srearch"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="filled"
          />
        </Stack>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {doctors.map((doctor) => (
              <Grid item xs={12} md={6} lg={4} key={doctor.id}>
                <DoctorInfo doctor={doctor} />
              </Grid>
            ))}
          </Grid>
        )}
        <Stack direction="row" justifyContent="center" sx={{ my: 4 }}>
          <Pagination
            onChange={(e, value) => handlePageChange(e, value)}
            count={numberOfPages}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
          />
        </Stack>
      </Container>
    </>
  );
};
