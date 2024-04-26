import { Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";

export const Creative = () => {
  return (
    <div className=" bg-white">
      {/* <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide> */}
      <Stack
        className="p-[20px] common gap-3"
        direction={{ xs: "column-reverse", sm: "column", md: "row" }}
      >
        <div className="flex-1">
          <img
            src="https://spot-light-appwrite.vercel.app/static/media/3187910.d4f2d36e4a30e6346381.jpg"
            alt="image will appear here"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          {/* <h1>Unlock Creative Potential</h1> */}
          <Typography
            variant="h3"
            className="text-[#EB0E66] font-extrabold"
            fontSize={{ xs: "30px", sm: "35px", md: "45px" }}
          >
            {" "}
            Unlock Creative Potential
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio
            quos modi ipsum. Fugit sed vel inventore in quae voluptate veniam.
            Esse nemo omnis dignissimos possimus earum reprehenderit
            exercitationem aut?
          </p>
          <Link
            className="px-5 py-3 rounded-3xl bg-[#32C0EF] text-white text-center w-[200px]"
            to="/"
          >
            Get Started
          </Link>
        </div>
      </Stack>
    </div>
  );
};
