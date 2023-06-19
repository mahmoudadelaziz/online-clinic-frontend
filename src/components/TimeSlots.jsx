import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const WorkDayScheduler = ({ slotDuration = 15 }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slotIndex) => {
    if (selectedSlot === slotIndex) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(slotIndex);
    }
  };

  const rows = [];
  for (let i = 9; i < 17; i++) { // 9am to 5pm
    const row = [];
    for (let j = 0; j < 60 / slotDuration; j++) {
      const minute = j * slotDuration;
      const time = `${i.toString().padStart(2, '0')}:${minute.toString().padEnd(2, '0')}`;
      const index = i * 60 + minute;
      row.push({ time, index });
    }
    rows.push(row);
  }

  return (
    <Box sx={{ height: '200px', overflowY: 'auto' }}>
      <Grid container spacing={2}>
        {rows.map((row, i) => (
          <Grid item xs={12} key={i}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: `${row.length * 40}px`, overflow: 'hidden' }}>
              {row.map((slot) => (
                <Button
                  key={slot.index}
                  variant="outlined"
                  sx={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '4px',
                    backgroundColor: selectedSlot === slot.index ? 'green' : undefined,
                    color: selectedSlot === slot.index ? 'white' : undefined,
                  }}
                  onClick={() => handleSlotClick(slot.index)}
                >
                  {slot.time}
                </Button>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorkDayScheduler;