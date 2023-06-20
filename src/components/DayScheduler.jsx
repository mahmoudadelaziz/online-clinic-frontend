import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const WorkDayScheduler = ({ slotDuration = 15, date }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  // We'll put the function here
  const handleSlotClick = (slotIndex) => {
    if (selectedSlot === slotIndex) {
      setSelectedSlot(null); // Unselect slot
    } else {
      setSelectedSlot(slotIndex); // Select slot
    }
    // console.log(`Selected slot: ${slotIndex.time}`) // Debugging
  };

  const rows = [];
  const dayStart = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    9
  ); // Start of the work day (Assumed 9 am)
  const dayEnd = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    17
  ); // End of the work day (Assumed 5 pm)

  // NOTE: all these variables in the for loop's () are in milliseconds
  for (
    let i = dayStart.getTime();
    i < dayEnd.getTime();
    i += slotDuration * 60 * 1000
  ) {
    const time = new Date(i).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Using the time format (HH:MM AM/PM )
    const index = i / (slotDuration * 60 * 1000); // For the unique key in the list
    rows.push({ time, index }); // Populating the array with time-index-pair objects
  }
  // console.log(rows); // Debugging

  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  }; // For configuring the date formatting

  return (
    <>
      <Box
        sx={{
          height: "200px",
          overflowY: "auto",
          padding: 2,
          border: 1,
          borderRadius: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: `${rows.length * 40}px`,
                overflow: "hidden",
              }}
            >
              {rows.map((slot) => (
                <Button
                  key={slot.index}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    height: "40px",
                    borderRadius: "4px",
                    backgroundColor:
                      selectedSlot === slot.index ? "green" : undefined,
                    color: selectedSlot === slot.index ? "white" : undefined,
                  }}
                  onClick={() => {handleSlotClick(slot.index),
                    console.log(`Selected: ${date} at ${slot.time}`)}}
                >
                  {slot.time}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}>
        {date.toLocaleDateString("en-US", options)}
      </Box>
    </>
  );
};

export default WorkDayScheduler;
