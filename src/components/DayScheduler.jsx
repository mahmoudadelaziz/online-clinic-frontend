import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";

// Note: We are assuming a work day from 9 AM to 5 PM
const DaySlots = ({
  slotDuration = 20,
  date,
  workingHoursStart = 9,
  workingHoursEnd = 14,
}) => {
  /*  
  The component takes the arguments (props):
  slotDuration: The slot duration of the doctor (default = 30 minutes)
  date: A day's date
  */

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [note, setNote] = useState("");

  const rows = [];
  const dayStart = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    workingHoursStart
  ); // Start of the work day (Assumed 9 am)
  const dayEnd = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    workingHoursEnd
  ); // End of the work day (Assumed 5 pm)

  const handleSlotClick = (slotIndex) => {
    if (selectedSlot === slotIndex) {
      setSelectedSlot(null); // Unselect slot
    } else {
      setSelectedSlot(slotIndex); // Select slot
      setModalOpen(true); // Open modal
    }
  };

  const handleCancelClick = () => {
    setSelectedSlot(null); // Unselect slot
    setModalOpen(false); // Close modal
    setNote(""); // Clear note
  };

  const handleConfirmClick = () => {
      console.log(`Selected slot: ${date} at ${rows[selectedSlot]}`);
      console.log(`Note: ${note}`);
    setSelectedSlot(null); // Unselect slot
    setModalOpen(false); // Close modal
    setNote(""); // Clear note
  };
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
                  onClick={() => handleSlotClick(slot.index)}
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
      <Modal
        open={modalOpen}
        onClose={handleCancelClick}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
          }}
        >
          <h2 id="modal-title">Book an appointment</h2>
          <p id="modal-description">Please provideyour details below:</p>
          <TextField
            label="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleConfirmClick}
            sx={{ mr: 2 }}
          >
            Confirm
          </Button>
          <Button variant="outlined" onClick={handleCancelClick}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default DaySlots;
