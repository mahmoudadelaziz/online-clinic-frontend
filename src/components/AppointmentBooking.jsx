import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WorkDayScheduler from "./DayScheduler";

const AppointmentBooking = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (delta) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + delta);
    setDate(newDate);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <IconButton onClick={() => handleDateChange(-3)}>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2} sx={{ margin: "0 auto" }}>
        <WorkDayScheduler
          slotDuration={20}
          date={new Date(date.getTime() - 1 * 24 * 60 * 60 * 1000)}
        />
      </Grid>
      <Grid item xs={2} sx={{ margin: "0 auto" }}>
        <WorkDayScheduler slotDuration={20} date={date} />
      </Grid>
      <Grid item xs={2} sx={{ margin: "0 auto" }}>
        <WorkDayScheduler
          slotDuration={20}
          date={new Date(date.getTime() + 1 * 24 * 60 * 60 * 1000)}
        />
      </Grid>
      <Grid item>
        <IconButton onClick={() => handleDateChange(3)}>
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AppointmentBooking;
