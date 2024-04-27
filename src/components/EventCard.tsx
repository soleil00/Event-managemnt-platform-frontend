import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/Provider";
import { IEvent } from "../constants/events";
import { useNavigate } from "react-router-dom";

export const EventCard = ({ event }: { event: IEvent }) => {
  const { setSelectedEvent } = useContext(AppContext);
  const navigate = useNavigate(); // Define navigate hook here

  const handleEdit = (event: IEvent) => {
    setSelectedEvent(event);
    navigate("/admin/edit-event");
  };

  return (
    <div className=" shadow-2xl relative">
      <div className="relative">
        <img
          src={`${event.image}`}
          alt="event img"
          className="rounded-md h-[200px] w-full"
        />
        <p className=" absolute bottom-3 left-3 bg-yellow-200 p-2">
          {event?.type}
        </p>
      </div>
      <h2 className="p-2 ">{event.description}</h2>
      <p className=" absolute top-3 right-3 bg-yellow-200 p-2">date</p>
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
    </div>
  );
};
