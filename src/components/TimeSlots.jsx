import * as React from "react";
import { useState } from "react";
import { Grid, Button } from "@mui/material";

const WorkDayScheduler = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slotIndex) => {
    if (selectedSlot === slotIndex) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(slotIndex);
    }
  };

  const slots = [];
  for (let i = 0; i < 16; i++) {
    const hour = Math.floor(i / 2) + 9; // 9am to 5pm
    const minute = (i % 2) * 30; // 0 or 30 minutes
    const time = `${hour
      .toString()
      .padStart(2, "0")}:${minute.toString().padEnd(2, "0")}`;
    slots.push({ time, index: i });
  }

  return (
    <Grid container spacing={2}>
      {slots.map((slot) => (
        <Grid item xs={3} key={slot.index}>
          <Button
            variant="outlined"
            sx={{
              height: "60px",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              backgroundColor: selectedSlot === slot.index ? "green" : "white",
              color: selectedSlot === slot.index ? "white" : "inherit",
              cursor: "pointer",
              transition: "background-color 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)"
              }
            }}
            onClick={() => handleSlotClick(slot.index)}
          >
            {slot.time}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default WorkDayScheduler;