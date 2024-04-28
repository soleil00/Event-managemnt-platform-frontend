import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../context/Provider";
import Api from "../services/api";
import { toast } from "react-toastify";

export const BookEventModel = () => {
  const { isBooking, setIsBooking, currentEvent, isLoggedIn } =
    useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [num, setNum] = useState(1);

  const eventService = new Api();

  const handleBookEvent = async () => {
    if (num === 0) {
      toast.error("Please Enter valid number of ticket", { autoClose: 1000 });
      return;
    }
    if (!isLoggedIn) {
      toast.error("Please login to book an event", { autoClose: 1000 });
      return;
    }

    try {
      setIsLoading(true);
      const response = await eventService.bookEvent(currentEvent._id, num);

      setIsBooking(false);
      toast.success(response.message, { autoClose: 1000 });
      currentEvent.numTickets -= num;
    } catch (error) {
      setIsLoading(true);
      toast.error(error.message, { autoClose: 1000 });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsBooking(false);
    setNum(0);
  };

  return (
    <Box>
      <Dialog open={isBooking} fullWidth onClose={handleClose}>
        <DialogTitle className="text-center">Book Event</DialogTitle>
        <DialogContent>
          {currentEvent.status === "ACTIVE" ? (
            <>
              {currentEvent.numTickets === 0 ? (
                <Typography className="text-center">Out of ticket</Typography>
              ) : (
                <>
                  <Typography>
                    Available Tickets: {currentEvent?.numTickets}
                  </Typography>
                  <TextField
                    label="Number of Tickets"
                    fullWidth
                    value={num}
                    onChange={(e) => setNum(parseInt(e.target.value))}
                    margin="normal"
                    type="number"
                    disabled={!currentEvent || num > currentEvent.numTickets}
                  />
                  <DialogActions>
                    <Button
                      onClick={handleBookEvent}
                      variant="contained"
                      color="primary"
                      startIcon={
                        isLoading && (
                          <CircularProgress color="secondary" size={"small"} />
                        )
                      }
                    >
                      {isLoading ? "Booking event..." : "Book Event"}
                    </Button>
                  </DialogActions>
                </>
              )}
            </>
          ) : currentEvent.status === "CANCELED" ? (
            <Typography className=" text-center">
              This Event has been Cancelled
            </Typography>
          ) : (
            <Typography className=" text-center">
              This Event has Ended
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
