/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CircularProgress, Grid, Typography } from "@mui/material";
import { EventCard } from "../../../components/EventCard";
import { EventCategories } from "../../../components/EventCategories";
// import { Link } from "react-router-dom";
import Api from "../../../services/api";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/Provider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../styles/explore.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export const Explore = () => {
  const [events, setEvents] = useState([]);
  const { refetch } = useContext(AppContext);
  const navigate = useNavigate();

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
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                {events.map((event) => (
                  <SwiperSlide
                    key={event.name}
                    className=" bg-white rounded-lg"
                    onClick={() => navigate(`/event/${event._id}`)}
                  >
                    <EventCard event={event} />
                  </SwiperSlide>
                ))}
              </Swiper>
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
