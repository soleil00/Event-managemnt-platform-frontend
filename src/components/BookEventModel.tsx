import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../context/Provider";

export const BookEventModel = () => {
  const { isBooking, setIsBooking, currentEvent } = useContext(AppContext);
  const [num, setNum] = useState(0);

  const handleClose = () => {
    setIsBooking(false);
    setNum(0);
  };
  return (
    <Box>
      <Dialog open={isBooking} fullWidth onClose={handleClose}>
        <DialogTitle className="text-center">Book Event</DialogTitle>
        <DialogContent>
          <Typography>Available Tickets, {currentEvent.numTickets}</Typography>
          <TextField
            label="Number of Tickets"
            fullWidth
            value={num}
            onChange={(e) => setNum(parseInt(e.target.value))}
            margin="normal"
            type="number"
            disabled={num > currentEvent.numTickets}
          />

          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              disabled={
                currentEvent.status === "ENDED" ||
                currentEvent.status === "CANCELED"
              }
            >
              Book Event
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
