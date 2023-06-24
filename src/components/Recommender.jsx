import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Recommender = () => {
  const [symptoms, setSymptoms] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (symptoms.trim() === "") {
      setRecommendation("Please enter your symptoms");
    } else {
      setRecommendation("We recommend you see a doctor.");
    }
  };

  const handleInputChange = (event) => {
    setSymptoms(event.target.value);
  };

  return (
    <Container maxWidth="sm" sx={{ my: 15 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" mb={3}>
          Not sure what to look for?
        </Typography>
        <Typography variant="body2" mb={3} textAlign="center" fontSize="18px">
          Enter your symptoms and we'll help you find the medical specialty to
          look for.
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            id="symptoms"
            name="symptoms"
            label="Enter your symptoms"
            multiline
            fullWidth
            value={symptoms}
            onChange={handleInputChange}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ width: "100%" }}
            >
              Submit
            </Button>
          </Box>
        </form>
        {recommendation && (
          <Typography variant="h5" mt={3}>
            {recommendation}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};
export { Recommender };
