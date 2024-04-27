import { CircularProgress, Grid } from "@mui/material";
// import { events } from "../../../constants/events";
import { EventCard } from "../../../components/EventCard";
import { ConfirmDelete } from "../../../components/shared/ConfirmDelete";
import { useContext, useEffect, useState } from "react";
import Api from "../../../services/api";
import { AppContext } from "../../../context/Provider";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const { refetch } = useContext(AppContext);

  const eventService = new Api();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchEvents = async () => {
    try {
      const response = await eventService.getAllEvents();
      console.log("from events ---> ", response);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      setEvents(response?.events);
    } catch (error) {
      console.log("from events ---> ", error);
    }
  };

  useEffect(() => {
    fetchEvents()
      .then((ev) => ev)
      .catch((error) => console.log(error));
  }, [fetchEvents, refetch]);
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
