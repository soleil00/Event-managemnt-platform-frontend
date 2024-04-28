import { CircularProgress, Grid } from "@mui/material";
import BookingCard from "../../../components/BookingCard";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/Provider";
import Api from "../../../services/api";
import { IBooking } from "../../../constants/types";

export const UserDashboard = () => {
  const { currentUser } = useContext(AppContext);
  const [bookings, setBooking] = useState<IBooking[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const api = new Api();

  const get = async () => {
    try {
      setIsloading(true);
      const response = await api.getUserTicket(currentUser._id);

      const { data } = response;
      setBooking(data.bookings);
    } catch (error) {
      setIsloading(false);
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    get()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="common">
      {isLoading ? (
        <div className=" w-full h-full flex justify-center items-center">
          <CircularProgress className="" />
        </div>
      ) : (
        <>
          {bookings?.length > 0 ? (
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {bookings.map((ticket) => (
                <Grid item xs={12} sm={4} md={3} key={ticket._id}>
                  <BookingCard ticket={ticket} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <div className=" w-full h-full flex justify-center items-center">
              <p>No Ticket</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
