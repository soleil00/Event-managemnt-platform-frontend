import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../context/Provider";

export const BookEventModel = () => {
  const { isBooking, setIsBooking } = useContext(AppContext);
  return (
    <Box>
      <Dialog open={isBooking} fullWidth onClose={() => setIsBooking(false)}>
        <DialogTitle className="text-center">Book Event</DialogTitle>
        <DialogContent>
          {/* <TextField label="Full Name" fullWidth margin="normal" />
          <TextField label="Email" fullWidth margin="normal" /> */}
          <TextField
            label="Number of Tickets"
            fullWidth
            margin="normal"
            type="number"
          />
          {/* <TextField
            label="Additional Comments"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          /> */}
          <DialogActions>
            <Button variant="contained" color="secondary">
              Book Event
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
