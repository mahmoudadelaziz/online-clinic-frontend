import { Stack, Typography, Rating, Grid } from "@mui/material";

export const Review = () => {
  return (
    <Grid container>
      <Grid item xs={10}>
        <Stack container direction={"row"} spacing={5}>
          <Stack direction="column" sx={{textAlign: "left"}}>
            <Stack item>Patient's Name</Stack>
            <Stack item>
              <Rating value={4} precision={0.5} />
            </Stack>
            <Stack item>
              <Typography variant="body1" color="grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ligula velit, iaculis semper sem quis, consectetur volutpat
                tellus. Aliquam et nulla efficitur, laoreet mauris id, tincidunt
                lectus.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1" color="gray">
          In (Date)
        </Typography>
      </Grid>
    </Grid>
  );
};
