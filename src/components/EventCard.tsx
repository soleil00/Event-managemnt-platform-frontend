import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IEvent } from "../constants/types";
import { Receipt } from "@mui/icons-material";
import { formatDate } from "../services/formatter";

export const EventCard = ({ event }: { event: IEvent }) => {
  const { setSelectedEvent, currentUser } = useContext(AppContext);

  const { date, month } = formatDate(event?.date);

  const truncated =
    event.description.length > 40
      ? event.description.substring(0, 50) + "..."
      : event.description;

  const navigate = useNavigate();

  const handleEdit = (event: IEvent) => {
    setSelectedEvent(event);
    navigate("/admin/edit-event");
  };

  return (
    <div className=" shadow-2xl relative">
      <ToastContainer />
      <div className="relative">
        <img
          src={`${event.image}`}
          alt="event img"
          className="rounded-md h-[200px] w-full"
        />
        <div className="absolute top-2 left-2">
          <div className="flex flex-col gap-1">
            <p
              className={` bg-yellow-200 px-2 py-1 flex items-center gap-1  ${
                event.numTickets < 21
                  ? " border-2 border-red-600"
                  : "border-2 border-green-600"
              } border-green-500`}
            >
              <Receipt fontSize="small" />
              {event?.numTickets} tickets remain
            </p>
            <p className=" bg-yellow-200 px-2 py-1">{event?.type}</p>
            <p className=" bg-yellow-200 px-2 py-1">
              {date},{month}
            </p>
          </div>
        </div>
      </div>
      <h2 className="p-2 ">{truncated}</h2>
      <p
        className={` absolute top-2 right-2 text-sm ${
          event.status === "CANCELED"
            ? "bg-red-500 text-white"
            : event.status === "ENDED"
            ? "bg-gray-500 text-white"
            : "bg-green-500 text-white"
        } px-2 py-1`}
      >
        {event.status}
      </p>
      {currentUser?.isAdmin && (
        <div className="flex justify-between items-center p-2">
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleEdit(event)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => setSelectedEvent(event)}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};
