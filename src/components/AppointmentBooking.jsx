import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DaySlots from "./DayScheduler";

const AppointmentBooking = ({
  workingHoursStart,
  workingHoursEnd,
  doctorId,
}) => {
  const [date, setDate] = useState(new Date());
  // Initial value of date: the current datetime

  // Going back and forth between dates
  const handleDateChange = (delta) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + delta);
    setDate(newDate);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <IconButton onClick={() => handleDateChange(-3)}>
          {/* To show the previous 3 days */}
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item xs={2} sx={{ margin: "0 auto" }}>
        {/* Today's slots */}
        <DaySlots
          doctorId={doctorId}
          workingHoursStart={workingHoursStart}
          workingHoursEnd={workingHoursEnd}
          slotDuration={20}
          date={date}
        />
      </Grid>
      <Grid item xs={2} sx={{ margin: "0 auto" }}>
        {/* Tomorrow's slots */}
        <DaySlots
          workingHoursStart={workingHoursStart}
          workingHoursEnd={workingHoursEnd}
          slotDuration={20}
          date={new Date(date.getTime() + 1 * 24 * 60 * 60 * 1000)}
        />
      </Grid>
      <Grid item xs={2} sx={{ margin: "0 auto" }}>
        {/* The day after tomorrow's slots */}
        <DaySlots
          workingHoursStart={workingHoursStart}
          workingHoursEnd={workingHoursEnd}
          slotDuration={20}
          date={new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000)}
        />
      </Grid>
      <Grid item>
        <IconButton onClick={() => handleDateChange(3)}>
          {/* To show the following 3 days */}
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export { AppointmentBooking };
