// CHECKPOINT
import { Stack, Typography, Rating, Grid } from "@mui/material";

export const Review = ({ REVIEW }) => {
  console.log("(🔍🔍🔍 Debugging) Type of the Review date: ", typeof(REVIEW.createdAt))
  let reviewDateISOString = REVIEW.createdAt
  let reviewDate = new Date(reviewDateISOString)
  let formattedReviewDate = reviewDate.toUTCString()
  return (
    <Grid container>
      <Grid item xs={10}>
        <Stack container direction={"row"} spacing={5}>
          <Stack direction="column" sx={{ textAlign: "left" }}>
            <Stack item>
              <Typography sx={{fontSize: 20}}>
              {REVIEW.reviewWriter.name}
              </Typography>
              </Stack>
            {/*  */}
            <Stack item>
            <Typography variant="subtitle1" color="gray">
              {formattedReviewDate}
            </Typography>
              {/*  */}
              <Rating value={REVIEW.rating} precision={0.1} />
            </Stack>
            <Stack item>
              <Typography sx={{fontSize: 18, my: 2 }} variant="body1" color="black">
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
