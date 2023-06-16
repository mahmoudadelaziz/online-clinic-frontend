import { Stack, Typography, Rating, Grid } from "@mui/material";

export const PatientReviews = () => {
  return (
    <Grid container>
    <Grid item xs={4} padding={1} textAlign="center">
      <Typography variant="subtitle1" color="gray">In (AppDate)</Typography>
      <Typography variant="subtitle1" color="gray">For (DName, DSpec)</Typography>
    </Grid>
      <Grid item xs={8} padding={1} textAlign="left">
    <Stack container direction={"row"} spacing={5}>
      <Stack direction="column" >
        <Stack item>
          <Rating value={4} precision={0.5} />
        </Stack>
        <Stack item >
          <Typography variant="body1" color="grey" >
            (Review Text...) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula velit, iaculis semper sem quis, consectetur volutpat tellus.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
    </Grid>
    </Grid>
  );
};
