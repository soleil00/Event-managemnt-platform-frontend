import {
  AddLocation,
  AirplaneTicket,
  Bookmark,
  DateRange,
  Wallet,
} from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/Provider";

export const EventSummary = () => {
  const { setIsBooking } = useContext(AppContext);
  return (
    <div className="p-4 flex flex-col gap-3">
      <Typography variant="h5">Event title here</Typography>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <Bookmark />
        <p>Category</p>
      </Stack>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <DateRange />
        <p>Date</p>
      </Stack>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <AddLocation />
        <p>location</p>
      </Stack>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <AirplaneTicket />
        <p>45 Ticket</p>
      </Stack>
      <Stack direction={"row"} className=" items-center" spacing={2}>
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.laz6w-yVUIaeFQuuyycf2wHaEc&pid=Api&P=0&h=220"
          alt="map here"
          className=" rounded-md"
        />
      </Stack>
      <Stack
        direction={"row"}
        className=" items-center justify-between"
        spacing={2}
      >
        <Stack direction={"row"} className=" items-center" spacing={2}>
          <Wallet />
          <p>Free</p>
        </Stack>
        <Stack>
          <Button
            variant="contained"
            color="error"
            onClick={() => setIsBooking(true)}
          >
            Book Event
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
