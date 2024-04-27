import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BookingCard from "../components/BookingCard";
import { dummyBookings } from "../constants/bookings";

export const UserDashboard = () => {
  return (
    <div className="common">
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {dummyBookings.map((event) => (
          <Grid item xs={12} sm={4} md={3} key={event.id}>
            {/* <Link to={`/event/${event.id}`}>
              <EventCard />
            </Link> */}
            <BookingCard event={event} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
