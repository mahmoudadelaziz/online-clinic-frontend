import { Stack, Typography, Button, Grid } from "@mui/material";

export const PatientAppointments = () => {
  return (
    <Grid container>

      <Grid item xs={6} padding={3} textAlign="center">
        <Typography variant="subtitle1" color="gray">
          In (AppDate) At (AppTime)
        </Typography>
        <Typography variant="subtitle1" color="gray">
          With (DName, DSpec)
        </Typography>
        <Typography variant="subtitle1" color="gray">
          in (Location)
        </Typography>
      </Grid>

      <Grid item xs={2} padding={3} textAlign="center">  
      {/* Filler item */}
      </Grid>
      
      <Grid item xs={4} padding={3} textAlign="center">
        <Stack>
              <Typography variant="body1" color="grey">
                (Status)
              </Typography>
              <Button variant="outlined">Reschedule</Button>
              <Button variant="outlined">Cancel</Button>
          </Stack>
      </Grid>

    </Grid>
  );
};
