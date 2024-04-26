import { CatchingPokemon, MenuOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#0D162E] p-[20px] common">
      <Stack direction={"row"} className="justify-center items-center gap-1">
        <CatchingPokemon className="text-white" />
        <h4 className="text-white">SpotLight</h4>
      </Stack>
      <Stack
        className="flex-cols gap-5"
        direction={"row"}
        display={{ xs: "none", sm: "none", md: "flex" }}
      >
        <Link to="/" className="text-white">
          Explore
        </Link>
        <Link to="/auth/sign-in" className="text-white">
          Login
        </Link>
        <Link to="/auth/sign-up" className="text-white">
          Signup
        </Link>
      </Stack>
      <IconButton
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          color: "white",
        }}
      >
        <MenuOutlined fontSize="small" />
      </IconButton>
    </nav>
  );
};
