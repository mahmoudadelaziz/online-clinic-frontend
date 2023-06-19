import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const WorkDayScheduler = ({ slotDuration = 30, date }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slotIndex) => {
    if (selectedSlot === slotIndex) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(slotIndex);
    }
  };

  const rows = [];
  const dayStart = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    9
  ); // 9am
  const dayEnd = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    17
  ); // 5pm
  for (
    let i = dayStart.getTime();
    i < dayEnd.getTime();
    i += slotDuration * 60 * 1000
  ) {
    const time = new Date(i).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const index = i / (slotDuration * 60 * 1000);
    rows.push({ time, index });
  }

  return (
    <Box sx={{ height: "200px", overflowY: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}
          >
            {date.toLocaleDateString()}
          </Box>
        </Grid>
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
                onClick={() => handleSlotClick(slot.index)}
              >
                {slot.time}
              </Button>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkDayScheduler;
