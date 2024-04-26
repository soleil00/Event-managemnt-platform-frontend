import {
  Edit,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Fab, Stack } from "@mui/material";
import { features } from "../constants/constants";
// import { FeatureCard } from "./FeatureCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/swipper.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

export const Features = () => {
  return (
    <div>
      <Stack direction={"row"} className="gap-[200px] common items-center">
        <Stack
          className=" w-full h-1 bg-gray-300 rounded-md"
          display={{ xs: "none", sm: "block", md: "block" }}
        ></Stack>
        <Stack direction={"row"} className="gap-5">
          <Fab
            aria-label="add"
            sx={{
              background: "#0D162E",
              border: "1px solid white",
              ":hover": { background: "#EB0E66", border: "none" },
            }}
          >
            <KeyboardArrowLeft className="text-white" />
          </Fab>
          <Fab
            aria-label="add"
            sx={{
              background: "#32C0EF",
              ":hover": { background: "#32C0EF" },
            }}
          >
            <KeyboardArrowRight />
          </Fab>
        </Stack>
      </Stack>
      <Stack>
        {/* {features.map((feature) => (
          <FeatureCard key={feature.icon} />
        ))} */}
      </Stack>

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
        {features.map((feature) => (
          <SwiperSlide
            key={feature.icon}
            className="flex flex-col gap-3 p-6 bg-white rounded-lg mb-3"
          >
            <Edit />
            <h1 className=" font-bold">Feature header</h1>
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel
              voluptatum voluptatibus inventore repellat, minus facere amet
              rerum necessitatibus laborum fugiat atque officiis id animi
              aspernatur deserunt dignissimos suscipit culpa.
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
