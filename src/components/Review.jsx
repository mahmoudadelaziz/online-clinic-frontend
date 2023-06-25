import { Stack, Typography, Rating } from "@mui/material";

export const Review = ({ patientName, text, rating }) => {
  return (
    <Stack container direction={"row"} spacing={5}>
      <Stack direction="column">
        <Stack item>Patient's Name</Stack>
        <Stack item>
          <Rating value={4} precision={0.5} />
        </Stack>
        <Stack item>
          <Typography variant="body1" color="grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ligula velit, iaculis semper sem quis, consectetur volutpat tellus.
            Aliquam et nulla efficitur, laoreet mauris id, tincidunt lectus.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
