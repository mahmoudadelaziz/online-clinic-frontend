// CHECKPOINT
import { Stack, Typography, Rating, Grid } from "@mui/material";

export const Review = ({ REVIEW }) => {
  console.log("(🔍🔍🔍 Debugging) Type of the Review date: ", typeof(REVIEW.createdAt))
  return (
    <Grid container>
      <Grid item xs={10}>
        <Stack container direction={"row"} spacing={5}>
          <Stack direction="column" sx={{ textAlign: "left" }}>
            <Stack item>{REVIEW.reviewWriter.name}</Stack>
            {/*  */}
            <Stack item>
            <Typography variant="subtitle1" color="gray">
              In {REVIEW.createdAt}
            </Typography>
              {/*  */}
              <Rating value={REVIEW.rating} precision={0.1} />
            </Stack>
            <Stack item>
              <Typography variant="body1" color="grey">
                {REVIEW.review}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};
