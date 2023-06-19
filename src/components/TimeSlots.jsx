import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const DaySlots = ({ slotDuration = 20, reservedSlots = [] }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slotIndex) => {
    if (selectedSlot === slotIndex) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(slotIndex);
    }
  };

  const isReserved = (slotIndex) => reservedSlots.includes(slotIndex);

  const rows = [];
  for (let i = 9; i < 17; i++) {
    // 9am to 5pm
    const row = [];
    for (let j = 0; j < 60 / slotDuration; j++) {
      const minute = j * slotDuration;
      const time = `${i.toString().padStart(2, "0")}:${minute
        .toString()
        .padEnd(2, "0")}`;
      const index = i * 60 + minute;
      const disabled = isReserved(index);
      row.push({ time, index, disabled });
    }
    rows.push(row);
  }

  return (
    <Box sx={{ height: "400px", overflowY: "auto" }}>
      <Grid container spacing={2}>
        {rows.map((row, i) => (
          <Grid item xs={12} key={i}>
            <Grid container spacing={2}>
              {row.map((slot) => (
                <Grid item key={slot.index}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: `${slotDuration}px`,
                      height: `${slotDuration}px`,
                      border: "1px solid rgba(0, 0, 0, 0.12)",
                      borderRadius: "4px",
                      backgroundColor:
                        selectedSlot === slot.index
                          ? "green"
                          : slot.disabled
                          ? "rgba(0, 0, 0, 0.12)"
                          : "white",
                      color:
                        selectedSlot === slot.index
                          ? "white"
                          : slot.disabled
                          ? "rgba(0, 0, 0, 0.26)"
                          : "inherit",
                      cursor: slot.disabled ? "default" : "pointer",
                      transition: "background-color 0.2s ease-in-out",
                      "&:hover": {
                        backgroundColor:
                          selectedSlot === slot.index
                            ? "green"
                            : slot.disabled
                            ? "rgba(0, 0, 0, 0.12)"
                            : "rgba(0, 0, 0, 0.04)",
                      },
                    }}
                    onClick={() =>
                      !slot.disabled && handleSlotClick(slot.index)
                    }
                    disabled={slot.disabled}
                  >
                    {slot.time}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DaySlots;
