import { Money } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { IBooking } from "../constants/types";
import { formatDate } from "../services/formatter";

const BookingCard = ({ ticket }: { ticket: IBooking }) => {
  const {
    event: { location, date, name },
    numTickets,
  } = ticket;

  const { date: newDate, month, year } = formatDate(date);

  const formated = `${newDate},${month},${year}`;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600 mb-2">{formated}</p>
      <p className="text-gray-600 mb-4">Location: {location}</p>
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
