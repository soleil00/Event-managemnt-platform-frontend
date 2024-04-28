import {
  AddLocation,
  AirplaneTicket,
  Bookmark,
  DateRange,
} from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/Provider";
import { formatDate } from "../services/formatter";

export const EventSummary = () => {
  const { setIsBooking, currentEvent } = useContext(AppContext);

  const { date, month, year } = formatDate(currentEvent?.date);

  const formated = `${month},${date},${year}`;

  return (
    <div className="p-4 flex flex-col gap-3">
      <Typography variant="h5">Event title here</Typography>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <Bookmark />
        <p>{currentEvent?.type}</p>
      </Stack>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <DateRange />
        <p>{formated}</p>
      </Stack>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <AddLocation />
        <p>{currentEvent?.location}</p>
      </Stack>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <AirplaneTicket />
        <p>{currentEvent?.numTickets} Ticket</p>
      </Stack>

      <Stack
        direction={"row"}
        className=" items-center justify-between"
        spacing={2}
      >
        <Stack direction={"row"} className=" items-center" spacing={2}>
          <p className=" px-4 py-1 text-white rounded-full text-center bg-green-500">
            Free
          </p>
        </Stack>
        <p className=" bg-gray-400 px-4 py-1 rounded-full">Online</p>
        <Stack>
          <Button
            variant="contained"
            size="small"
            color="info"
            onClick={() => setIsBooking(true)}
          >
            Book
          </Button>
        </Stack>
      </Stack>
      {/* <Stack
        direction={"row"}
        className=" items-center justify-between"
        spacing={2}
      >
        <Stack direction={"row"} className=" items-center" spacing={2}>
          <p className=" px-4 py-1 text-white whitespace-nowrap rounded-full text-center bg-green-500">
            56 $
          </p>
        </Stack>
        <p className=" bg-gray-400 px-4 py-1 rounded-full">Offline</p>
        <Stack>
          <Button
            variant="contained"
            size="small"
            color="info"
            className="text-[10px]"
            onClick={() => setIsBooking(true)}
          >
            Get Ticket
          </Button>
        </Stack>
      </Stack> */}
      <Typography>{currentEvent?.description}</Typography>
    </div>
  );
};
