/* eslint-disable @typescript-eslint/no-unused-vars */
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { CurrentEvent } from "../../../components/CurrentEvent";
import { EventSummary } from "../../../components/EventSummary";
import { BookEventModel } from "../../../components/BookEventModel";
import Api from "../../../services/api";
import { useState, useEffect } from "react";
import { EventSkeleton } from "../../../components/skeleton/currentEventSkeleton";

export const EventDetailPage = () => {
  const [currentEvent, setCurrentEvent] = useState(null);

  const { id } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const eventService = new Api();

  useEffect(() => {
    const getCurrentEvent = async () => {
      try {
        const response = await eventService.getSingleEvent(id);
        setCurrentEvent(response.event);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    getCurrentEvent();
  }, [eventService, id]);
  return (
    <div className="bg-white">
      {currentEvent === null ? (
        <EventSkeleton />
      ) : (
        <Stack
          className="common  flex gap-5"
          direction={{ xs: "column", sm: "column", md: "row" }}
        >
          <Stack width={{ xs: "100%", sm: "100%", md: "70%" }}>
            <CurrentEvent />
          </Stack>
          <Stack
            className="h-[500px] border-2 border-slate-500 rounded-2xl"
            width={{ xs: "100%", sm: "100%", md: "30%" }}
          >
            <EventSummary />
          </Stack>
        </Stack>
      )}
      <BookEventModel />
    </div>
  );
};
