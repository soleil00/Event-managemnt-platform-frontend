import { Money } from "@mui/icons-material";
import { Button, CircularProgress, Typography } from "@mui/material";
import { IBooking } from "../constants/types";
import { formatDate } from "../services/formatter";
import { useEffect, useState } from "react";
import Api from "../services/api";
import { ToastContainer, toast } from "react-toastify";

const BookingCard = ({ ticket }: { ticket: IBooking }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const {
    event: { location, date, name },
    numTickets,
  } = ticket;

  const { date: newDate, month, year } = formatDate(date);

  const formated = `${newDate},${month},${year}`;

  const api = new Api();

  const handleCancelBooking = async () => {
    try {
      setIsDeleting(true);
      const response = await api.cancelBooking(ticket._id);

      toast.success("Successfuly cancelled Ticket", { autoClose: 1000 });

      console.log("from cancel booking ----> : ", response);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong try again later", { autoClose: 1000 });
      setIsDeleting(false);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {}, []);

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
        <Button
          variant="contained"
          color="error"
          size="small"
          startIcon={
            isDeleting && <CircularProgress size={"small"} color="success" />
          }
          disabled={isDeleting}
          onClick={handleCancelBooking}
        >
          Cancel
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookingCard;
