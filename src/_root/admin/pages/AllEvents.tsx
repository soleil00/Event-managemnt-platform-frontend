import { CircularProgress, Grid } from "@mui/material";
// import { events } from "../../../constants/events";
import { Link } from "react-router-dom";
import { EventCard } from "../../../components/EventCard";
import { ConfirmDelete } from "../../../components/shared/ConfirmDelete";
import { useEffect, useState } from "react";
import Api from "../../../services/api";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  const eventService = new Api();

  const fetchEvents = async () => {
    try {
      const response = await eventService.getAllEvents();
      console.log("from events ---> ", response);
      //@ts-ignore
      setEvents(response?.events);
    } catch (error) {
      console.log("from events ---> ", error);
    }
  };

  useEffect(() => {
    fetchEvents()
      .then((ev) => ev)
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      AllEvents
      {events.length > 0 ? (
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {events.map((event) => (
            <Grid item xs={12} sm={4} md={3} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
      <ConfirmDelete />
    </div>
  );
};

export default AllEvents;
