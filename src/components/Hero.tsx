import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col justify-center items-center gap-4 p-[20px] bg-[#0D162E] ">
      <Typography
        variant="h2"
        className="text-white text-center text-wrap"
        fontSize={{ xs: "30px", sm: "35px", md: "45px" }}
      >
        Spotlight Your Creativity Curate Unforgettable Event
      </Typography>
      <p className="text-gray-400 text-center">
        RSVP and Management Made Effortless for creators
      </p>

      <div className="flex justify-center items-center gap-5">
        <Link className="px-5 py-3 rounded-3xl bg-[#32C0EF] text-white" to="/">
          Get Started
        </Link>
        <Link className=" px-5 py-3 rounded-3xl bg-[#ea0c66] text-white" to="/">
          Explore Events
        </Link>
      </div>
      {/* <Stack></Stack> */}
    </div>
  );
};
