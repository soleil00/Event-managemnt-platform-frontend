import { Grid, Typography } from "@mui/material";
import { EventCard } from "../../../components/EventCard";
import { EventCategories } from "../../../components/EventCategories";
import { events } from "../../../constants/events";
import { Link } from "react-router-dom";

export const Explore = () => {
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

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {events.map((event) => (
            <Grid item xs={12} sm={4} md={3} key={event.id}>
              <Link to={`/event/${event.id}`}>
                <EventCard />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
