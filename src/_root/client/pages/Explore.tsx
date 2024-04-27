/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CircularProgress, Grid, Typography } from "@mui/material";
import { EventCard } from "../../../components/EventCard";
import { EventCategories } from "../../../components/EventCategories";
// import { Link } from "react-router-dom";
import Api from "../../../services/api";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/Provider";

export const Explore = () => {
  const [events, setEvents] = useState([]);

  const { refetch } = useContext(AppContext);

  const eventService = new Api();

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [fetchEvents, refetch]);
  return (
    <div className="bg-white">
      <div className="common">
        <Typography
          variant="h1"
          fontSize={{ xs: "30px", sm: "35px", md: "45px" }}
        >
          Explore the best events happening around you
        </Typography>

        <EventCategories />

        <div className="my-4">
          <Grid container spacing={{ xs: 2, md: 3 }} className="mt-4">
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
          </Grid>
        </div>
      </div>
    </div>
  );
};
