import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { events } from "../constants/events";
import { CurrentEvent } from "../components/CurrentEvent";
import { EventSummary } from "../components/EventSummary";
import { BookEventModel } from "../components/BookEventModel";

export const EventDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="bg-white">
      <Stack
        className="common  flex gap-5"
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Stack className="flex-1">
          <CurrentEvent />
        </Stack>
        <Stack
          className=" w-[300px] h-[500px] border-2 border-slate-500 rounded-2xl"
          width={{ xs: "100%", sm: "100%", md: "30%" }}
        >
          <EventSummary />
        </Stack>
      </Stack>
      <BookEventModel />
    </div>
  );
};
