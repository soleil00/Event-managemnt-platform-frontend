import React from "react";
import { Hero } from "../components/Hero";
import { Creative } from "../components/Creative";
import { Planning } from "../components/Planning";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Creative />
      <Planning />
    </div>
  );
};
