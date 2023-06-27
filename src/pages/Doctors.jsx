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
  FormGroup,
  Alert,
} from "@mui/material";
import { DoctorInfo, SelectInput } from "../components";
import { cities, specializations } from "../constants";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "../utility/axios";

const PAGE_SIZE = 9;
export const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        setLoading(true);
        let queryStr = `?pageSize=${PAGE_SIZE}&page=${page}`;
        if (selectedCity) {
          queryStr += `&governorate=${selectedCity}`;
        }
        if (selectedSpec) {
          queryStr += `&spec=${selectedSpec}`;
        }
        if (search) {
          queryStr += `&search=${search}`;
        }
        const {
          data: { data, numberOfPages },
        } = await axios.get(`/user/doctor/info${queryStr}`);
        console.log(`/user/doctor/info${queryStr}`);
        setNumberOfPages(numberOfPages);
        setDoctors(data);
        setLoading(false);
        setIsSearch(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchDoctorsData();
  }, [page, selectedCity, selectedSpec, isSearch]);

  const handlePageChange = (e, value) => {
    e.preventDefault();
    setPage(value);
  };
  const handleSpecSelectChange = (e) => {
    setSelectedSpec(e.target.value);
  };
  const handleCitySelectChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearch(true);
  };
  return (
    <>
      <Container>
        {error ? (
          <Alert severity="error" sx={{ mt: 6 }}>
            Something went wrong, Please try again!
          </Alert>
        ) : (
          <>
            <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
              Doctors
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ mt: 4 }}
            >
              <SelectInput
                options={cities}
                selectedOption={selectedCity}
                handleOptionSelect={handleCitySelectChange}
                defaultValue="cairo"
                label="City"
              />
              <SelectInput
                options={specializations}
                selectedOption={selectedSpec}
                handleOptionSelect={handleSpecSelectChange}
                defaultValue="all"
                label="Specialization"
              />
              <form onSubmit={(e) => handleSearchSubmit(e)}>
                <FormGroup>
                  <TextField
                    label="Srearch"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                    variant="filled"
                  />
                </FormGroup>
              </form>
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
          </>
        )}
      </Container>
    </>
  );
};
