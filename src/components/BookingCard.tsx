import { Money } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const BookingCard = ({ event }) => {
  const { eventName, eventDate, eventLocation, numTickets } = event;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold">{eventName}</h2>
      <p className="text-gray-600 mb-2">Date: {eventDate}</p>
      <p className="text-gray-600 mb-4">Location: {eventLocation}</p>
      <div className="flex items-center mb-4">
        <span className="mr-2 text-gray-600">Tickets: {numTickets}</span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <Money />
        <Typography>Free</Typography>
      </div>
      <div className="flex justify-between items-center gap-3">
        <Button variant="contained" color="primary" size="small">
          View Detail
        </Button>
        <Button variant="contained" color="error" size="small">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
