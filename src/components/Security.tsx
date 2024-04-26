import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Security = () => {
  return (
    <div className="bg-white">
      <Stack
        className="common items-center gap-7 "
        direction={{ xs: "column", sm: "column", md: "row" }}
      >
        <Stack spacing={4} width={{ xs: "100%", small: "100%", md: "50%" }}>
          <Typography
            className="text-[#EA0C66]"
            variant="h1"
            fontSize={{ xs: "30px", sm: "35px", md: "45px" }}
          >
            Security And Reliability
          </Typography>
          <p className="w-full h-[2px] bg-slate-500 rounded-md"></p>
          <p className=" text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, odio
            facere, aperiam fugit, corporis sunt enim numquam placeat aliquid
            dignissimos necessitatibus ab debitis. Optio et aliquam nihil dolore
            ut nostrum.
          </p>
          <Link
            className="px-5 py-3 rounded-3xl bg-[#EA0C66] text-white w-[200px] text-center"
            to="/"
          >
            Go To Dashboard
          </Link>
        </Stack>
        <Stack width={{ xs: "100%", small: "100%", md: "50%" }}>
          <img
            src="https://spot-light-appwrite.vercel.app/static/media/security.9e0c85df1eb5ccc91b86.jpg"
            alt="image will appear here"
            className=""
          />
        </Stack>
      </Stack>
    </div>
  );
};
