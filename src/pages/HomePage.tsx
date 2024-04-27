import { Hero } from "../components/Hero";
import { Creative } from "../components/Creative";
import { Planning } from "../components/Planning";
import { Features } from "../components/Features";
import { Security } from "../components/Security";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Creative />
      <Planning />
      <Features />
      <Security />
    </div>
  );
};
