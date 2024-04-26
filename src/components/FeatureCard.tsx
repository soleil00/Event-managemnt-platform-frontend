import { Edit } from "@mui/icons-material";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/swipper.css";

export const FeatureCard = () => {
  return (
    <SwiperSlide className="flex flex-col gap-3 p-6 bg-white rounded-lg mb-3">
      <Edit />
      <h1 className=" font-bold">Feature header</h1>
      <p className="text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel
        voluptatum voluptatibus inventore repellat, minus facere amet rerum
        necessitatibus laborum fugiat atque officiis id animi aspernatur
        deserunt dignissimos suscipit culpa.
      </p>
    </SwiperSlide>
  );
};
