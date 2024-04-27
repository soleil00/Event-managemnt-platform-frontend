import { Grid } from "@mui/material";
import { events } from "../../../constants/events";
import { Link } from "react-router-dom";
import { EventCard } from "../../../components/EventCard";

const AllEvents = () => {
  return (
    <div>
      AllEvents
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {events.map((event) => (
          <Grid item xs={12} sm={4} md={3} key={event.id}>
            <EventCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllEvents;
