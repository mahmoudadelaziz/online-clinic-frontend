import {
  Container,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DoctorInfo, SelectInput } from "../components";
import { cities, specializations } from "../constants";
import { Search } from "@mui/icons-material";
export const Doctors = () => {
  const doctors = ["a", "b", "c", "d", "e", "f", "g"];
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
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {doctors.map((doctor) => (
            <Grid item xs={12} md={6} lg={4}>
              <DoctorInfo />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
