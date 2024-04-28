import {
  CatchingPokemon,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0D162E] mt-auto">
      <footer className="flex justify-between items-center bg-[#0D162E] p-[20px] common ">
        <Stack
          direction={"row"}
          className="justify-center items-center gap-1"
          onClick={() => navigate("/")}
        >
          <CatchingPokemon className="text-white" />
          <h4 className="text-white">SpotLight</h4>
        </Stack>
        <Stack className="flex-cols gap-2">
          <Link to="/" className="text-white">
            Explore
          </Link>

          <Link to="/auth/sign-up" className="text-white">
            Dashboard
          </Link>
        </Stack>
      </footer>
      <div className="w-full h-[2px] mb-[20px] bg-slate-500"></div>
      <Stack spacing={3}>
        <Stack
          direction={"row"}
          className="justify-center items-center"
          gap={3}
        >
          <Link to="/">
            <Instagram fontSize="large" className="text-white" />
          </Link>
          <Link to="/">
            <LinkedIn fontSize="large" className="text-white" />
          </Link>
          <Link to="/">
            <GitHub fontSize="large" className="text-white" />
          </Link>
        </Stack>
        <Stack>
          <p className="text-white text-center mb-3">
            © 2024 Event Management | All rights reserved | @Soleil00
          </p>
        </Stack>
      </Stack>
    </div>
  );
};
